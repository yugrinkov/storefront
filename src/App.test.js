import React from 'react';
import { removeProduct, removeProductFromCart } from '../src/actions';
import { REMOVE_CART_ENTRY } from '../src/actions/types';
import { MiniCart } from './pages/header/MiniCart';
import MiniCartEntry from './pages/header/MiniCartEntry';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import expect from 'expect'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

  describe('actions', () => {
    it('should create an action to remove product', () => {
      const expectedAction = {
        type: REMOVE_CART_ENTRY,
        payload: {
          productId: 1
        }
      }
      expect(removeProduct({productId: 1})).toEqual(expectedAction)
    })

    it('should dispatch an action to mutate store ', () => {
      const payload = {productId: 1};
      const expectedAction = [
        { type: REMOVE_CART_ENTRY, payload },
      ]
      const store = mockStore({ products: [] });
      store.dispatch(removeProductFromCart(payload))
      expect(store.getActions()).toEqual(expectedAction)
    });
  });

import cartReducer from '../src/reducers/cartReducer'

describe('cart reducer', () => {
  const initialState = [
    {
      productId: 2,
      productQty: 3
    }
  ];

  it('should return the initial state', () => {
       expect(cartReducer(initialState, {})).toEqual(initialState)
  })

  it('should handle REMOVE_CART_ENTRY', () => {
    const action = {
      type: REMOVE_CART_ENTRY,
      payload: {
        productId: 2
      }
    };
    expect(cartReducer(initialState, action)).toEqual([]);  
  })
})

describe('mini cart component', () => {
  
  const mockFn = jest.fn();
  const cartEntry = {
    title: 'title',
    brand: 'brand',
    price: 50,
    productQty: 2,
    id: 1,
    image: 'img.png'
  };
  
  it('check empty cart', () => {
    const component = shallow(
        <MiniCart cartEntries={[]} totalPrice={500} />
        
    );
    component.find('.mini-cart-link').simulate('click');
    expect(component).toMatchSnapshot();
    component.find('.mini-cart-link').simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  it('check cart popup with product(s)', () => {
    const cartEntry = {
      title: 'title',
      brand: 'brand',
      price: 50,
      productQty: 2,
      id: 1 
    };
    const component = shallow(
      <MiniCart cartEntries={[cartEntry]} totalPrice={50} />
    );
    component.find('.mini-cart-link').simulate('click');
    expect(component).toMatchSnapshot();
    component.find('.mini-cart-link').simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  })

  it('check mini cart entry', () => {
    const component = shallow(
      <MiniCartEntry cartEntry={cartEntry} onClickRemoveLink={mockFn} />
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  })

  it('check onClick handler which dispatches remove action', () => {
    const component = shallow(
      <MiniCartEntry cartEntry={cartEntry} onClickRemoveLink={mockFn} />
    );
    component.find('.remove-button').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({productId: cartEntry.id});
  })

})