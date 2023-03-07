import ContactListItem from '../ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';


const ContactList = ({ contacts, onDeleted, children }) => {
  
  return (
    <div className={css.contact__list}>
      <h2>Contacts</h2>
      { children }
      <ul className={css.contact__roster}>
        {contacts.length > 0 ? (
          <>
            {contacts.map(({ id, name, number }) => (
            <ContactListItem 
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleted={onDeleted}
                />
            ))}
          </>
        ) : (
        <p> Your phonebook is empty. Please add contact.</p> 
        )}
      </ul>

    </div>
  );
};

export default ContactList;