import ReactOnRails from 'react-on-rails';
import Post from '../bundles/Blog/components/Post/Post';
import PostForm from '../bundles/Blog/components/PostForm/PostForm';
import Comment from '../bundles/Blog/components/Comment/Comment';
import CommentForm from '../bundles/Blog/components/CommentForm/CommentForm';
import ErrorList from '../bundles/Blog/components/ErrorList/ErrorList';
import NavBar from '../bundles/Blog/components/NavBar/NavBar';

ReactOnRails.register({
  Post,
  PostForm,
  Comment,
  CommentForm,
  ErrorList,
  NavBar,
});
