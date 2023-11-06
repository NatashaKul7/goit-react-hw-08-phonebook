import { useDispatch, useSelector } from 'react-redux';
import { ContactsBox, StyledEditForm } from './Contacts.styled';
import { deleteContacts, updateContacts } from 'redux/contacts/operations';
import { setEditingContactId } from 'redux/contacts/contactsSlice';

export const Contacts = ({ contacts }) => {
  const editingContactId = useSelector(
    state => state.contacts.editingContactId
  );
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const handleEdit = id => {
    dispatch(setEditingContactId(id));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const updatedContact = {
      name,
      number,
    };
    dispatch(updateContacts(updatedContact))
      .unwrap()
      .then(() => dispatch(setEditingContactId(null)));
  };

  return (
    <ContactsBox>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {editingContactId === id && (
              <StyledEditForm onSubmit={handleSubmit} className="edit-form">
                <label>
                  <p className="editName">Name</p>
                  <input type="text" defaultValue={name} name="name" />
                </label>
                <label>
                  <p className="editNumber">Phone</p>
                  <input type="number" defaultValue={number} name="number" />
                </label>
                <div>
                  <button type="submit" className="save-button">
                    Save contact
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(setEditingContactId(null))}
                  >
                    &times;
                  </button>
                </div>
              </StyledEditForm>
            )}
            <div>
              <span className="contactName">{name}:</span>
              <span>{number}</span>
            </div>
            <div className="contacts-buttons">
              <button type="button" onClick={() => handleEdit(id)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ContactsBox>
  );
};
