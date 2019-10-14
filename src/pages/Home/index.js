import React, { Component } from 'react';

import Contacts from './components/Contacts';

class Home extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('https://ancient-fortress-81160.herokuapp.com/api/contacts')
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default Home;
