import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { HOME } from '../../../helpers/urls';
import InputGroup from '../../../components/InputGroup';

import './index.css';
import { getUserInfo } from '../../../helpers/user';
import Alert from 'components/Alert';

class UserEdit extends Component {
  state = {
    form: {
      name: '',
      email: '',
      password: '',
      userType: '',
      address: {
        country: '',
        state: '',
        city: '',
        district: '',
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

    const { userType } = this.state.form;

    const url =
      userType === 'ADMIN'
        ? 'https://ancient-fortress-81160.herokuapp.com/api/users/admin'
        : 'https://ancient-fortress-81160.herokuapp.com/api/users';

    fetch(url, {
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
    const value = target.value;
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

  async componentDidMount() {
    try {
      // @ts-ignore
      const id = this.props.match.params.id;

      const response = await fetch(
        `https://ancient-fortress-81160.herokuapp.com/api/users/${id}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const data = await response.json();

      console.log(data);

      await this.setState({
        form: { ...this.state.form, ...data, id }
      });
    } catch {
      console.error('Deu Ruim');
    }
  }

  render() {
    const { success, form } = this.state;
    return (
      <section className="get-in-touch">
        {success ? (
          <Alert status="success" message="Salvo com Sucesso" />
        ) : null}

        <form
          className="contact-form row"
          onSubmit={e => this.submitHandler(e)}
        >
          {this.handleInputs()}

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

export default UserEdit;
