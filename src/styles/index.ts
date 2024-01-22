import { Tooltip } from "react-tooltip";
import styled, { keyframes } from "styled-components";

export const MainFlex = styled.main`
  display: flex;
  align-items: start;
  padding: 1rem 1rem 1rem 0rem;
`;

const HeaderKeyFrame = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const MainContainer = styled.main`
  width: 80%;
  border-radius: 10px;
  padding: 2rem;

  position: relative;
  flex: none;
  background-position: top center;
  background: linear-gradient(270deg, #2d4687, #662524);
  animation: ${HeaderKeyFrame} 15s ease infinite;
  background-size: 200% 100%;
`;

export const FullWidthDiv = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  min-height: 89vh;
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
