import React, { Component } from 'react';
import Users from './Users';
import Search from 'components/Search';

class UserManagement extends Component {
  state = {
    users: [],
    search: {
      inputValue: ''
    }
  };

  componentDidMount() {
    fetch('https://ancient-fortress-81160.herokuapp.com/api/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  getUserAll() {
    fetch('https://ancient-fortress-81160.herokuapp.com/api/users')
      .then(res => res.json())
      .then(data => {
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

  render() {
    const { inputValue } = this.state.search;
    return (
      <section>
        <div className="container c-title-box">
          <h1>
            Gerenciamento de <strong> Usuários</strong>
          </h1>
        </div>
        <Search
          inputValue={inputValue}
          onSubmit={(event: any) => this.handleSearchSubmit(event)}
          inputChange={(event: any) => this.handleSearchChange(event)}
          showButton={false}
          placeholder="Pesquisar por nome, e-mail..."
        />
        <Users users={this.state.users} />;
      </section>
    );
  }
}

export default UserManagement;
