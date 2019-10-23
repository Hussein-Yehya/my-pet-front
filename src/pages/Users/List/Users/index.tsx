import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import { EDIT_USER } from '../../../../helpers/urls';
import { UserInterface } from '../../../../Interfaces/Users/index.interface';
import { ReactComponent } from '*.svg';

interface Props {
  users: UserInterface[];
}

const disableUser = (id: string, users: any, user: any, index: number) => {
  console.log('Desativar Usuário teste', id);

  console.log(users);

  fetch(`https://ancient-fortress-81160.herokuapp.com/api/users/${id}`, {
    method: 'DELETE'
  })
    .then(() => console.log('Deu certo'))
    .catch(error => console.log(error));
};

const Users1 = ({ users }: Props) => {
  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Tipo</th>
                <th scope="col">Editar</th>
                <th scope="col">Desativar</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => {
                const { id, name, email, userType } = user;

                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{userType === 'COMMON' ? 'Comum' : 'Admin'}</td>
                    <td>
                      <Link to={`${EDIT_USER}/${id}`}> Editar </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => disableUser(id, users, user, index)}
                      >
                        Desativar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Users1;
