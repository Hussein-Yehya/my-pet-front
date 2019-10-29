import React, { Component } from 'react';

import { HOME } from '../../../helpers/urls';
import { Redirect } from 'react-router-dom';

import './index.css';

import {
  options,
  coatLengthOptions,
  petRecommendedToOptions,
  genreOptions
} from '../../../helpers/select';
import { SelectInterface } from '../../../Interfaces/Select/index.interface';
import { getUserInfo } from 'helpers/user';

const componentClassName = 'contact-info';

class InfoPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      info: {
        name: '',
        age: '',
        breed: '',
        description: '',
        urlImage: '',
        bloodType: '',
        coatLength: '',
        color: '',
        petRecommendedTo: '',
        petSize: '',
        disease: false,
        vaccinated: false,
        petType: '',
        genre: '',
        user: {
          id: '',
          name: '',
          userType: '',
          email: '',
          phone: '',
          address: {
            state: '',
            city: ''
          }
        },
        active: ''
      },
      redirect: false,
      active: true
    };
  }

  componentDidMount() {
    this.getContactById();
  }

  getContactById() {
    // @ts-ignore
    const { id } = this.props.match.params;

    fetch(`https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ info: data });
      })
      .catch(console.log);
  }

  deleteContact = () => {
    // @ts-ignore
    const { id } = this.props.match.params;
    fetch(`https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`, {
      method: 'DELETE'
    })
      .then(() => this.setState({ redirect: true }))
      .catch(error => console.log(error));
  };

  checkIfThePetIsFromTheLoggedUser(): boolean {
    const userInfo = getUserInfo();

    const id = userInfo ? userInfo.id : null;
    const userType = userInfo ? userInfo.userType : null;

    // @ts-ignore
    const { info } = this.state;

    return info && (id === info.user.id || userType === 'ADMIN');
  }

  handleOptions = (
    value: string,
    listOptions: SelectInterface[]
  ): SelectInterface => {
    const defaultValue = {
      value: '',
      label: ''
    };

    if (!value) {
      return defaultValue;
    }

    return listOptions.find(item => item.value === value) || defaultValue;
  };

  handleValue = (value: string): string => {
    return value ? value : 'Não Definido';
  };

  pauseContact = () => {
    // @ts-ignore
    const { id } = this.props.match.params;
    fetch(
      `https://ancient-fortress-81160.herokuapp.com/api/contacts/pause/${id}`,
      {
        method: 'PUT'
      }
    )
      .then(() => this.setState({ active: false }))
      .catch(error => console.log(error));
  };

  undoneContact = () => {
    // @ts-ignore
    const { id } = this.props.match.params;
    fetch(
      `https://ancient-fortress-81160.herokuapp.com/api/contacts/undone/${id}`,
      {
        method: 'PUT'
      }
    )
      .then(() => this.setState({ active: true }))
      .catch(error => console.log(error));
  };

  render() {
    // @ts-ignore
    const { info, redirect, active } = this.state;

    const { user } = info;

    console.log('======', user);

    if (redirect) {
      return <Redirect to={HOME} />;
    }

    return (
      <section className={`${componentClassName}`}>
        <div className="c-detail-box">
          <div className="container">
            <img
              src={info.urlImage}
              alt=""
              className={`${componentClassName}__image`}
            />

            <h1>
              {info.petType === 'CAT' ? 'Miaau ' : 'Au Au '}eu sou
              {info.genre === 'M' ? ' o ' : ' a '}{' '}
              <strong>{info.name} !</strong>
            </h1>
          </div>
        </div>

        <section className="container">
          {!active || !info.active ? (
            <div className="col-lg-12 alert alert-danger" role="alert">
              Adoção pausada!
            </div>
          ) : null}

          <div className="row">
            <div className="col-12 col-md-8">
              <div className={`${componentClassName}__info`}>
                <h2>Sobre o pet </h2>

                <div className={`${componentClassName}__description`}>
                  {info.description}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <h2> Detalhes</h2>
              <p>
                <strong>Raça: </strong>
                {this.handleValue(info.breed)}
              </p>

              <p>
                <strong>Idade: </strong>
                {info.age > 1 ? info.age + ' anos ' : info.age + ' ano '}
              </p>
              <p>
                <strong>Gênero: </strong>
                {this.handleOptions(info.genre, genreOptions).label}
              </p>
              <p>
                <strong>Cor: </strong>
                {this.handleValue(info.color)}
              </p>
              <p>
                <strong>Possui Doença: </strong>
                {info.disease === true ? 'Sim' : 'Não'}
              </p>
              <p>
                <strong>Recomendado para: </strong>
                {
                  this.handleOptions(
                    info.petRecommendedTo,
                    petRecommendedToOptions
                  ).label
                }
              </p>
              <p>
                <strong>Tipo Sanguíneo: </strong>
                {this.handleValue(info.bloodType)}
              </p>
              <p>
                <strong>Vacinado: </strong>
                {info.vaccinated === true ? 'Sim' : 'Não'}
              </p>
              <p>
                <strong>Pelagem: </strong>
                {this.handleOptions(info.coatLength, coatLengthOptions).label}
              </p>
              <p>
                <strong>Porte: </strong>
                {this.handleOptions(info.petSize, options).label}
              </p>

              <h2> Contato</h2>
              <p>
                <strong>Nome: </strong>
                {user.name}
              </p>
              <p>
                <strong>E-mail: </strong>
                {user.email}
              </p>
              <p>
                <strong>Celular: </strong>
                {user.phone}
              </p>
              <p>
                <strong>Localização: </strong>
                {user.address.city} - {user.address.state}
              </p>
            </div>
          </div>

          {this.checkIfThePetIsFromTheLoggedUser() ? (
            <div className="container">
              <button
                type="submit"
                onClick={this.deleteContact}
                className="btn btn-danger"
                style={{ marginLeft: 0 }}
              >
                Excluir adoção
              </button>
              {!active ? (
                <button
                  type="submit"
                  onClick={this.undoneContact}
                  className="btn btn-warning"
                  style={{ marginLeft: 10 }}
                >
                  Despausar adoção
                </button>
              ) : null}

              {active ? (
                <button
                  type="submit"
                  onClick={this.pauseContact}
                  className="btn btn-warning"
                  style={{ marginLeft: 10 }}
                >
                  Pausar adoção
                </button>
              ) : null}
            </div>
          ) : null}
        </section>
      </section>
    );
  }
}

export default InfoPage;
