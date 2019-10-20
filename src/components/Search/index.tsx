import React from 'react';
import './index.css';

interface Props {
  inputValue: string;
  inputChange: (event: any) => void;
  onSubmit: (event: any) => void;
  showButton?: boolean;
}

const Search = ({
  inputValue,
  inputChange,
  onSubmit,
  showButton = true
}: Props) => {
  return (
    <form className="form-inline my-2 my-lg-0 container" onSubmit={onSubmit}>
      <input
        className="form-control mr-sm-2 search"
        type="search"
        placeholder="Pesquisar por apelido..."
        aria-label="Search"
        onChange={inputChange}
        value={inputValue}
      />

      {showButton ? (
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      ) : null}
    </form>
  );
};

export default Search;
