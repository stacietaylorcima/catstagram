import React, { Component } from 'react';

class Likes extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLiked: false
    }
  }

  handleClick = () => {
    this.setState ({
      isLiked: !this.state.isLiked
    })
  }


  render() {
    const {likes, userLiked} = this.props


    return (
      <div className="Likes">
        <span>{likes}</span>
        <button className="LikesButton" onClick={this.handleClick}>{this.state.isLiked ? 'Liked!' : 'Like?'}</button>
      </div>
    );
  }
}

// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

export default Likes;
