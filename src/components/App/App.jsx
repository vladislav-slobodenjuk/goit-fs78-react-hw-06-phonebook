// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';

import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { getContacts, getFilter } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilterContacts } from 'redux/filterSlice';

// const STORAGE_KEY = 'contacts';

// const initContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Vladislav Sl', number: '333-55-44' },
// ];

// localStorage.setItem(STORAGE_KEY, JSON.stringify(initContacts));

export const App = () => {
  // const [contacts, setContacts] = useState(initContacts);
  // const [filter, setFilter] = useState('');
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);
  console.log('isArray', Array.isArray(contacts));

  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    // setFilter(target.value);
    dispatch(setFilterContacts(target.value));
  };

  const handleAddContact = ({ name, number }) => {
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) return alert(`${name} is already in contacts.`);

    // setContacts([{ name, number, id: nanoid() }, ...contacts]);
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    // const restContacts = contacts.filter(contact => contact.id !== id);
    // setContacts(restContacts);
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   // console.log('savedContacts', savedContacts);
  //   if (savedContacts) setContacts(savedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  //   // console.log('second');
  // }, [contacts]);

  const filteredContacts = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onHandleSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filterValue={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteClick={handleDeleteContact}
      />
    </Container>
  );
};
