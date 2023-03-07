import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css'

const ContactListItem = ({ id, name, number, onDeleted }) => {
      return (
        <li
         key={id}
         className={css.contact__item}>
          <p>
            <span>{name} : </span>
            {number}
          </p>
          <button
            type="button"
            className={css.btn__list}
            onClick={() => {
                onDeleted(id)
              }}
            >
            Delete
          </button>
        </li>
      )
    }

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleted: PropTypes.func,
  };

  export default ContactListItem;
            