import { Tooltip } from "react-tooltip";
import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
`;

export const Header = styled.h1``;

export const ReactTooltipStyled = styled(Tooltip).attrs({
  className: "custom-tooltip",
})`
  &.custom-tooltip {
    background-color: #848884;
    color: white;
    border-radius: 10px;
  }
`;
