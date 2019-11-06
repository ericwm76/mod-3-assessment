import { orders } from './orders';

describe('orders', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = orders(undefined, []);

    expect(result).toEqual(expected);
  })

  it('should be able to return orders', () => {
    const initialState = [];
    const action = {
      type: 'SET_ORDERS',
      orders: [
        { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
        { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
        { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
      ]
    }

    const expected = [
      { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
      { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
      { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
    ]

    const result = orders(initialState, action)

    expect(result).toEqual(expected);
  })

  it('should be able to add a new order', () => {
    const initialState = [
      { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
      { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
      { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
    ];

    const action = {
      type: 'ADD_ORDER',
      order: { 
        name: 'Reggie', 
        ingredients: ['lettuce', 'queso', 'steak']   }
    }

    const expected = [
      { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
      { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
      { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   },
      { name: 'Reggie', ingredients: ['lettuce', 'queso', 'steak']   }
    ]

    const result = orders(initialState, action)

    expect(result).toEqual(expected);
  })
})