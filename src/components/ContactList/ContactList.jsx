import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';

export const ContactList = () =>
  // { contacts, onClick }
  {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    // console.log(current(contacts));

    const findedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <ul>
        {findedContacts &&
          findedContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              // onClick={onClick}
            />
          ))}
      </ul>
    );
  };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
