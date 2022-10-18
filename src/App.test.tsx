import App from "./App";
import { renderWithProviders } from "./test-utils";

test("renders App component", () => {
  const { container } = renderWithProviders(<App />);
  expect(container).toBeInTheDocument();
});
