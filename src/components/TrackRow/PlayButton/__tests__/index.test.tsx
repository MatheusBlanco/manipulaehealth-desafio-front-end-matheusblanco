import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { PlayButton } from "..";

describe("Play button", () => {
  it("renders play button playing music", () => {
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

  it("renders play button paused", () => {
    render(
      <PlayButton
        playing={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const playButtonPaused = screen.getByTestId("#play-button_paused");

    expect(playButtonPaused).toBeInTheDocument();
  });

  test("Play button click", () => {
    render(
      <PlayButton
        playing={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const playButton = screen.getByTestId("#play-button_paused");
    fireEvent.click(playButton);
  });
});
