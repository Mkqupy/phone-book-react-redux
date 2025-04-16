import { ADD_CONTACT, DELETE_CONTACT } from './actions';

const initialState = {
  contacts: [
    { name: 'Ванесса', phone: '0671234567', email: 'ness@gmail.com' },
    { name: 'Женя', phone: '0509876543', email: 'evgen@gmail.com' },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.phone !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;