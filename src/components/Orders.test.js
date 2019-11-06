import React from 'react';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders/Orders';
import { shallow } from 'enzyme';
import { getOrders } from '../apiCalls';
import { setOrders } from '../actions';

jest.mock('../apiCalls');
jest.mock('../actions');

describe('Orders', () => {
  let wrapper, mockOrders;

  beforeEach(() => {

    mockOrders = [
      { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
      { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
      { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
    ];

    wrapper = shallow(<Orders setOrders={jest.fn()} orders={mockOrders}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getOrders on mount', () => {
    expect(getOrders).toHaveBeenCalled();
  })

  it('should call setOrders on mount', () => {
    expect(setOrders).toHaveBeenCalled();
  })

  describe('mapStateToProps', () => {
    it('should return an object with the orders array', () => {
      const mockState = {
        orders: mockOrders,
        filter: 'SET_PLAYERS'
      };
      const expected = {
        orders: mockOrders
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a setOrders action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setOrders(mockOrders);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setOrders(mockOrders);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})