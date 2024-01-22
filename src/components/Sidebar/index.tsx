import { MdHomeFilled, MdOutlineFavorite } from "react-icons/md";
import { Container, MenuItemLinks, MenuItems, SidebarMenu } from "./styles";

export const SidebarData = [
  {
    title: "Início",
    path: "/",
    queryParams: {},
    icon: <MdHomeFilled />,
  },
  {
    title: "Favoritos",
    path: "/favorites",
    icon: <MdOutlineFavorite />,
  },
];

export const SideBar = () => {
  return (
    <Container>
      <SidebarMenu>
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks
                href={{ pathname: item.path, query: item?.queryParams }}
              >
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}{" "}
      </SidebarMenu>
    </Container>
  );
};
