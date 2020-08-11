import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';
import { type } from 'os';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Emma Watson',
        email: 'emma@watson.com',
        phone: '0060060064',
        type: 'personal',
      },
      {
        id: 2,
        name: 'John Wick',
        email: 'john@wick.com',
        phone: '0070070076',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Olivier de Carglass',
        email: 'olivier@carglass.com',
        phone: '0077770076',
        type: 'personal',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current contact
  const setCurrentContact = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
