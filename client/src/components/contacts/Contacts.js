import React, { Fragment, useContext, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

export default () => {
  const contactContext = useContext(ContactContext);
  const [list, setList] = useState([]);
  const { contacts, filtered } = contactContext;

  useEffect(() => {
    setList(filtered ? filtered : contacts);
  }, [filtered, contacts]);

  return (
    <Fragment>
      <TransitionGroup>
        {list.map((contact) => (
          <CSSTransition key={contact.id} timeout={500} classNames='item'>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};
