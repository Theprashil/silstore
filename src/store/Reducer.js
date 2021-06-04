const addProductToCart = (state, product) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.id === product.id);

  if (curItemIndex < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[curItemIndex] };
    copyItem.quantity++;
    copy[curItemIndex] = copyItem;
  }

  // # always update your state, and update whatever you did
  return { ...state, carts: copy };
};

const removeProductFromCart = (state, productID) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.id === productID);

  const curItem = { ...copy[curItemIndex] };
  curItem.quantity--;

  if (curItem.quantity <= 0) {
    copy.splice(curItemIndex, 1);
  } else {
    copy[curItemIndex] = curItem;
  }

  return { ...state, carts: copy };
};

const clearCart = (state) => {
  return {
    ...state,
    carts: [],
  };
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addProductToCart(state, action.payload);
    case "REMOVE":
      return removeProductFromCart(state, action.payload);
    case "CLEAR":
      return clearCart(state);
    default:
      return state;
  }
};

export default Reducer;
