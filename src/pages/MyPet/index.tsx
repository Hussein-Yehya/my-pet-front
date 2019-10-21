import React, { Component } from 'react';

import Pets from './components/Pets';
import { getUserInfo } from '../../helpers/user';
import Search from '../../components/Search';

class MyPets extends Component {
  state = {
    pets: [],
    search: {
      inputValue: ''
    },
    user: {
      id: ''
    }
  };

  componentDidMount() {
    this.getContactAll();
  }

  getContactAll() {
    const userInfo = getUserInfo();

    const id = userInfo ? userInfo.id : 0;

    fetch(
      `https://ancient-fortress-81160.herokuapp.com/api/contacts/users/${id}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ pets: data });
      })
      .catch(console.log);
  }

  getContactByName(name: string) {
    const userInfo = getUserInfo();

    const id = userInfo ? userInfo.id : 0;

    fetch(
      `https://ancient-fortress-81160.herokuapp.com/api/contacts/name/${name}/user/${id}`
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
        <div className="container c-info-box">
          <h1>
            Meus <strong> Pets</strong>
          </h1>
        </div>
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

export default MyPets;
