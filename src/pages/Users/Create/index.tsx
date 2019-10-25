import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { LOGIN } from '../../../helpers/urls';
import './index.css';
import InputGroup from '../../../components/InputGroup';

class CreateUser extends Component {
  state = {
    form: {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: {
        country: 'Brasil',
        state: '',
        district: '',
        city: '',
        street: '',
        number: '',
        complements: ''
      }
    },
    redirect: false
  };

  submitHandler = (e: any) => {
    e.preventDefault();

    console.log(this.state.form);
    fetch('https://ancient-fortress-81160.herokuapp.com/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.form)
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
    if (form[name] !== undefined) {
      // @ts-ignore
      form[name] = value;
    } else {
      // @ts-ignore
      form.address[name] = value;
    }

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
        label: 'Celular',
        field: 'phone',
        value: form.phone,
        type: 'text'
      },
      {
        label: 'E-mail',
        field: 'email',
        value: form.email,
        type: 'text'
      },
      {
        label: 'Senha',
        field: 'password',
        value: form.password,
        type: 'password'
      },
      {
        label: 'Estado',
        field: 'state',
        value: form.address.state,
        type: 'text'
      },
      {
        label: 'Cidade',
        field: 'city',
        value: form.address.city,
        type: 'text'
      },
      {
        label: 'Bairro',
        field: 'district',
        value: form.address.district,
        type: 'text'
      },
      {
        label: 'Rua',
        field: 'street',
        value: form.address.street,
        type: 'text'
      },
      {
        label: 'Número',
        field: 'number',
        value: form.address.number,
        type: 'text'
      },
      {
        label: 'Complemento',
        field: 'complements',
        value: form.address.complements,
        type: 'text'
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

  render() {
    const { form, redirect } = this.state;

    if (redirect) {
      return <Redirect to={LOGIN} />;
    }

    return (
      <section className="get-in-touch">
        <form
          className="contact-form row"
          onSubmit={e => this.submitHandler(e)}
        >
          <div className="col-12 c-info-box">
            <h1>
              Criar uma nova <strong> Conta</strong>
            </h1>
          </div>

          {this.handleInputs()}

          <div className="form-field col-12 c-submit-box">
            <button type="submit" className="submit-btn">
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default CreateUser;
