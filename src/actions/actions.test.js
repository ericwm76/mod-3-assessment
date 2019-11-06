import * as actions from '.';

describe('actions', () => {
  describe('setOrders', () => {
    it('should have a type of SET_ORDERS', () => {
      const mockOrders = [
        { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
        { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
        { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
      ]

      const expectedAction = {
        type: 'SET_ORDERS',
        orders: [
          { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
          { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
          { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
        ]
      }

      const result = actions.setOrders(mockOrders);

      expect(result).toEqual(expectedAction)
    })
  })

  describe('addOrder', () => {
    it('should have a type of ADD_ORDER', () => {
      const mockName = 'Reggie';
      const mockIngredients = ['beans', 'queso', 'cilantro']


      const expectedAction = {
        type: 'ADD_ORDER',
        order: {
          name: mockName, 
          ingredients: mockIngredients
        }
      }

      const result = actions.addOrder(mockName, mockIngredients);

      expect(result).toEqual(expectedAction)
    })
  })
})