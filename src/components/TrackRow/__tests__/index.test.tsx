import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
  const track = tracks.data[0];
  it("renders track row withouth information", () => {
    render(
      <Providers>
        <TrackRow
          track={{
            preview: "",
            album: {
              cover_small: "",
            },
            artist: {
              name: "",
            },
            title: "",
            duration: 0,
            link: "",
            id: 0,
          }}
          index={0}
        />
      </Providers>
    );

    const trackRow = screen.getByTestId("#track_row");

    expect(trackRow).toBeInTheDocument();
  });

  it("renders track row with information", () => {
    render(
      <Providers>
        <TrackRow track={tracks.data[0]} index={0} />
      </Providers>
    );

    const trackRow = screen.getByTestId("#track_row_" + track.id);

    expect(trackRow).toBeInTheDocument();
  });

  it("Should contain darker background when hovered", async () => {
    render(
      <Providers>
        <TrackRow track={tracks.data[0]} index={0} />
      </Providers>
    );
    fireEvent.mouseEnter(screen.getByTestId("#track_row_" + track.id));

    await waitFor(() => screen.getByTestId("#track_row_" + track.id));

    expect(screen.getByTestId("#track_row_" + track.id)).toHaveStyle(
      "background-color: #80808040"
    );
  });
  it("Should contain darker background when hovered", async () => {
    render(
      <Providers>
        <TrackRow track={tracks.data[0]} index={0} />
      </Providers>
    );
    fireEvent.mouseEnter(screen.getByTestId("#track_row_" + track.id));

    await waitFor(() => screen.getByTestId("#track_row_" + track.id));

    expect(screen.getByTestId("#track_row_" + track.id)).toHaveStyle(
      "transform: scale(1.01)"
    );
  });
});
