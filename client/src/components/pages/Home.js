import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import ContactContext from '../../context/contact/contactContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);
  const { contacts } = contactContext;
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

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
