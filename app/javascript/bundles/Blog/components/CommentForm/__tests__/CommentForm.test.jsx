import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import CommentForm from '../CommentForm';

describe('Testing the Post Component', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      id: 1,
      content: 'comment content',
      createdAt: 'Aaa, 12 3456',
      postCommentPath: '/postCommentPath',
      authenticityToken: 'token',
    };
  });
  it('Should render correctly', () => {
    const wrapper = shallow(<CommentForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
