import { useDispatch } from 'react-redux';
import { ContactsBox } from './Contacts.styled';
import { deleteContacts } from 'redux/contacts/operations';

export const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ContactsBox>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span className="contactName">{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsBox>
  );
};
