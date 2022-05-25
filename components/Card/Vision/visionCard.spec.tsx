import { render } from "@testing-library/react";
import { FaYoutube } from "react-icons/fa";
import { VisionCard } from "..";

const mockedProps = {
  icon: <FaYoutube />,
  title: "title",
  content: "content",
};

describe("Vision card unit test", () => {
  it("should render correctly", () => {
    const container = render(<VisionCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
