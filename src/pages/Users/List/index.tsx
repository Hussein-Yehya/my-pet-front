import React, { Component } from 'react';
import Users from './Users';

class UserManagement extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://ancient-fortress-81160.herokuapp.com/api/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  render() {
    return <Users users={this.state.users} />;
  }
}

export default UserManagement;
