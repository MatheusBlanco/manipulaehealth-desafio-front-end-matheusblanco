import { render } from "@testing-library/react";
import Home from "..";
import { tracks } from "../../utils/mockValues";

it("renders homepage unchanged", () => {
  const { container } = render(<Home tracks={tracks} />);
  expect(container).toMatchSnapshot();
});
