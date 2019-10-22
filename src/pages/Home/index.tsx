import React, { Component } from 'react';

import Pets from './components/Pets';
import Search from 'components/Search';
import { getUserInfo } from '../../helpers/user';
import { HOME, LOGIN } from '../../helpers/urls';
import { Redirect } from 'react-router';
import Login from 'pages/login';

class Home extends Component {
  state = {
    pets: [],
    search: {
      inputValue: ''
    }
  };

  componentDidMount() {
    this.getContactAll();
  }

  getContactAll() {
    fetch('https://ancient-fortress-81160.herokuapp.com/api/contacts')
      .then(res => res.json())
      .then(data => {
        this.setState({ pets: data });
      })
      .catch(console.log);
  }

  getContactByName(name: string) {
    fetch(
      `https://ancient-fortress-81160.herokuapp.com/api/contacts/name/${name}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ pets: data });
      })
      .catch(console.log);
  }

  handleSearchChange = (event: any) => {
    const name = event.target.value;
    this.setState({ search: { inputValue: name } });

    if (!name) {
      this.getContactAll();
    } else {
      this.getContactByName(name);
    }
  };

  handleSearchSubmit = (event: any) => {
    event.preventDefault();
    const name = this.state.search.inputValue;

    if (!name) {
      this.getContactAll();
    } else {
      this.getContactByName(name);
    }
  };

  render() {
    const { inputValue } = this.state.search;

    return (
      <section>
        <Search
          inputValue={inputValue}
          onSubmit={(event: any) => this.handleSearchSubmit(event)}
          inputChange={(event: any) => this.handleSearchChange(event)}
          showButton={false}
          placeholder="Pesquisar por apelido, raças..."
        />
        <Pets pets={this.state.pets} />
      </section>
    );
  }
}

export default Home;
