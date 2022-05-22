import { render } from "@testing-library/react";
import { NewsCard } from "..";
import "jest-canvas-mock";

const mockedProps = {
  title: "Judul",
  content: "Konten",
  image:
    "https://gdyzsghhuucelkwpprwa.supabase.co/storage/v1/object/public/images/users/Mask group (1).png",
  id: 1,
  blurHash: "U9HeB^R50{w|4T^kE0s9y?tR0KXTp]IosA9Z",
  date: "2022-05-22 17:00:00",
};

describe("News Card Component unit test", () => {
  it("should render correctly", () => {
    const container = render(<NewsCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render human readable date format", () => {
    const { getByTestId } = render(<NewsCard {...mockedProps} />);
    const date = getByTestId("post-date");
    expect(date.textContent).toEqual("Minggu, 22 Mei 2022");
  });
});
