import React from 'react';
import './index.css';

const editUser = () => {
  console.log('Editar Usuário teste');
};

const disableUser = () => {
  console.log('Desativar Usuário teste');
};

const Users = ({ users }) => {
  return (
    <section className="get-in-touch">
      <div className="col-12 c-title-box">
        <h1>
          Gerenciamento de <strong> Usuários</strong>
        </h1>
      </div>

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
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={editUser}
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={disableUser}
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

export default Users;
