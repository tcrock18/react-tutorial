import React, { Component, Fragment } from 'react';
import NameForm from '../components/NameForm';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1>HOME PAGE</h1>
        <p>Form created in HomePage</p>
        <form>
          <input type="text" name="input-name" placeholder="input name"/>
        </form>
        <NameForm />
      </Fragment>
    );
  }
}

export default HomePage;