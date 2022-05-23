import { render } from "@testing-library/react";
import LoadingLayer from ".";

describe("Loading Layer unit test", () => {
  it("should render correctly", () => {
    const container = render(<LoadingLayer />);
    expect(container).toMatchSnapshot();
  });
});
