import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 20%;
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-top: 1rem;
  color: #ffffff;
`;

export const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

export const SidebarMenu = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 10;
  left: 0;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  width: 95%;
  padding: 10px 15px;
  font-size: 20px;
  text-decoration: none;
  color: grey;
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover {
    transform: scale(1.01);

    background-color: #80808040;
    color: white;
  }
`;
