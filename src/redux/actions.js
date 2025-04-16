// Для додавання контакту
export const ADD_CONTACT = 'ADD_CONTACT';
export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

// Для видалення контакту
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const deleteContact = (phone) => ({
  type: DELETE_CONTACT,
  payload: phone,
});