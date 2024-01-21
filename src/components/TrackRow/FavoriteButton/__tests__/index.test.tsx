import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FavoriteButton } from "..";

describe("Favorites button", () => {
  it("renders favorites button", () => {
    const result = render(
      <FavoriteButton
        isFavorited={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const favorites_button =
      result.container.querySelector("#favorites-button");
    expect(favorites_button).toBeInTheDocument();
  });
});
