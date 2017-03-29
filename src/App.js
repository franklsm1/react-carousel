import React, {Component} from 'react';
import logo from './logo.svg';
import Carousel from "./carousel"

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: null
        }

        this.state = {index: 0};
        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
    }

    previousImage() {
        let index = this.state.index
        this.setState({index: index > 0 ? index - 1 : index})
    }

    nextImage() {
        //TODO: get length of carousel array to assert index does not go over
        let index = this.state.index
        this.setState({index: index + 1})
    }

    get imageDiv() {
        //TODO: put carousel array of divs into here and return current index
        //using test data to verify for now
        let url1 = "http://www.forums.mlb.com/dir-bbcard/242/1896494424.icon";
        let url2 = "https://i.ytimg.com/vi/gI8i10iDW00/hqdefault.jpg"
        let url3 = "http://a.espncdn.com/i/teamlogos/nba/500/scoreboard/ny.png"

        let options = [
            (<div><img src={url1}/></div>),
            (<div><img src={url2}/></div>),
            (<div><img src={url3}/></div>)
        ]

        return options[this.state.index]
    }

    componentWillMount() {
        let me = this;
        return fetch('https://www.reddit.com/r/funny.json')
            .then(function (response) {
                    if (response.status === 200) {
                        return response.json()
                    }
                    else
                        throw new Error("This failed with rc: " + response.status)
                }
            )
            .then(response => {
                let state = me.state;
                state.posts = response.data.children;
                me.setState(state)
            })
            .catch(function (error) {
                console.log('error', error)
            })
    }

    render() {

        let carousel = this.state.posts ? (<Carousel posts={this.state.posts} index={this.state.index}/>) : (<div></div>);

        return (
            <div className="App">
                <div style={{display: "flex", alignItems: "center"}}>
                    <button onClick={this.previousImage}> &lt; </button>
                    {carousel}
                    <button onClick={this.nextImage}> &gt; </button>
                </div>
            </div>
        );
        // });
    }
}

export default App;
