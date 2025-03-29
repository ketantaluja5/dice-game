import styled from "styled-components";

export const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  min-width: 220px;
  height: 44px;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #ffffff;
    border: 1px solid black;
    color: #000000;
    transition: 0.2s background ease-in;
  }

  /* @media (max-width: 768px) {
    min-width: 180px;
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    min-width: 150px;
    height: 36px;
    font-size: 12px;
  } */
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
