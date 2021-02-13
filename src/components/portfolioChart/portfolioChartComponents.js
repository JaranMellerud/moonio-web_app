import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

export const ChartBackground = styled(Paper)`
  && {
    padding: 10px;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  margin: 0 10px;
  height: 20px;
`;

export const InnerChartContainer = styled.div`
  display: block;
  position: relative;
  align-items: center;
  width: 100%;
  height: 30vh;
`;

export const ChartSkeleton = styled(Skeleton)`
  && {
    height: 30vh;
  }
`;
