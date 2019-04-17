import React, { Component } from 'react';
import Likes from './Likes.jsx';

class FeedItem extends Component {
  render (){
    const { imagePost } = this.props
    const {id, title, url, likes, userLiked} = imagePost

    return (
      <div className="FeedItem">
        <img className="Image" src={imagePost.url} />
        {imagePost.title}
        <Likes likes={likes} userLiked={userLiked}/>
      </div>
    );
  }
}

export default FeedItem;
