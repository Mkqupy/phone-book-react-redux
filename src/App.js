import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  // const [contacts, setContacts] = useState([
  //   { name: 'Ванесса', phone: '0689876543', email: 'ness@example.com' },
  //   { name: 'Настя', phone: '0971234567', email: 'ana@example.com' },
  // ]);

  // const handleAddContact = (newContact) => {
  //   setContacts([...contacts, newContact]);
  // };

  // const handleDeleteContact = (phoneToDelete) => {
  //   setContacts(contacts.filter(contact => contact.phone !== phoneToDelete));
  // };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
  // return <h1>hiiiiiiiiiiiiii</h1>;
}

export default App;
