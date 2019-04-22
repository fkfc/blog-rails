import ReactOnRails from 'react-on-rails';
import Post from '../bundles/Blog/components/Post';
import PostForm from '../bundles/Blog/components/PostForm';
import Comment from '../bundles/Blog/components/Comment';
import CommentForm from '../bundles/Blog/components/CommentForm';
import ErrorList from '../bundles/Blog/components/ErrorList';

ReactOnRails.register({
  Post,
  PostForm,
  Comment,
  CommentForm,
  ErrorList,
});
