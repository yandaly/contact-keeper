import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, clearCurrentContact, current, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
    filter: '',
  });
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current !== null) setContact(current);
    else clearContact();
  }, [contactContext, current]);

  const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const clearContact = () =>
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });

  const clearAll = () => {
    clearCurrentContact();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!current) addContact(contact);
    else updateContact(contact);
    clearContact();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={handleChange}
      />
      <h5>Contact type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={handleChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={handleChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Edit Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
