import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const {
    postPath, title, author, content, createdAt,
  } = props;
  const editPostPath = `${postPath}/edit`;
  const authorText = author ? ` by ${author}` : '';

  return (
    <div className="card">
      <h3 className="card-header">{title}</h3>
      <div className="card-body">
        <p className="card-text">{content}</p>

        <div className="boxFooter">
          <div className="text">
            Posted at &nbsp;
            {createdAt}
            {authorText}
          </div>
          <div className="btn-group" role="group">
            <a href={editPostPath} className="btn btn-secondary">Edit</a>
            <a href={postPath} className="btn btn-secondary" rel="nofollow" data-method="delete">Remove</a>
          </div>
        </div>

      </div>
    </div>
  );
}

Post.propTypes = {
  postPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string,
};

Post.defaultProps = {
  author: null,
};

export default Post;
