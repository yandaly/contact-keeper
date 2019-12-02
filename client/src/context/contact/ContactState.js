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
	CLEAR_FILTER
} from '../types';
import { type } from 'os';

const ContactState = (props) => {
	const initialState = {
		contacts : [
			{
				id    : 1,
				name  : 'Emma Watson',
				email : 'emma@watson.com',
				phone : '0060060064',
				type  : 'personal'
			},
			{
				id    : 2,
				name  : 'John Wick',
				email : 'john@wick.com',
				phone : '0070070076',
				type  : 'professional'
			}
		]
	};

	const [
		state,
		dispatch
	] = useReducer(contactReducer, initialState);

	// Add contact

	// Delete contact

	// Set current contact

	// Clear current contact

	// Update contact

	// Filter contacts

	// Clear filter

	return (
		<contactContext.Provider
			value={{
				contacts : state.contacts
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
