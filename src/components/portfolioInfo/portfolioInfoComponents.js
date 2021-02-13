import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import Typography from "@material-ui/core/Typography";

export const InfoSkeleton = styled(Skeleton)`
  && {
    width: 200px;
    height: 50px;
  }
`;

export const InfoContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const InnerInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrencyText = styled(Typography)`
  && {
    margin-right: 10px;
  }
`;

export const ValueText = styled(Typography)`
  && {
    text-align: center;
  }
`;

export const ReturnText = styled.p`
  text-align: center;
  color: ${(props) => props.color};
  font-size: 1.5rem;
`;
