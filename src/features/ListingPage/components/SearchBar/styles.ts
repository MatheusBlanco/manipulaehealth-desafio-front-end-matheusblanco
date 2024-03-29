import { MdSearch } from "react-icons/md";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: relative;
  width: 340px;
  height: 48px;
  background-color: #80808040;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(MdSearch)`
  height: 25px;
  width: 25px;
`;

export const SearchInput = styled.input`
  padding-left: 48px;
  border: none;
  position: absolute;
  top: 2px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border-radius: 15px;
  transition: all 0.3s ease;
`;
