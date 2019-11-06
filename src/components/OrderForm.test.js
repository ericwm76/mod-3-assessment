import React from 'react';
import { OrderForm, mapDispatchToProps } from './OrderForm/OrderForm';
import { shallow } from 'enzyme';
import { postOrder } from '../apiCalls';
import { addOrder } from '../actions/index';

jest.mock('../apiCalls')

describe('OrderForm', () => {
  let wrapper, mockOrders, mockOrder;

  beforeEach(() => {
    mockOrders = [
      { id: 1, name: 'Carlos', ingredients: ['lettuce', 'queso', 'steak']   },
      { id: 2, name: 'Regina', ingredients: ['beans', 'queso', 'cilantro']   },
      { id: 3, name: 'Sofia', ingredients: ['rice', 'sour cream', 'carnitas']   }
    ];

    mockOrder = {
      name: 'Reggie',
      ingredients: ['rice', 'beans']
    }

    wrapper = shallow(<OrderForm addOrder={addOrder}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleNameChange on change', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'Roger'
      }
    }
    wrapper.instance().handleNameChange = jest.fn()

    wrapper.find('input').simulate('change', mockEvent)

    expect(wrapper.instance().handleNameChange).toHaveBeenCalled();
  })

  it('should update state when handleNameChange is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'Roger'
      }
    }
    wrapper.instance().handleNameChange(mockEvent);

    expect(wrapper.state('name')).toEqual('Roger')
  })

  it('should call handleIngredientChange on change', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'ingredient',
        value: 'beans'
      }
    }

    wrapper.instance().handleIngredientChange = jest.fn()

    wrapper.find('.ingredient').at(0).simulate('click', mockEvent)

    expect(wrapper.instance().handleIngredientChange).toHaveBeenCalled();
  })

  it('should update state when handleIngredientChange is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'beans',
      }
    }

    wrapper.instance().handleIngredientChange(mockEvent);

    expect(wrapper.state('ingredients')).toEqual(['beans'])
  })

  it('should call handleSubmit on click', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    }
    wrapper.instance().handleSubmit = jest.fn()

    wrapper.find('.submit').simulate('click', mockEvent)

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  })

  it('should call postOrder when handleSubmit is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
    }
    
    wrapper.instance().handleSubmit(mockEvent);

    expect(postOrder).toHaveBeenCalled();
  })

  describe('mapDispatchToProps', () => {
      it('calls dispatch with an addOrder action', () => {
        const mockDispatch = jest.fn();
        const actionToDispatch = addOrder(mockOrder);
  
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.addOrder(mockOrder);
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      })
    })
})
