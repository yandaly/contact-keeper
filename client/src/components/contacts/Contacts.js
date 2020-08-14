import React, { Fragment, useContext, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

export default () => {
  const contactContext = useContext(ContactContext);
  const [list, setList] = useState([]);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    setList(filtered ? filtered : contacts);
  }, [filtered, contacts]);

  return (
    <Fragment>
      {!loading && contacts !== null ? (
        <TransitionGroup>
          {list &&
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
