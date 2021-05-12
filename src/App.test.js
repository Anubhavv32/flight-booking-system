import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

describe('App Component', () => {
  it('Should render without errors', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find('.App');
    expect(component.length).toBe(1);
  })
  // it('test hide btn handler', () => {
  //   const classInstance = wrapper.instance();
  //   classInstance.hideBtnHandler();
  //   const newState = classInstance.state.hideBtn;
  //   expect(newState).toBe(true);
  // })
  // it('test hide btn handler', () => {
  //   const classInstance = wrapper.instance();
  //   const newValue = classInstance.plusCounter(6);
  //   expect(newValue).toBe(7);
  // })
})