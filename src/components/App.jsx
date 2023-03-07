import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// Початкові значання
// const nullState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts !== null) {
      const parsedContacts = JSON.parse(saveContacts)
    this.setState({ contacts: parsedContacts })
    return;
    }
    this.setState({ contacts: [] });
  };
  
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts)
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckRepetition = name => {
    const { contacts } = this.state;
    const contactExists = !!contacts.find(contact => contact.name === name);

    contactExists && alert(`${name} is already in contacts`);

    return !contactExists;
  };

  handleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  }
  
  onVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilterChange = filter => this.setState({ filter });

  render() {
    const visibleContacts = this.onVisibleContacts();
    const { filter } = this.state;
    return (
        <>
        <ContactForm
          onAddContact={this.handleAddContact}
          onCheckRepetition={this.handleCheckRepetition}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleted={this.handleDeleteContact}
        >
          <Filter filter={filter} onChange={this.handleFilterChange} />
        </ContactList>
      </>
     );
  }
}  
