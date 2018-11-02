import React, { Component } from 'react';
import NameForm from '../components/NameForm'

class ContactPage extends Component {
  render() {
    return (
      <div className="contact">
        <h1>CONTACT PAGE</h1>
        <NameForm />
      </div>
    );
  }
}

export default ContactPage;
