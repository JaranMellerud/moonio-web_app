import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { palette } from "../../styles/theme";

export const SettingsGroupDiv = styled.div`
  text-align: left;
  margin-bottom: 30px;
`;

export const SettingsGroupItemDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SettingsGroupChoiceDiv = styled.div`
  display: flex;
`;

export const ChoiceText = styled(Typography)`
  && {
    color: ${palette.primary.darkGray};
    margin-left: 20px;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: ${window.innerWidth < 400 ? "90%" : "500px"};
  background-color: white;
  border: 2px solid #000;
  box-shadow: 0;
  padding: 25px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
