import css from '../Filter/Filter.module.css';

const Filter = ({ filter, onChange }) => {
    return (
      <>
      <label className={css.filter__label}>
      Finde contact by name
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for Search"
      />
      </label>
      
      </>
    );
  };
  
  export default Filter;