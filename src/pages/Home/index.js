import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Contacts from './components/Contacts';
import ContactFomr from '../form/';
import { INFO, CREATE } from '../../helpers/urls';

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
        <Contacts contacts={this.state.contacts} />
        <Link to={INFO}> Ir para a página de Info </Link>
        <Link to={CREATE}> Cadastrar </Link>
      </>
    );
  }
}

export default Home;
