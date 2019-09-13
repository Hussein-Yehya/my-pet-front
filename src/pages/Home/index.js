import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Contacts from './components/Contacts';
import { CREATE } from '../../helpers/urls';
import Menu from '../../components/Menu';

class Home extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/contacts')
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <Menu />
        <Contacts contacts={this.state.contacts} />
        <Link to={CREATE}> Cadastrar </Link>
      </>
    );
  }
}

export default Home;
