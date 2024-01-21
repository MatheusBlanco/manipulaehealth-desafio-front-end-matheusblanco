import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { FavoriteButton } from "..";

describe("Favorites button", () => {
  it("renders favorites button active", () => {
    render(
      <FavoriteButton
        isFavorited={true}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const favoritesButtonActive = screen.getByTestId(
      "#favorites-button_active"
    );

    expect(favoritesButtonActive).toBeInTheDocument();
  });

  it("renders favorites button inactive", () => {
    render(
      <FavoriteButton
        isFavorited={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const favoritesButtonInactive = screen.getByTestId(
      "#favorites-button_inactive"
    );

    expect(favoritesButtonInactive).toBeInTheDocument();
  });

  test("Favorite button click", () => {
    render(
      <FavoriteButton
        isFavorited={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const favoritesButtonInactive = screen.getByTestId(
      "#favorites-button_inactive"
    );
    fireEvent.click(favoritesButtonInactive);
  });
});
