import React, {Component} from 'react';

export default class Carousel extends Component {

    get posts() {
        let post = this.props.posts[this.props.index];
        return ( <div>
                <p className="legend">{post.data.author}</p>
                <img src={post.data.thumbnail}/>
                <p className="score">{post.data.score}</p>
            </div>
        )
    }

    render() {
        return (<div>{this.posts}</div>)
    }


}