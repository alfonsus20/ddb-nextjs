import { render } from "@testing-library/react";
import { StakeHolderCard } from "..";

const mockedProps = {
  imageURL:
    "https://gdyzsghhuucelkwpprwa.supabase.co/storage/v1/object/public/images/users/Mask group (1).png",
  role: "ketua" as "ketua",
  name: "max",
  faculty: "filkom",
  enterYear: 2019,
  period: "2020-2021",
};

describe("Stakeholder Card unit test", () => {
  it("should render correctly", () => {
    const container = render(<StakeHolderCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
