import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

import { filteredContact } from '../../redux/phoneBookSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.phoneBook.filter);

  const changeFilter = e => {
    dispatch(filteredContact(e.target.value));
  };
  return (
    <label className="filter__title">
      {/* Find contacts by name */}
      <TextField type="text" value={value} onChange={changeFilter} placeholder='Search contact  by name' />
    </label>
  );
};
export default Filter;
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
