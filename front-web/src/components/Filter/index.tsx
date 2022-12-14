import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {

  const [stores, setStores] = useState<Store[]>([]);
  const [store, setStore] = useState<Store>();

  const onChangeStore = (event: Store | null) => {
    const selectedStore = event as Store;
    setStore(selectedStore);
    onFilterChange({ store: selectedStore });
  }

  useEffect(() => {
    makeRequest
      .get<Store[]>(`/stores`)
      .then((response) => {
        setStores(response.data)
      })
      .catch(() => {
        console.error('Error to fetch stores');
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <Select
        options={stores}
        value={store}
        isClearable
        placeholder={'Filtre por loja'}
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        classNamePrefix='filter-store-selector'
        onChange={onChangeStore}
      />
    </div>
  );
}

export default Filter;
