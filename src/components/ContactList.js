import React from 'react';
import ContactCard from './ContactCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';

function ContactList() {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const handleDelete = (phone) => {
        dispatch(deleteContact(phone));
    }

  return (
    <div>
      <h3>Список контактів</h3>
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ContactList;