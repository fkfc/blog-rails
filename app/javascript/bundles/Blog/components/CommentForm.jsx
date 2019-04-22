import React from 'react';
import PropTypes from 'prop-types';

export default function CommentForm(props) {
  const {
    content,
    actionPath,
    authenticityToken,
    method,
  } = props;
  const buttonLabel = (method === 'patch') ? 'Update Comment' : 'Create Comment';

  return (
    <div>
      <form action={actionPath} method="post">
        <input name="_method" readOnly type="hidden" value={method} />
        <input type="hidden" name="authenticity_token" value={authenticityToken} />
        <div className="form-group">
          <textarea name="comment[content]" placeholder="Type your comment here" className="form-control" defaultValue={content} />
        </div>
        <div className="text-right">
          <input type="submit" value={buttonLabel} className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  content: PropTypes.string,
  actionPath: PropTypes.string,
  authenticityToken: PropTypes.string.isRequired,
  method: PropTypes.string,
};

CommentForm.defaultProps = {
  content: '',
  actionPath: null,
  method: 'post',
};
