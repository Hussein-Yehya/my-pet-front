import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';

import { HOME } from '../../helpers/urls';
import './index.css';
import InputGroup from '../../components/InputGroup';

import {
  options,
  coatLengthOptions,
  petRecommendedToOptions,
  petTypeOptions,
  genreOptions
} from '../../helpers/select';

const componentClassName = 'contact-info';

class ContactEdit extends Component {
  constructor() {
    super();
    this.state = {
      form: {
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
      selectedOption: {
        petSize: options[0],
        coatLength: coatLengthOptions[0],
        petRecommendedTo: petRecommendedToOptions[0],
        petType: petTypeOptions[0],
        genre: genreOptions[0]
      },
      redirect: false
    };
  }

  submitHandler = e => {
    e.preventDefault();

    console.log(this.state.form);
    fetch('https://ancient-fortress-81160.herokuapp.com/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.form)
    })
      .then(() => this.setState({ redirect: true }))
      .catch(error => console.log(error));
  };

  changeHandler = async event => {
    event.persist();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const { form } = this.state;

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
        label: 'Link da foto',
        field: 'urlImage',
        value: form.urlImage,
        type: 'text',
        className: 'c-image-url'
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
        className={`${item.className ? item.className : ''} col-xs-12 col-lg-4`}
        field={item.field}
        label={item.label}
        value={item.value}
        type={item.type}
        onChange={this.changeHandler}
      />
    ));
  };

  handleSelectChange = async (selectedOption, field) => {
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

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;

      const response = await fetch(
        `https://ancient-fortress-81160.herokuapp.com/api/contacts/${id}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const data = await response.json();

      console.log(data);

      const coatLength = await coatLengthOptions.find(
        item => item.value === data.coatLength
      );
      const petSize = await options.find(item => item.value === data.petSize);
      const petRecommendedTo = await petRecommendedToOptions.find(
        item => item.value === data.petRecommendedTo
      );

      const petType = await petTypeOptions.find(
        item => item.value === data.petType
      );

      const genre = await genreOptions.find(item => item.value === data.genre);

      await this.setState({
        form: { ...this.state.form, ...data, id },
        selectedOption: {
          coatLength,
          petSize,
          petRecommendedTo,
          petType,
          genre
        }
      });
    } catch {
      console.error('Deu Ruim');
    }
  }

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
            <img
              src={form.urlImage}
              alt=""
              className={`${componentClassName}__image`}
            />

            <h1>
              {form.petType === 'CAT' ? 'Miaau ' : 'Au Au '}eu sou
              {form.genre === 'M' ? ' o ' : ' a '} <strong>{form.name}</strong>!
            </h1>
          </div>

          {this.handleInputs()}

          <div className="form-field col-12 col-lg-4">
            <label className="label">Pelagem</label>
            <Select
              value={selectedOption.coatLength}
              onChange={value => this.handleSelectChange(value, 'coatLength')}
              options={coatLengthOptions}
            />
          </div>

          <div className="form-field col-12 col-lg-4">
            <label className="label">Porte</label>
            <Select
              value={selectedOption.petSize}
              onChange={value => this.handleSelectChange(value, 'petSize')}
              options={options}
            />
          </div>

          <div className="form-field col-12 col-lg-4">
            <label className="label">Recomendado Para</label>
            <Select
              value={selectedOption.petRecommendedTo}
              onChange={value =>
                this.handleSelectChange(value, 'petRecommendedTo')
              }
              options={petRecommendedToOptions}
            />
          </div>

          <div className="form-field col-xs-12 col-lg-4">
            <label className="label">Tipo Pet</label>
            <Select
              value={selectedOption.petType}
              onChange={value => this.handleSelectChange(value, 'petType')}
              options={petTypeOptions}
            />
          </div>

          <div className="form-field col-xs-12 col-lg-4">
            <label className="label">Gênero</label>
            <Select
              value={selectedOption.genre}
              onChange={value => this.handleSelectChange(value, 'genre')}
              options={genreOptions}
            />
          </div>

          <div className="form-field col-xs-12 col-lg-12">
            <label className="label c-label-desc">Sobre o pet</label>
            <textarea
              className="input-text js-input c-description-info"
              name="description"
              type="textarea"
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

export default ContactEdit;
