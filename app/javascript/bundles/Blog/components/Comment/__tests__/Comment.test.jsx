import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Comment from '../Comment';

describe('Testing the Post Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      id: 1,
      content: 'comment content',
      createdAt: 'Aaa, 12 3456',
      postCommentPath: '/postCommentPath',
    };
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<Comment {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Includes the comment content', () => {
    const wrapper = shallow(<Comment {...props} />);
    expect(wrapper.text()).toContain(props.content);
  });
  it('Includes the creation date', () => {
    const wrapper = shallow(<Comment {...props} />);
    expect(wrapper.text()).toContain(props.createdAt);
  });
  it('Renders nothing when it doesnt have an ID', () => {
    props.id = null;
    const wrapper = shallow(<Comment {...props} />);
    expect(wrapper.type()).toBe(null);
  });
});
