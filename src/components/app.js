import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './app.css';
import AgeStats from './age-stats';

class App extends Component {
  constructor() {
    super(); // Required before we can use the "this" keyword
    this.state = {
      newDate: '',
      birthday: '1999-06-21',
      showStats: false
    };
  }

  changeBirthday() {
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    });
  }

  render() {
    return (
      <div className="app">
        <Form inline>
          <h2>Input your birthday</h2>
          <FormControl
            type="date"
            onChange={ event => this.setState({newDate: event.target.value}) }/>
          {' '}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
        </Form>
        {
          this.state.showStats
          ? <div className="fade age-stats">
              <AgeStats date={this.state.birthday}/>
            </div>
          : <div />
        }
      </div>
    );
  }
}

export default App;
