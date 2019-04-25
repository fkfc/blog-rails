import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Post from '../Post';

describe('Testing the Post Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      postPath: '/postPath',
      title: 'My Title',
      content: 'My content',
      createdAt: 'Month 00th, 9999',
    };
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<Post {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Contains the post title', () => {
    const wrapper = shallow(<Post {...props} />);
    expect(wrapper.text()).toContain(props.title);
  });
  it('Includes the post content text', () => {
    const wrapper = shallow(<Post {...props} />);
    expect(wrapper.text()).toContain(props.content);
  });
});
