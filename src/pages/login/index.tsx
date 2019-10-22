import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../helpers/urls';
import './index.css';
import InputGroup from '../../components/InputGroup';
import { setUserInfo } from '../../helpers/user';
import UserContext from 'store/user.context';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [userInfoContext, setUserInfoContext] = useContext(UserContext);

  const [redirect, setRedirect] = useState(false);

  const [invalidUser, setInvalidUser] = useState(false);

  const changeHandler = (e: any) => {
    e.persist();
    let newForm = { ...form };
    // @ts-ignore
    newForm[e.target.name] = e.target.value;

    setForm(newForm);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    fetch('https://ancient-fortress-81160.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            console.log(data);

            setRedirect(true);
            setUserInfo(data);
            setUserInfoContext(data);
          });
        } else {
          setInvalidUser(true);
        }
      })
      .catch(error => console.log(error));
  };

  const handleInputs = () => {
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
        onChange={changeHandler}
      />
    ));
  };

  if (redirect && userInfoContext) {
    return <Redirect to={HOME} />;
  }

  return (
    <section className="get-in-touch login">
      {invalidUser ? (
        <div className="col-lg-12 alert alert-danger" role="alert">
          Usuário Invalido
        </div>
      ) : null}

      <form className="contact-form row" onSubmit={e => submitHandler(e)}>
        {handleInputs()}

        <div className="form-field col-lg-12">
          <button type="submit" className="submit-btn">
            Logar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
