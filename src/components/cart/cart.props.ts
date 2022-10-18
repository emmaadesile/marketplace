export type CartItem = {
  id: string;
  name: string;
  credits: number;
  description: string;
};

export type CartProps = {
  cartItems: CartItem[];
  isOpen: boolean;
  handleBuyItems: () => void; 
  removeFromCart: (id: string) => void;
  toggleCartDrawer: (
    event:  React.KeyboardEvent | React.MouseEvent,
  ) => void;
};
