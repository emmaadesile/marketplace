import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { ProductsView } from "./products.view";
import { products as productsMock } from "../../test-mocks";

export const handlers = [
  rest.get("/marketplace/blocks", (req, res, ctx) => {
    return res(ctx.json({ data: productsMock }), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches all products", async () => {
  renderWithProviders(<ProductsView />);

  // loading state
  expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument();

  // after data fetching is done
  const filteredProducts = productsMock.filter(
    (product) => product.metadata.blockPricingStrategy.name === "simple"
  );
  expect(await screen.findAllByTestId("product-card")).toHaveLength(
    filteredProducts.length
  );
});
