import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

 const initalValues = {
    name: '',
    number: ''
};

class ContactForm extends Component {
    state = initalValues;

    handleInputChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    
    }

    handleSubmitForm = event => {
        event.preventDefault();

        const { name, number } = this.state;
        const { onAddContact } = this.props;

        const isValidatedForm = this.validateForm()

        if (!isValidatedForm) return
        onAddContact({ id: nanoid(), name, number })
        this.resetForm()
    }

    validateForm = () => {
        const { name, number } = this.state
        const { onCheckRepetition } = this.props

        if (!name || !number) {
            alert(`${name} is already in contacts`)
            return false
        }
        return onCheckRepetition(name)
    }

    resetForm = () => this.setState(initalValues)
    
    render() {
        const { name, number } = this.state;
        return (
            <div className={css.container}>
                <h2>Phonebook</h2>
                <form className={css.form} onSubmit={this.handleSubmitForm}>
                    <label htmlFor="name"
                           className={css.label__form}>
                        Name
                    <input
                        className={css.input__contact}
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Enter a name'
                        value={name}
                        onChange={this.handleInputChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    </label>
                    <label htmlFor="number"
                           className={css.label__form}>
                        Number
                    <input
                        className={css.input__contact}
                        type="tel"
                        id="number"
                        name="number"
                        placeholder='Enter the number'
                        value={`${number.substring(0, 7)}`}
                        onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    </label>

                    <button
                        type='submit'
                        className={css.btn}>Add contact</button>
                </form>
            </div>
        )
    }
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
 };

export default ContactForm;