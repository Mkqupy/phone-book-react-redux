import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && phone && email) {
      dispatch(addContact({ name, phone, email }));
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <h3>Додати новий контакт</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            style={{ padding: "5px 10px", margin: "5px", borderRadius: "20px"}}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
          style={{ padding: "5px 10px", margin: "5px", borderRadius: "20px"}}
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          style={{ padding: "5px 10px", margin: "5px", borderRadius: "20px"}}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ padding: "5px 10px", margin: "5px", cursor: 'pointer', borderRadius: "20px", background: "lightgreen"}}>Додати контакт</button>
      </form>
    </div>
  );
}

export default ContactForm;
