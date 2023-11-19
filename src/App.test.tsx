import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import App from "./App";
import { VitestAppWrapper } from "./VitestAppWrapper";

describe("Simple working test", () => {
  test("should render correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("the title is visible", () => {
    render(<App />, { wrapper: VitestAppWrapper });
    expect(screen.getByText(/Vite Example/)).toBeInTheDocument();
  });

  test("should increment count on click", async () => {
    render(<App />, { wrapper: VitestAppWrapper });
    await userEvent.click(screen.getByRole("button", { name: /count is: 0/i }));
    expect(await screen.findByText(/count is: 1/i)).not.toBeEmptyDOMElement();
  });
});
