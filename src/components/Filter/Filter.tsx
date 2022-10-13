import React, { useState } from 'react';
import { IFilterProps } from '../../types/properties';

const Filter: React.FC<IFilterProps> = ({
  typeFilter,
  nameFilter,
  typeField,
  onChangeLaunchesParams,
}) => {
  const [filterValue, setFilterValue] = useState<string | 1 | 0>('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFilterValue(event.target.value);
    onChangeLaunchesParams(event.target.name, event.target.value);
  };

  const inputFilter = (
    <>
      <label>{nameFilter}</label>
      <input
        onChange={onChangeInput}
        name={nameFilter}
        type={typeField}
        defaultValue={nameFilter === 'year' ? String(filterValue) : filterValue}
      />
    </>
  );

  const selectFilter = (
    <>
      <label>{nameFilter}</label>
      <select onChange={onChangeInput} name='isComplited' value={filterValue}>
        <option value={1}>complited</option>
        <option value={0}>upcoming</option>
      </select>
    </>
  );

  const filter = typeFilter === 'input' ? inputFilter : selectFilter;

  return <div className='launches__filter'>{filter}</div>;
};

export default Filter;
