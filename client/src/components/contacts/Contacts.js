import React, { Fragment, useContext, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

export default () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [list, setList] = useState([]);
  const { contacts, filtered, getContacts, loading, error, clearErrors } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    setList(filtered ? filtered : contacts);
  }, [filtered, contacts]);

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [error]);

  return (
    <Fragment>
      {!loading && contacts !== null ? (
        <TransitionGroup>
          {contacts.length > 0 &&
            list &&
            list.length > 0 &&
            list.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
