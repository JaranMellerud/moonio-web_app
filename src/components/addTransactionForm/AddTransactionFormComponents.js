// Styled components
import styled from "styled-components";
// Material UI
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
// Material UI Icons
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
// Components
import { AddTransactionButton } from "../buttons";

export const FormFieldHeader = styled.h2`
  && {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const StyledAutocomplete = styled(Autocomplete)`
  && {
    width: 197px;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    background-color: white;
    margin: 10px auto 10px auto;

    // Removing arrows in number input field
    -webkit-inner-spin-button,
    .no-spin::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
      margin: 0 !important;
    }
  }
`;

export const AssetTypeInOutContainer = styled.div`
  && {
    display: flex;
    margin: 20px 0 0 0;
  }
`;

export const FiatInOutContainer = styled.div`
  && {
    width: 50%;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  && {
    background-color: white;
  }
`;

export const AssetTypeOutContainer = styled.div`
  && {
    width: 50%;
    margin-left: 60px;
  }
`;

export const AddTransactionFormDivider = styled.div`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

export const AssetContainer = styled.div`
  && {
    width: 45%;
    text-align: center;
  }
`;

export const CoinImage = styled.img`
  && {
    height: 25px;
    width: auto;
  }
`;

export const ArrowIconContainer = styled.div`
  && {
    display: flex;
    align-items: center;
  }
`;

export const StyledArrowIcon = styled(ArrowForwardOutlinedIcon)`
  && {
    color: gray;
  }
`;

export const FeesContainer = styled.div`
  && {
    margin: 20px 0 0 0;
  }
`;

export const FeesTypeContainer = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledAddTransactionButton = styled(AddTransactionButton)`
  width: 100%;
  margin-top: 20px;
  padding: 15px 0;
`;
