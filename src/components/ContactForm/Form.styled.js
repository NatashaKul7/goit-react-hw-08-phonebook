import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;

  button {
    margin-top: 16px;
    padding: 4px;
    border-radius: 20px;
    color: #ffffff;
    background-color: rgba(0, 0, 255, 0.7);
    font-size: inherit;
  }
  button:hover {
    scale: 1.1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
  input {
    width: 580px;
    padding: 4px 8px;
    border-radius: 20px;
    outline-color: #0000ff;
  }
`;
