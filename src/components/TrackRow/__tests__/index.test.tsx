import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { TrackRow } from "..";
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

describe("Track Row case", () => {
  it("renders track row with information", () => {
    render(
      <Providers>
        <TrackRow track={tracks.data[0]} index={0} />
      </Providers>
    );

    const trackRow = screen.getByTestId("#track_row");

    expect(trackRow).toBeInTheDocument();
  });
});
