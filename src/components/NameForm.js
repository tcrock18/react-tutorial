import React, { Component } from 'react';

class NameForm extends Component {
  render() {
    return (
      <div className="name-form">
          <p>NAME FORM</p>
        <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="Email"/>
        </form>
      </div>
    );
  }
}

export default NameForm;
