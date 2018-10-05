import React, { Component } from 'react';

class NameForm extends Component {
  render() {
    return (
      <div>
          <p>This is coming from Components/NameForm.js</p>
        <form>
            <input type="text" placeholder="Input your name here"/>
        </form>
      </div>
    );
  }
}

export default NameForm;
