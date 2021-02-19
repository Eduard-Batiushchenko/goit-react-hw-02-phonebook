import React from 'react';
import style from './Contacts.modle.css';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(el => {
        return (
          <li>
            {el.name}: {el.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
