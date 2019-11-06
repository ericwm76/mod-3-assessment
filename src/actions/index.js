export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const addOrder = (name, ingredients) => ({
  type: 'ADD_ORDER',
  order: {
    name, ingredients
  }
})