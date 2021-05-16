const reducer = (state, action) => {
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cardTotal, cardItem) => {
        const { price, amount } = cardItem;
        cardTotal.amount += amount;
        cardTotal.total += amount * price;
        return cardTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, amount, total };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    const newCart = state.cart.filter(
      (cardItem) => cardItem.id !== action.payload
    );
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY") {
    return { ...state, cart: action.payload, loading: false };
  }
  return state;
};
export default reducer;
