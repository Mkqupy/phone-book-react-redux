import React from 'react';

function ContactCard({ contact, onDelete }) {
  const handleDelete = () => {
    onDelete(contact.phone); // Або інший унікальний ідентифікатор
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <div>
        <h3>{contact.name}</h3>
        <p>Телефон: {contact.phone}</p>
        <p>Email: {contact.email}</p>
      </div>
      <button
        onClick={handleDelete}
        style={{ padding: '5px 10px', cursor: 'pointer' }}
      >
        Видалити
      </button>
    </div>
  );
}

export default ContactCard;
