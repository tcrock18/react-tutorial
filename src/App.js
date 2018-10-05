import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';

class App extends Component {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <HomePage />
        <AboutPage />
        <ContactPage />
        <ResumePage />
      </div>
    );
  }
}

export default App;