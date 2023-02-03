// import PropTypes from 'prop-types';
import s from "./filter.module.css"
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { searchFilter } from 'redux/filterSlice';

export const Filter = (
  // { value, onChange }
  ) => {
    const filterInputId = nanoid();
    const dispatch = useDispatch();
    const handlerFilter = e => {
    dispatch(searchFilter(e.target.value.trim().toLowerCase()));
  };
  return (
    <div className={s.filter}>
      <label htmlFor={filterInputId} className={s.title}>Find contacts by name</label>
      <input className={s.input} type="text" name="filter"
      //  value={value} 
       onChange={handlerFilter} id={filterInputId} />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
