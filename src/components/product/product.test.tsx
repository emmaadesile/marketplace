import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Product } from "./product.component";
import { ProductCardProps } from "./product.props";
import { product } from "../../test-mocks";

const props: ProductCardProps = {
  product,
  handleAddToCart: jest.fn(),
};

describe("Product card component", () => {
  test("it renders the product", () => {
    const { container } = render(<Product {...props} />);
    expect(container).toBeDefined();
  });
  test("show product details", () => {
    render(<Product {...props} />);
    const {
      name,
      description,
      metadata: { blockThumbnailUrl },
    } = props.product;
    const credits = props.product.metadata.blockPricingStrategy.credits;

    expect(screen.getByTestId("description")).toHaveTextContent(description);
    expect(screen.getByTestId("name")).toHaveTextContent(name);
    expect(screen.getByTestId("credits")).toHaveTextContent(
      `${credits} Credits`
    );
    expect(screen.getByAltText("product-thumbnail")).toHaveAttribute(
      "src",
      blockThumbnailUrl
    );
  });

  test("should call add to cart function", () => {
    render(<Product {...props} />);
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });

    userEvent.click(addToCartButton);
    expect(props.handleAddToCart).toHaveBeenCalled();
  });
});
