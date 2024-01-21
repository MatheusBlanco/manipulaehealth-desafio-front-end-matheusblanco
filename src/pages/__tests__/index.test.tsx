import { tracks } from "../../utils/mockValues";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home tracks={tracks} />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
