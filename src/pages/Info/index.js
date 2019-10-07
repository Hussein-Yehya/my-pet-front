import React, { Component } from 'react';

import { HOME } from '../../helpers/urls';
import { Redirect } from 'react-router-dom';

import './index.css';

const componentClassName = 'contact-info';

class InfoPage extends Component {
  constructor(props) {
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
        genre: ''
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
    fetch(`https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ info: data });
      })
      .catch(console.log);
  }

  deleteContact = () => {
    const { id } = this.props.match.params;
    fetch(`https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`, {
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
            {info.genre === 'F' ? 'Fêmea' : 'Macho'}
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
            {info.petRecommendedTo === 'KIDS'
              ? 'Crianças'
              : info.petRecommendedTo === 'OLD_MAN'
              ? 'Idosos'
              : info.petRecommendedTo === 'DEFICIENT'
              ? 'Pessoas Especial'
              : ''}
          </div>

          <div className="col-4">
            <strong>Vacinado: </strong>
            {info.vaccinated === true ? 'Sim' : 'Não'}
          </div>

          <div className="col-4">
            <strong>Pelagem: </strong>
            {info.coatLength === 'HAIRLESS'
              ? 'Sem'
              : info.coatLength === 'SHORT'
              ? 'Pequeno'
              : info.coatLength === 'MEDIUM'
              ? 'Médio'
              : 'Grande'}
          </div>

          <div className="col-4">
            <strong>Pelagem: </strong>
            {info.coatLength === 'HAIRLESS'
              ? 'Sem'
              : info.coatLength === 'SHORT'
              ? 'Pequeno'
              : info.coatLength === 'MEDIUM'
              ? 'Médio'
              : 'Grande'}
          </div>

          <div className="col-4">
            <strong>Porte: </strong>
            {info.coatLength === 'SMALL'
              ? 'Pequeno'
              : info.coatLength === 'MEDIUM'
              ? 'Médio'
              : info.coatLength === 'LARGE'
              ? 'Grande'
              : 'Grandão'}
          </div>

          <div className="col-12 c-description-info">
            <strong>Sobre o pet: </strong>
            {info.description}
          </div>

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
        </div>
      </section>
    );
  }
}

export default InfoPage;
