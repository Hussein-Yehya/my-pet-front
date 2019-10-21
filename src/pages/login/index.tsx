import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../helpers/urls';
import './index.css';
import InputGroup from '../../components/InputGroup';

class Login extends Component {
  state = {
    form: {
      email: '',
      password: ''
    },
    redirect: false,
    invalidUser: true
  };

  changeHandler = (e: any) => {
    e.persist();
    let store = this.state;
    // @ts-ignore
    store.form[e.target.name] = e.target.value;

    this.setState(store);
  };

  submitHandler = (e: any) => {
    e.preventDefault();

    console.log(this.state.form);
    fetch('https://ancient-fortress-81160.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.form)
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            console.log(data);
            this.setState({ redirect: true });
          });
        } else {
          this.setState({ invalidUser: true });
        }
      })
      .catch(error => console.log(error));
  };

  handleInputs = () => {
    const { form } = this.state;

    const FIELDS = [
      {
        label: 'Email',
        field: 'email',
        value: form.email,
        type: 'email'
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
        className="col-xs-12 col-lg-12"
        field={item.field}
        label={item.label}
        value={item.value}
        type={item.type}
        onChange={this.changeHandler}
      />
    ));
  };

  render() {
    const { redirect, invalidUser } = this.state;

    if (redirect) {
      return <Redirect to={HOME} />;
    }

    return (
      <section className="get-in-touch login">
        {invalidUser ? (
          <div className="col-lg-12 alert alert-danger" role="alert">
            Usuário Invalido
          </div>
        ) : null}
        <form
          className="contact-form row"
          onSubmit={e => this.submitHandler(e)}
        >
          {this.handleInputs()}

          <div className="form-field col-lg-12">
            <button type="submit" className="submit-btn">
              Logar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
