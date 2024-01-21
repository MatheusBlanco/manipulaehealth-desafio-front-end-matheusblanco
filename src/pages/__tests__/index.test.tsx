import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Home from "..";
import { TrackRow } from "../../components/TrackRow";
import { FavoriteButton } from "../../components/TrackRow/FavoriteButton";
import { PlayButton } from "../../components/TrackRow/PlayButton";
import ListingPage from "../../features/ListingPage";
import Providers from "../../lib/Provider";
import { tracks } from "../../utils/mockValues";

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

describe("Integration test for homepage", () => {
  it("Should render the home", () => {
    render(
      <Home
        tracks={{
          data: [],
          total: 0,
        }}
      />
    );
    const home = screen.getByTestId("#home");

    expect(home).toBeInTheDocument();
  });

  it("should render a single approved ", () => {
    render(
      <Providers>
        {tracks.data.map((track, index) => {
          return <TrackRow key={track.id} track={track} index={index} />;
        })}
      </Providers>
    );

    const trackRow = screen.getByTestId("#track_row_" + tracks.data[0].id);

    expect(trackRow).toBeInTheDocument();
  });

  it("Should search for new songs", () => {
    render(
      <ListingPage
        tracks={{
          data: [],
          total: 0,
        }}
      />
    );

    const inputElement = screen.getByPlaceholderText(
      /Álbuns, artistas ou músicas.../i
    );

    fireEvent.change(inputElement, { target: { value: "Me leva pra casa" } });

    render(
      <Providers>
        {tracks.data.map((track, index) => {
          return <TrackRow key={track.id} track={track} index={index} />;
        })}
      </Providers>
    );

    const trackRow = screen.getByTestId("#track_row_" + tracks.data[0].id);

    expect(trackRow).toBeInTheDocument();
  });

  it("Should add songs to favorites", () => {
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

  it("Should remove songs from favorites", () => {
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
    fireEvent.click(favoritesButtonActive);
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

  it("Should play song", () => {
    render(
      <PlayButton
        playing={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const pausedButton = screen.getByTestId("#play-button_paused");
    fireEvent.click(pausedButton);

    render(
      <PlayButton
        playing={true}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const playButtonPlaying = screen.getByTestId("#play-button_playing");

    expect(playButtonPlaying).toBeInTheDocument();
  });
});
