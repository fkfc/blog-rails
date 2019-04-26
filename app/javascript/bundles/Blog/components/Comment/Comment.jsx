import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
  const {
    id, content, createdAt, postCommentPath, author,
  } = props;

  if (typeof id === 'undefined' || id === null) return null;
  const editPostCommentPath = `${postCommentPath}/edit`;
  const authorText = author ? ` by ${author}` : '';

  return (
    <li className="list-group-item comment">
      <pre>
        { content }
      </pre>

      <div className="boxFooter">
        <div className="text">
          { createdAt }
          { authorText }
        </div>
        <div className="btn-group btn-group-sm" role="group">
          <a href={editPostCommentPath} className="btn btn-secondary">Edit</a>
          <a href={postCommentPath} className="btn btn-secondary" rel="nofollow" data-method="delete">Remove</a>
        </div>
      </div>

    </li>
  );
}

Comment.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  postCommentPath: PropTypes.string.isRequired,
  author: PropTypes.string,
};

Comment.defaultProps = {
  id: null,
  content: '',
  createdAt: null,
  author: null,
};
