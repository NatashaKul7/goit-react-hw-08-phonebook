import { phonebookInstance } from './userApi';

export const fetchContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');
  return data;
};

export const fetchAddContacts = async contactsData => {
  const { data } = await phonebookInstance.post('/contacts', contactsData);
  return data;
};

export const fetchDeleteContacts = async id => {
  const { data } = await phonebookInstance.delete(`/contacts/${id}`);
  return data;
};
