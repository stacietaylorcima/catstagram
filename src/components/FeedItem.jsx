import React, { Component } from 'react';
import Likes from './Likes.jsx';

class FeedItem extends Component {
  render (){
    return (
      <div className="FeedItem">
        <img className="Image" src="" />
        <Likes />
      </div>
    );
  }
}

// Exercise 3: Prop It Up
	// pass in props as params to the component
	// destructure what you need from the props
	// Hint: what do you need in order to get the image to display?
	// Hint: what do you need in order to get likes to display in the Likes component?
export default FeedItem;
