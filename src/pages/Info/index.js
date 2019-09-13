import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HOME } from '../../helpers/urls';
import { Redirect } from 'react-router-dom';

import './index.css';

const componentClassName = 'contact-info';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        id: '',
        name: '',
        age: '',
        breed: '',
        description: '',
        urlImage: ''
      },
      redirect: false
    };
  }

  componentWillMount() {
    console.log('will');
    this.getContactById();
  }

  getContactById() {
    console.log('use');
    const { id } = this.props.match.params;
    const { info } = this.state;
    fetch(`http://localhost:8080/api/contacts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ info: data });
      })
      .catch(console.log);
  }

  deleteContact = () => {
    const { id } = this.props.match.params;
    fetch(`http://localhost:8080/api/contacts/${id}`, {
      method: 'DELETE'
    })
      .then(() => this.setState({ redirect: true }))
      .catch(error => console.log(error));
  };

  render() {
    const { info, redirect } = this.state;

    if (redirect) {
      return <Redirect to={HOME} />;
    }

    return (
      <div className={`${componentClassName} card mb-4 shadow-sm`}>
        <img
          src={info.urlImage}
          alt=""
          className={`${componentClassName}__image`}
        />

        <div className="card-body">
          <p className="card-text">
            <b>Nome:</b> {info.name}
            <b> Idade: </b> {info.age}
          </p>

          <p className="card-text">
            <b> Raça: </b> {info.breed}
          </p>
          <p className="card-text">
            <b> Descrição: </b> {info.description}
          </p>
          <Link to={HOME}> Ir para a Home </Link>

          <button
            type="submit"
            onClick={this.deleteContact}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default InfoPage;
