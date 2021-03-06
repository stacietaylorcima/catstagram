import React, { Component } from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';


class HomePage extends Component {
  render() {
    // Deconstruct the photos from data.json
    const { photos } = data;

  	return (
  		<div className="HomePage">
        <ImageUploaderForm />
        <FeedList photos = {photos} />
    	</div>
    );
  }
}

export default HomePage;


// Exercise 5: Let’s Get InFormation - BONUS
	// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
	// you will need to create a function called handleAddPhoto that updates photos state by
	// accepting a url and creating a new object in photos state of the homepage component.
    // Then pass in that function as props to ImageUploaderForm
    // and when the user submits, call that function with the user submitted url.
