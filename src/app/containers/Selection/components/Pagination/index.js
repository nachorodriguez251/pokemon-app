/* eslint-disable no-plusplus */
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Button from '../../../../components/Button';

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];
  const pageNumber = useSelector((state) => state.page);

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" onClick={() => paginate(number)}>
            <Button
              styleName="btn-page"
              text={number}
              disable={number === pageNumber}
            />
            {/* <a type="button" onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
