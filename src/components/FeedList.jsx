import React, { Component } from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends Component {
  render() {
    const {photos} = this.props
    // map over the photos
    const images = photos.map((image, i) =>
      <FeedItem key={i} imagePost={image} />
    )

    return (
      <div className="FeedList">
        {images}
      </div>
    );
  }
}

export default FeedList;
