import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../helpers/urls';
import './index.css';
import InputGroup from '../../components/InputGroup';
import Select from 'react-select';

const options = [
  { value: 'SMALL', label: 'Pequeno' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'LARGE', label: 'Grande' },
  { value: 'XL', label: 'Grandão' }
];

const coatLengthOptions = [
  { value: 'HAIRLESS', label: 'Sem pelagem' },
  { value: 'SHORT', label: 'Pequeno' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'LONG', label: 'Longo' }
];

const petRecommendedToOptions = [
  { value: 'KIDS', label: 'Crianças' },
  { value: 'OLD_MAN', label: 'Idosos' },
  { value: 'DEFICIENT', label: 'Pessoas Especiais' }
];

const petTypeOptions = [
  { value: 'CAT', label: 'Felino' },
  { value: 'DOG', label: 'Canino' }
];

const genreOptions = [
  { value: 'M', label: 'Macho' },
  { value: 'F', label: 'Fêmea' }
];

class ContactForm extends Component {
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
        label: 'Link da foto',
        field: 'urlImage',
        value: form.urlImage,
        type: 'text'
      },
      {
        label: 'Descrição',
        field: 'description',
        value: form.description,
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
          {this.handleInputs()}

          <div className="col-xs-12 col-lg-4">
            <label className="label">Pelagem</label>
            <Select
              value={selectedOption.coatLength}
              onChange={value => this.handleSelectChange(value, 'coatLength')}
              options={coatLengthOptions}
            />
          </div>

          <div className="col-xs-12 col-lg-4">
            <label className="label">Porte</label>
            <Select
              value={selectedOption.petSize}
              onChange={value => this.handleSelectChange(value, 'petSize')}
              options={options}
            />
          </div>

          <div className="col-xs-12 col-lg-4">
            <label className="label">Recomendado Para</label>
            <Select
              value={selectedOption.petRecommendedTo}
              onChange={value =>
                this.handleSelectChange(value, 'petRecommendedTo')
              }
              options={petRecommendedToOptions}
            />
          </div>

          <div className="col-xs-12 col-lg-4">
            <label className="label">Tipo Pet</label>
            <Select
              value={selectedOption.petType}
              onChange={value => this.handleSelectChange(value, 'petType')}
              options={petTypeOptions}
            />
          </div>

          <div className="col-xs-12 col-lg-4">
            <label className="label">Gênero</label>
            <Select
              value={selectedOption.genre}
              onChange={value => this.handleSelectChange(value, 'genre')}
              options={genreOptions}
            />
          </div>

          <div className="form-field col-lg-12">
            <button type="submit" className="submit-btn">
              Criar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ContactForm;
