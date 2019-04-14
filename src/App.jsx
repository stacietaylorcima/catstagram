import React, { Component } from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        <div>Hello again</div>
      </div>
    );
  }
}

// Exercise 6: Routing
// Allow your user to route to different pages!
	// need to import BrowserRouter and Router from react-router-dom
	// Create basic class components on AboutPage and Profile Page, export them
	// import them in this file
	// set up BrowserRouter
	// set up Route to with paths to each page (hint: HomePage should "/") and with the appropriate component


export default App;
