import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { set } from 'mongoose';

const Home = (props) => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { contacts } = contactContext;
  const { loadUser, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You are not connected', 'danger');
      props.history.push('/login');
    }
  }, [isAuthenticated]);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        {contacts.length > 0 && <ContactFilter />}
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
