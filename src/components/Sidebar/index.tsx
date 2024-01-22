import { MdHomeFilled, MdOutlineFavorite } from "react-icons/md";
import { useWindowSize } from "../../hooks/useWindowSize";
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
  const [width] = useWindowSize();
  return (
    <Container data-testid="#side-bar">
      <SidebarMenu>
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks
                data-testid={"#sidebar-button-" + index}
                href={{ pathname: item.path, query: item?.queryParams }}
              >
                {item.icon}
                {width >= 857 && (
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                )}
              </MenuItemLinks>
            </MenuItems>
          );
        })}{" "}
      </SidebarMenu>
    </Container>
  );
};
