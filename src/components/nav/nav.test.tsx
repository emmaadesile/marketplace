import React from "react";
import { screen, render } from "@testing-library/react";
import { Navigation } from "./nav.component";
import { NavProps } from "./nav.props";
import useEvent from "@testing-library/user-event";

const navProps: NavProps = {
  userCredits: 10000,
  cartItemsCount: 0,
  toggleCartDrawer: jest.fn(),
};

test("render navigation component", async () => {
  const { container } = render(<Navigation {...navProps} />);
  const cartIcon = screen.getByTestId("cart-icon");

  expect(container).toBeInTheDocument();
  expect(screen.getByTestId("logo")).toBeInTheDocument();

  // user credits
  expect(screen.getByTestId("user-credits")).toHaveTextContent(
    /total credits: 10000/i
  );

  // cart icon
  expect(cartIcon).toBeInTheDocument();
  useEvent.click(cartIcon);

  expect(navProps.toggleCartDrawer).toBeCalled();
});
