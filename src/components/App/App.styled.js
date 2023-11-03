import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p,
  span,
  input {
    font-size: 20px;
  }
`;
