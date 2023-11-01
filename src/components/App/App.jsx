// import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from 'redux/contacts/contactsSlice';

// import { Container } from './App.styled';
// import { Form } from 'components/Form/Form';
// import { Contacts } from 'components/Contacts/Contacts';
// import { Filter } from 'components/Filter/Filter';
// import { useEffect } from 'react';
// import { requestContacts } from 'redux/contacts/operations';

// export function App() {
//   const dispatch = useDispatch();

//   const contacts = useSelector(state => state.contacts.contacts.item);
//   const isLoading = useSelector(state => state.contacts.contacts.isLoading);
//   const error = useSelector(state => state.contacts.contacts.error);
//   const filter = useSelector(state => state.contacts.filter);

//   useEffect(() => {
//     dispatch(requestContacts());
//   }, [dispatch]);

//   const handleFilterChange = value => {
//     dispatch(filterContact(value));
//   };

//   const filterContacts = () => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   return (
//     <Container>
//       <Form />
//       <h2>Contacts</h2>
//       {isLoading && !error && <h3>Loading...</h3>}
//       {contacts.length !== 0 && (
//         <>
//           <Filter onChange={handleFilterChange} filter={filter} />
//           <Contacts contacts={filterContacts()} />
//         </>
//       )}
//     </Container>
//   );
// }

///////////////////////

// import { lazy } from 'react';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
import { NavLink, Route, Routes } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Home from 'pages/HomePage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

// const Home = lazy(() => import('../../pages/HomePage'));

const App = () => {
  return (
    <>
      {/* <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
