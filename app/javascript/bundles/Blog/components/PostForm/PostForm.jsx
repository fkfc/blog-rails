import React from 'react';
import PropTypes from 'prop-types';

export default function PostForm(props) {
  const {
    title,
    content,
    actionPath,
    authenticityToken,
    method,
  } = props;
  const buttonLabel = (method === 'patch') ? 'Update Post' : 'Create Post';

  return (
    <div>
      <form action={actionPath} method="post">
        <input name="_method" readOnly type="hidden" value={method} />
        <input type="hidden" name="authenticity_token" value={authenticityToken} />

        <div className="form-group">
          Title
          <input type="text" id="post[title]" name="post[title]" placeholder="Type the post title here" defaultValue={title} className="form-control" />
        </div>

        <div className="form-group">
          <textarea id="post[content]" name="post[content]" placeholder="Type the post text here" className="form-control" defaultValue={content} rows="10" />
        </div>

        <div className="text-right">
          <input id="submit" name="submit" type="submit" value={buttonLabel} className="btn btn-primary" />
        </div>

      </form>
    </div>
  );
}

PostForm.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  actionPath: PropTypes.string,
  authenticityToken: PropTypes.string.isRequired,
  method: PropTypes.string,
};

PostForm.defaultProps = {
  title: '',
  content: '',
  actionPath: null,
  method: 'post',
};
