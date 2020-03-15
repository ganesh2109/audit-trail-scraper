import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import AppContainer from './app-container';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AppContainer)).toHaveLength(1);
});
