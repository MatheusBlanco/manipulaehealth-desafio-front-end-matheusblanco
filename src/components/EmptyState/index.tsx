import Image from "next/image";
import { SubHeader } from "../../styles";
import { EmptyStateContainer } from "./styles";

interface Props {
  svgIcon: string;
  title: string;
  subtitle: string;
}

export const EmptyState = ({ svgIcon, title, subtitle }: Props) => {
  return (
    <EmptyStateContainer data-testid="#empty-state">
      <SubHeader>{title}</SubHeader> <SubHeader>{subtitle}</SubHeader>
      <Image
        src={svgIcon}
        alt="No results found"
        width={300}
        height={300}
        loading="lazy"
      />
      <a
        href="https://storyset.com/data"
        style={{ fontSize: "10px", color: "grey" }}
      >
        Data illustrations by Storyset
      </a>
    </EmptyStateContainer>
  );
};
