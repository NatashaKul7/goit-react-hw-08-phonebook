import styled from 'styled-components';

export const ContactsBox = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;

  gap: 16px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    margin-left: auto;
    padding: 4px 8px;

    border-radius: 20px;
    background-color: #00ffff;
    font-size: inherit;
    color: #ffffff;
    background-color: rgba(0, 0, 255, 0.7);
  }
  button:hover {
    scale: 1.1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
  .contactName {
    margin-right: 8px;
  }

  .contacts-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
`;

export const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    padding: 4px 8px;
    border-radius: 20px;
    outline-color: #0000ff;
  }

  p {
    margin: 0;
    margin-bottom: 8px;
  }

  .editName {
    margin-right: 8px;
  }
  .editNumber {
    margin-right: 4px;
  }
  .save-button {
    margin-right: 8px;
  }
`;
