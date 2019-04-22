import React from 'react';
import Comment from './Comment';

function Post(props) {
  const { post, comments, postPath } = props;
  const { title, content, created_at } = post;
  const editPostPath = `${postPath}/edit`;

  const renderComments = () => {
    if (typeof comments === 'undefined' || comments === null) return null;
    return comments.map( (comment, index) => {
      const key = `comment${index}`;
      return (
        <Comment key={key} comment={comment} /> 
      )
    });
  }

  return (
    <div className="card">
      <h3 className="card-header">{title}</h3>
      <div className="card-body">
        <p className="card-text">{content}</p>
        
        
        <div className="boxFooter">
          <div className='text'>
            Posted at {created_at}
          </div>          
          <div className="btn-group" role="group">
            <a href={editPostPath} className="btn btn-secondary">Edit</a>
            <a href={postPath} className="btn btn-secondary" rel="nofollow" data-method="delete" >Remove</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Post;
