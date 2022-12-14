import React from 'react';
import Select from 'react-select';
import { Store } from '../../types';
import './styles.css';

const filterOptions = [
  {
    "id": 3,
    "name": "Araguari"
  },
  {
    "id": 4,
    "name": "Ituiutaba"
  },
  {
    "id": 1,
    "name": "Uberaba"
  },
  {
    "id": 2,
    "name": "Uberlândia"
  }
]

function Filter() {

  return (
    <div className="filter-container base-card">
      <Select
        options={filterOptions}
        isClearable
        placeholder={'Filtre por loja'}
        getOptionLabel={(genre: Store) => genre.name}
        getOptionValue={(genre: Store) => String(genre.id)}
        classNamePrefix='filter-store-selector'
      />
    </div>
  );
}

export default Filter;
