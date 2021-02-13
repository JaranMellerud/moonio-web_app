// Styled Components
import styled, { css } from "styled-components";
// Palette
import { palette, buttonStyles } from "../styles/theme";

export const MainButton = styled.button`
  color: ${palette.primary.dark};
  background-color: ${palette.primary.contrastText};
  border: ${buttonStyles.borderWidth} solid ${palette.primary.contrastText};
  width: 140px;
  height: 50px;
  font-size: 20px;
  border-radius: ${buttonStyles.borderRadius};
  padding: 5px;
  &:hover {
    color: ${palette.primary.contrastText};
    background-color: #ffffff00;
    transition: 0.3s ease-out;
  }
`;

export const SecondaryButton = styled.button`
  color: ${palette.primary.contrastText};
  padding: ${buttonStyles.padding};
  background-color: #ffffff00;
  font-size: 18px;
  border: ${buttonStyles.borderWidth} solid ${palette.primary.contrastText};
  border-radius: ${buttonStyles.borderRadius};
  &:hover {
    color: ${palette.primary.dark};
    background-color: ${palette.primary.contrastText};
    transition: 0.3s ease-out;
  }
`;

export const chartButton = styled.button`
  padding: ${buttonStyles.padding};
  margin: 2px;
  border-radius: ${buttonStyles.borderRadius};
  font-size: 0.8rem;
  border: #dcdcdc solid ${buttonStyles.borderWidth};
  background-color: #dcdcdc;
  color: black;

  ${({ active }) =>
    active &&
    css`
      background-color: gray;
      color: white;
      border: gray solid 1px;
    `}
`;

export const AddTransactionButton = styled.button`
  padding: ${buttonStyles.padding};
  font-weight: bold;
  border-radius: ${buttonStyles.borderRadius};
  font-size: 1rem;
  border: ${palette.primary.light} solid ${buttonStyles.borderWidth};
  color: ${palette.primary.contrastText};
  background-color: ${palette.primary.light};
  &:hover {
    background-color: #ffffff00;
    color: ${palette.primary.light};
    border: ${palette.primary.light} solid ${buttonStyles.borderWidth};
    transition: 0.3s ease-out;
  }
`;

export const DeleteButton = styled.button`
  padding: ${buttonStyles.padding};
  background-color: ${palette.primary.red};
  color: ${palette.primary.contrastText};
  border: ${buttonStyles.borderWidth} solid black;
  margin-left: 10px;
  border-radius: ${buttonStyles.borderRadius};
`;

export const EditButton = styled.button`
  padding: ${buttonStyles.padding};
  background-color: ${palette.primary.contrastText};
  border: ${buttonStyles.borderWidth} solid black;
  border-radius: ${buttonStyles.borderRadius};
  margin-left: 10px;
`;

export const SaveButton = styled.button`
  padding: ${buttonStyles.padding};
  background-color: ${palette.primary.light};
  border: ${buttonStyles.borderWidth} ${palette.primary.light};
  border-radius: ${buttonStyles.borderRadius};
  color: ${palette.primary.contrastText};
  margin-left: 10px;
`;
