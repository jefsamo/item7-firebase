export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItemInCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItemInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const existingItemInCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItemInCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
