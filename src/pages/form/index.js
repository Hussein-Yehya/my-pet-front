import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../helpers/urls';
import './index.css';
import InputGroup from '../../components/InputGroup';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: '',
        age: '',
        breed: '',
        description: '',
        urlImage: ''
      },
      redirect: false
    };
  }

  changeHandler = e => {
    e.persist();
    let store = this.state;
    store.form[e.target.name] = e.target.value;

    this.setState(store);
  };

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
        label: 'Url da Image',
        field: 'urlImage',
        value: form.urlImage,
        type: 'text'
      },
      {
        label: 'Descrição',
        field: 'description',
        value: form.description,
        type: 'text'
      }
    ];

    return FIELDS.map((item, index) => (
      <InputGroup
        key={index}
        className="col-xs-12 col-lg-6"
        field={item.field}
        label={item.label}
        value={item.value}
        type={item.type}
        onChange={this.changeHandler}
      />
    ));
  };

  render() {
    const { redirect } = this.state;

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

          <div className="form-field col-lg-12">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default ContactForm;
