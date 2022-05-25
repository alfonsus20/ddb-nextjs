import { render } from "@testing-library/react";
import LayoutAdmin from ".";

describe("Layout Admin unit test", () => {
  it("should render correcly", () => {
    const container = render(
      <LayoutAdmin title="Testing">
        <p>masuk</p>
      </LayoutAdmin>
    );

    expect(container).toMatchSnapshot();
  });
});
