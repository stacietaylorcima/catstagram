import React, { Component } from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends Component {
  render() {
    return (
      <div className="FeedList">
        <FeedItem />
      </div>
    );
  }
}

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem
export default FeedList;
