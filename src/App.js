import React, { Component } from 'react';

import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';
import NavbarMenu from './components/Navbar';

import './App.css';

class App extends Component {

  state = {
    firstName: ''
  }

  nameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
    console.log(this.state.firstName)
  }
  

  render() {
    return (
      <div className="app">
        <NavbarMenu />
        <h1>APP.js</h1>
        
        <form>
          <input type="text" placeholder="Enter your first name" onChange={this.nameChange}/>
        </form>
        <p>App State: {this.state.firstName}</p>
        <HomePage name={this.state.firstName}/>

        <ContactPage />




        {/* <ResumePage /> */}
        {/* <AboutPage /> */}
      </div>
    );
  }
}

export default App;