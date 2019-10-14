import React, { Component } from 'react';

import Pets from './components/Pets';

class Home extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    fetch('https://ancient-fortress-81160.herokuapp.com/api/contacts')
      .then(res => res.json())
      .then(data => {
        this.setState({ pets: data });
      })
      .catch(console.log);
  }

  render() {
    return <Pets pets={this.state.pets} />;
  }
}

export default Home;
