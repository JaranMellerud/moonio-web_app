import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const EmailTextField = styled(TextField)`
  && {
    margin-top: 40px;
    margin-bottom: 20px;
    width: 80%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
