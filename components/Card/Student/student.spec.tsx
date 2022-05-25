import { render, screen } from "@testing-library/react";
import { StudentCard } from "..";
import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import createMockRouter from "../../../test-utils/createMockRouter";

const mockedProps = {
  name: "Test",
  entryYear: 2019,
  majority: "Teknik Informatika",
  image:
    "https://gdyzsghhuucelkwpprwa.supabase.co/storage/v1/object/public/images/users/Mask group (1).png",
  id: 2,
  isGraduated: false,
};

describe("Student card unit test", () => {
  it("should render correctly", () => {
    const container = render(<StudentCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should have correct link path for mahasiswa", async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <StudentCard {...mockedProps} />
      </RouterContext.Provider>
    );
    const cardEl = screen.getByTestId("student-card");
    expect(cardEl).toHaveAttribute("href", "/mahasiswa/2");
  });

  it("should have correct link path for alumni", async () => {
    const router = createMockRouter({});
    mockedProps.isGraduated = true;
    render(
      <RouterContext.Provider value={router}>
        <StudentCard {...mockedProps} />
      </RouterContext.Provider>
    );
    const cardEl = screen.getByTestId("student-card");
    expect(cardEl).toHaveAttribute("href", "/alumni/2");
  });
});
