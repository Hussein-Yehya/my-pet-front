import React, { Component } from 'react';

import { HOME, INFO } from '../../../helpers/urls';
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
          userType: ''
        }
      },
      redirect: false
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

  render() {
    // @ts-ignore
    const { info, redirect } = this.state;

    if (redirect) {
      return <Redirect to={HOME} />;
    }

    return (
      <section className="container">
        <div className={`${componentClassName}`}></div>

        <div className="col-12 c-detail-box">
          <img
            src={info.urlImage}
            alt=""
            className={`${componentClassName}__image`}
          />

          <h1>
            {info.petType === 'CAT' ? 'Miaau ' : 'Au Au '}eu sou
            {info.genre === 'M' ? ' o ' : ' a '} <strong>{info.name} !</strong>
          </h1>
        </div>

        <div className="col-12 row">
          <div className="col-4">
            <strong>Raça: </strong>
            {info.breed}
          </div>

          <div className="col-4">
            <strong>Idade: </strong>
            {info.age > 1 ? info.age + ' anos ' : info.age + ' ano '}
          </div>

          <div className="col-4">
            <strong>Gênero: </strong>
            {this.handleOptions(info.genre, genreOptions).label}
          </div>

          <div className="col-4">
            <strong>Cor: </strong>
            {info.color}
          </div>

          <div className="col-4">
            <strong>Possui Doença: </strong>
            {info.disease === true ? 'Sim' : 'Não'}
          </div>

          <div className="col-4">
            <strong>Tipo Sanguíneo: </strong>
            {info.bloodType}
          </div>

          <div className="col-4">
            <strong>Recomendado para: </strong>
            {
              this.handleOptions(info.petRecommendedTo, petRecommendedToOptions)
                .label
            }
          </div>

          <div className="col-4">
            <strong>Vacinado: </strong>
            {info.vaccinated === true ? 'Sim' : 'Não'}
          </div>

          <div className="col-4">
            <strong>Pelagem: </strong>
            {this.handleOptions(info.coatLength, coatLengthOptions).label}
          </div>

          <div className="col-4">
            <strong>Porte: </strong>
            {this.handleOptions(info.petSize, options).label}
          </div>

          <div className="col-12 c-description-info">
            <strong>Sobre o pet: </strong>
            {info.description}
          </div>

          {this.checkIfThePetIsFromTheLoggedUser() ? (
            <div className="container">
              <div className="col-12 row">
                <button
                  type="submit"
                  onClick={this.deleteContact}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}

export default InfoPage;
