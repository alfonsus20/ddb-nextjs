import { fireEvent, render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer unit test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("should be able to handle form change", () => {
    render(<Footer />);

    const subjectInput = screen.getByTestId(
      "subject-input"
    ) as HTMLInputElement;
    const bodyInput = screen.getByTestId("body-input") as HTMLTextAreaElement;

    expect(subjectInput).toBeVisible();
    expect(bodyInput).toBeVisible();

    fireEvent.change(subjectInput, { target: { value: "Judul" } });
    expect(subjectInput.value).toEqual("Judul");

    fireEvent.change(bodyInput, { target: { value: "Body" } });
    expect(bodyInput.value).toEqual("Body");
  });

  it("should call window.open after submitting form when fields are complete", () => {
    render(<Footer />);

    const subjectInput = screen.getByTestId(
      "subject-input"
    ) as HTMLInputElement;
    const bodyInput = screen.getByTestId("body-input") as HTMLTextAreaElement;

    fireEvent.change(subjectInput, { target: { value: "Judul" } });
    fireEvent.change(bodyInput, { target: { value: "Body" } });

    const btnSubmit = screen.getByTestId("btn-submit") as HTMLButtonElement;
    fireEvent.click(btnSubmit);

    expect(global.open).toHaveBeenCalledWith(
      "mailto:ddbrawijaya@gmail.com?subject=Judul&body=Body"
    );
  });

  it("should not call window.open after submitting form when fields are not complete", () => {
    render(<Footer />);

    const subjectInput = screen.getByTestId(
      "subject-input"
    ) as HTMLInputElement;

    fireEvent.change(subjectInput, { target: { value: "Judul" } });

    const btnSubmit = screen.getByTestId("btn-submit") as HTMLButtonElement;
    fireEvent.click(btnSubmit);

    expect(global.open).not.toHaveBeenCalled();
  });
});
