import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Form inline>
        <h2>Input your birthday</h2>
          <FormControl type="date" />
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
