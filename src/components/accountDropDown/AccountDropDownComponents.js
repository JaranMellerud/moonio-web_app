// Styled components
import styled from "styled-components";
// Material UI
import IconButton from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// Font Awesome
import { FaUser } from "react-icons/fa";
// Theme
import { palette } from "../../styles/theme";

export const StyledIconButton = styled(IconButton)`
  text-transform: none;
`;

export const EmailAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.active ? palette.primary.contrastText : palette.primary.gray};
  &:hover {
    color: ${palette.primary.contrastText};
  }
`;

export const EmailText = styled.p`
  font-size: 0.8rem;
  margin-right: 10px;
`;

export const UserIcon = styled(FaUser)`
  height: 25px;
  width: auto;
`;

export const StyledMenu = styled(Menu)`
  margin: 60px 0 0 0;
`;

export const StyledMenuItem = styled(MenuItem)`
  border-bottom: "#D5D5D5 solid 1px";
`;
