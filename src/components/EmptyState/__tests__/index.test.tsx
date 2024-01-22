import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { FavoritesPage } from "../../../features/FavoritesPage";
import ListingPage from "../../../features/ListingPage";
import Providers from "../../../lib/Provider";
import { tracks } from "../../../utils/mockValues";
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("Empty state tests", () => {
  it("renders empty state on listing page", () => {
    render(
      <ListingPage
        tracks={{
          data: [],
          total: 0,
        }}
      />
    );
    const emptyState = screen.getByTestId("#empty-state");

    expect(emptyState).toBeInTheDocument();
  });

  it("does not render empty state on listing page", () => {
    const { container } = render(
      <Providers>
        <ListingPage tracks={tracks} />
      </Providers>
    );
    const emptyState = container.querySelector('[data-testid="#empty-state"]');

    expect(emptyState).not.toBeInTheDocument();
  });

  it("renders empty state on favorites page", () => {
    render(
      <Providers>
        <FavoritesPage />
      </Providers>
    );
    const emptyState = screen.getByTestId("#empty-state");

    expect(emptyState).toBeInTheDocument();
  });
});
