import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  
  p {
     margin: 0px 10px 0px 0px;
  }

  button {
    margin: 0;
    padding: 4px 8px;

    border-radius: 20px;
    background-color: #00ffff;
    font-size: inherit;
    color: #ffffff;
    background-color: rgba(0, 0, 255, 0.7);
  }
  button:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
`;
