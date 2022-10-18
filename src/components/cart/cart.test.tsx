import { screen, render } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import { Cart } from "./cart.component";
import { CartProps } from "./cart.props";
import { cartItems } from "../../test-mocks";

const handlers = {
  handleBuyItems: jest.fn(),
  removeFromCart: jest.fn(),
  toggleCartDrawer: jest.fn(),
};

const props: CartProps = {
  cartItems,
  isOpen: true,
  ...handlers,
};

const updatedProps: CartProps = {
  cartItems: [cartItems[1]],
  isOpen: true,
  ...handlers,
};

const emptyCartProps: CartProps = {
  cartItems: [],
  isOpen: true,
  ...handlers,
};

describe("Cart component", () => {
  test("should cart component", () => {
    const emptyCartProps = { ...props, cartItems: [] };
    const { container } = render(<Cart {...emptyCartProps} />);

    expect(container).toBeDefined();

    // empty cart
    const emptyCartText = screen.getByText(/your cart is empty/i);
    const button = screen.getByRole("button", { name: /close/i });

    expect(emptyCartText).toBeInTheDocument();
    useEvent.click(button);
  });
  test("renders all products in the cart", async () => {
    const { rerender } = render(<Cart {...props} />);
    const cartTitle = screen.getByTestId("cart-title");
    const cartProducts = screen.getAllByTestId("cart-item");
    const deleteButton = screen.getAllByTestId("delete-btn");

    expect(cartTitle).toHaveTextContent(
      `Cart - ${cartProducts.length} item(s)`
    );
    expect(cartProducts).toHaveLength(2);

    // total credits
    const total = cartItems.reduce((acc, item) => acc + item.credits, 0);
    expect(screen.getByTestId("total")).toHaveTextContent(
      `Total: ${total} credits`
    );

    // delete item
    useEvent.click(deleteButton[0]);
    expect(props.removeFromCart).toHaveBeenCalled();

    // rerender cart component
    rerender(<Cart {...updatedProps} />);
    const updatedCartItems = screen.getAllByTestId("cart-item");
    expect(updatedCartItems).toHaveLength(1);
  });

  test("should buy products in the cart", () => {
    const { rerender } = render(<Cart {...props} />);
    const buyNowButton = screen.getByRole("button", { name: "Buy now" });

    expect(buyNowButton).toBeInTheDocument();
    useEvent.click(buyNowButton);
    expect(props.handleBuyItems).toBeCalled();

    // cart is empty after buying products
    rerender(<Cart {...emptyCartProps} />);
    expect(screen.queryAllByTestId("cart-item")).toHaveLength(0);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
