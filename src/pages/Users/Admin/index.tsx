import React, { Component } from 'react';

import './index.css';
import InputGroup from '../../../components/InputGroup';

class CreateUserAdmin extends Component {
  state = {
    form: {
      name: '',
      email: '',
      password: '',
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
    success: false
  };

  submitHandler = (e: any) => {
    e.preventDefault();

    console.log(this.state.form);

    fetch('https://ancient-fortress-81160.herokuapp.com/api/users/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.form)
    })
      .then(() => this.setState({ success: true }))
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
    const { form, success } = this.state;

    return (
      <section className="get-in-touch">
        {success ? (
          <div className="col-lg-12 alert alert-success" role="alert">
            Criado com Sucesso!
          </div>
        ) : null}
        <form
          className="contact-form row"
          onSubmit={e => this.submitHandler(e)}
        >
          <div className="col-12 c-info-box">
            <h1>
              Criar um usuário <strong> Administrador</strong>
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

export default CreateUserAdmin;
