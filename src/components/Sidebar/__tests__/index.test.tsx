import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { SideBar } from "..";

jest.mock("next/dist/client/router", () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: "/",
    asPath: "/",
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }),
}));

describe("Sidebar tests", () => {
  it("renders Sidebar", () => {
    render(<SideBar />);
    const sidebar = screen.getByTestId("#side-bar");

    expect(sidebar).toBeInTheDocument();
  });
});
