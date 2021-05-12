import React from 'react';
import { shallow, mount } from 'enzyme';
import Signup from './Signup';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';
let store = createStore(reducer, applyMiddleware(thunk));
describe('Describe Component', () => {
  // beforeEach(() => {
  //   store = createStore(rootReducer);
  // });
  
  describe('Renders', () => {
    const onSubmitFn = jest.fn();
    const defaultProps = {
      changeHandler: () => {},
      submitting: false,
      handleSubmit: () => {},
      invalid: false,
      initialValues: {
        name: 'Jane',
        email: 'anubhavk.258@gmail.com',
        password: '12345',
        notes: 'Hello India'
      },
      initilize: () => {}
    }
    const wrapper = mount(<Provider store={store}><Signup {...defaultProps}/></Provider>);
    it('Should render a form', () => {
      const form = wrapper.find('form');
      // findByTestAttr(wrapper, 'reduxForm');
      expect(form.length).toBe(1);
    })
    it("fills the input with a default value", () => {
      expect(wrapper.find(`[id="name"]`).at(0).prop("name")).toBe("name");
      expect(wrapper.find(`[id="email"]`).at(0).prop("name")).toBe("email");
      expect(wrapper.find(`[id="password"]`).at(0).prop("name")).toBe("password");
      expect(wrapper.find(`[id="mobileNo"]`).at(0).prop("name")).toBe("mobileNo");
      // expect(wrapper.find(`[id="name"]`).at(0).prop("value")).toBe("Jane");
    });
    it("updates input value when changed", () => {
      const event = { target: { value: "Test", name: 'name' } };
      wrapper.find(`[id="name"]`).at(0).simulate("change", event);
      expect(wrapper.find(`[id="name"]`).at(0).prop("value")).toBe("Test");
    });
    // it('Should emit a click event on clicking a button', () => {
    //   console.log(wrapper.debug());
    //   const form = wrapper.find('form');
    //   form.simulate('submit');
    //   const callback = mockFunc.mock.calls.length;
    //   expect(callback).toBe(1);
    // })
  })
})