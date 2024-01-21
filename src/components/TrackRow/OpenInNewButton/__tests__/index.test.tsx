/* eslint-disable react/jsx-key */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { OpenInNewButton } from "..";
import { createMockRouter } from "../../../../utils/mockValues";

describe("Open in New", () => {
  it("renders Open in new tab", () => {
    render(<OpenInNewButton link={"https://google.com"} />);

    const openInNewButton = screen.getByTestId("#open_in_new");

    expect(openInNewButton).toBeInTheDocument();
  });

  let router = createMockRouter({});
});
