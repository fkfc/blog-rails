import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import PostForm from '../PostForm';

describe('Testing the Post Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      authenticityToken: 'token',
    };
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<PostForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
