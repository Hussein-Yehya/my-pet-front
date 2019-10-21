import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';

import { HOME } from '../../../helpers/urls';
import './index.css';
import InputGroup from '../../../components/InputGroup';
import { getUserInfo } from '../../../helpers/user';
import {
  options,
  coatLengthOptions,
  petRecommendedToOptions,
  petTypeOptions,
  genreOptions
} from '../../../helpers/select';

class ContactForm extends Component {
  state = {
    form: {
      name: '',
      age: '',
      breed: '',
      description: '',
      urlImage: '',
      bloodType: '',
      coatLength: 'HAIRLESS',
      color: '',
      petRecommendedTo: 'KIDS',
      petSize: 'SMALL',
      disease: false,
      vaccinated: false,
      petType: 'CAT',
      genre: 'M'
    },
    selectedOption: {
      petSize: options[0],
      coatLength: coatLengthOptions[0],
      petRecommendedTo: petRecommendedToOptions[0],
      petType: petTypeOptions[0],
      genre: genreOptions[0]
    },
    redirect: false
  };

  submitHandler = (e: any) => {
    e.preventDefault();

    const userInfo = getUserInfo();
    const petForm = { ...this.state.form, user: userInfo };

    console.log(this.state.form);
    fetch('https://ancient-fortress-81160.herokuapp.com/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petForm)
    })
      .then(() => this.setState({ redirect: true }))
      .catch(error => console.log(error));
  };

  changeHandler = async (event: any) => {
    event.persist();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const { form } = this.state;

    // @ts-ignore
    form[name] = value;

    await this.setState(form);
  };

  handleInputs = () => {
    const { form } = this.state;

    const FIELDS = [
      {
        label: 'Nome',
        field: 'name',
        value: form.name,
        type: 'text'
      },
      {
        label: 'Idade',
        field: 'age',
        value: form.age,
        type: 'number'
      },
      {
        label: 'Raça',
        field: 'breed',
        value: form.breed,
        type: 'text'
      },
      {
        label: 'Link da foto',
        field: 'urlImage',
        value: form.urlImage,
        type: 'text'
      },
      {
        label: 'Tipo Sanguíneo',
        field: 'bloodType',
        value: form.bloodType,
        type: 'text'
      },
      {
        label: 'Cor',
        field: 'color',
        value: form.color,
        type: 'text'
      },
      {
        label: 'Possui Doença',
        field: 'disease',
        value: form.disease,
        type: 'checkbox'
      },
      {
        label: 'Vacinado',
        field: 'vaccinated',
        value: form.vaccinated,
        type: 'checkbox'
      }
    ];

    return FIELDS.map((item, index) => (
      <InputGroup
        key={index}
        className="col-xs-12 col-lg-4"
        field={item.field}
        label={item.label}
        // @ts-ignore
        value={item.value}
        // @ts-ignore
        checked={item.value}
        type={item.type}
        onChange={this.changeHandler}
      />
    ));
  };

  handleSelectChange = async (selectedOption: any, field: any) => {
    await this.setState(
      { form: { ...this.state.form, [field]: selectedOption.value } },
      () => console.log(`Option selected:`, selectedOption)
    );

    await this.setState({
      selectedOption: {
        ...this.state.selectedOption,
        [field]: selectedOption
      }
    });

    console.log(this.state);
  };

  render() {
    const { redirect, form, selectedOption } = this.state;

    if (redirect) {
      return <Redirect to={HOME} />;
    }

    return (
      <section className="get-in-touch">
        <form
          className="contact-form row"
          onSubmit={e => this.submitHandler(e)}
        >
          <div className="col-12 c-info-box">
            <h1>
              Criar um novo <strong> Pet</strong>
            </h1>
          </div>

          {this.handleInputs()}

          <div className="form-field col-12 col-lg-4">
            <label className="label">Pelagem</label>
            <Select
              value={selectedOption.coatLength}
              onChange={(value: any) =>
                this.handleSelectChange(value, 'coatLength')
              }
              options={coatLengthOptions}
            />
          </div>

          <div className="form-field col-12 col-lg-4">
            <label className="label">Porte</label>
            <Select
              value={selectedOption.petSize}
              onChange={(value: any) =>
                this.handleSelectChange(value, 'petSize')
              }
              options={options}
            />
          </div>

          <div className="form-field col-12 col-lg-4">
            <label className="label">Recomendado Para</label>
            <Select
              value={selectedOption.petRecommendedTo}
              onChange={(value: any) =>
                this.handleSelectChange(value, 'petRecommendedTo')
              }
              options={petRecommendedToOptions}
            />
          </div>

          <div className="form-field col-xs-12 col-lg-4">
            <label className="label">Tipo Pet</label>
            <Select
              value={selectedOption.petType}
              onChange={(value: any) =>
                this.handleSelectChange(value, 'petType')
              }
              options={petTypeOptions}
            />
          </div>

          <div className="form-field col-xs-12 col-lg-4">
            <label className="label">Gênero</label>
            <Select
              value={selectedOption.genre}
              onChange={(value: any) => this.handleSelectChange(value, 'genre')}
              options={genreOptions}
            />
          </div>

          <div className="form-field col-xs-12 col-lg-12">
            <label className="label c-label-desc">Sobre o pet</label>
            <textarea
              className="form-field input-text js-input c-description-info"
              name="description"
              value={form.description}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-field col-12 c-submit-box">
            <button type="submit" className="submit-btn">
              Salvar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ContactForm;
