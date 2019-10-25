import React, { Component } from 'react';
import Users from './Users';
import Search from 'components/Search';
import Alert from 'components/Alert';

class UserManagement extends Component {
  state = {
    users: [],
    search: {
      inputValue: ''
    },
    isSuccess: false
  };

  componentDidMount() {
    this.getUserAll();
  }

  getUserAll() {
    return fetch('https://ancient-fortress-81160.herokuapp.com/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({ users: data });
      })
      .catch(console.log);
  }

  getUserByName(name: string) {
    fetch(`https://ancient-fortress-81160.herokuapp.com/api/users/name/${name}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  handleSearchChange = (event: any) => {
    const name = event.target.value;
    this.setState({ search: { inputValue: name } });

    if (!name) {
      this.getUserAll();
    } else {
      this.getUserByName(name);
    }
  };

  handleSearchSubmit = (event: any) => {
    event.preventDefault();
    const name = this.state.search.inputValue;

    if (!name) {
      this.getUserAll();
    } else {
      this.getUserByName(name);
    }
  };

  disableUser = (id: string) => {
    return fetch(
      `https://ancient-fortress-81160.herokuapp.com/api/users/${id}`,
      {
        method: 'DELETE'
      }
    )
      .then(() => {
        this.setState({ isSuccess: true });
      })
      .catch(error => console.log(error));
  };

  handleDisableUser = async (id: string) => {
    await this.disableUser(id);
    await this.getUserAll();
  };

  render() {
    const { isSuccess, search } = this.state;
    const { inputValue } = search;

    return (
      <section>
        <div className="container c-title-box">
          <h1>
            Gerenciamento de <strong> Usuários</strong>
          </h1>
        </div>
        <div className="container">
          {isSuccess ? (
            <Alert status="success" message="Desativado com Sucesso" />
          ) : null}
        </div>
        <Search
          inputValue={inputValue}
          onSubmit={(event: any) => this.handleSearchSubmit(event)}
          inputChange={(event: any) => this.handleSearchChange(event)}
          showButton={false}
          placeholder="Pesquisar por nome, e-mail..."
        />
        <Users users={this.state.users} disableUser={this.handleDisableUser} />;
      </section>
    );
  }
}

export default UserManagement;
