import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ErrorList from '../ErrorList';

describe('Testing the Post Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      name: 'test',
      errors: ['error1', 'error2', 'error3', 'error4'],
    };
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<ErrorList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Contains all items', () => {
    const wrapper = shallow(<ErrorList {...props} />);
    props.errors.map(errorMessage => expect(wrapper.text()).toContain(errorMessage));
  });
});
