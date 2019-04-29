import React from 'react';
import PropTypes from 'prop-types';

const NavBar = (props) => {
  const {
    signedIn, currentUserEmail, signOutLink, signInLink, signUpLink,
  } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Blog</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <a className="nav-link" href="/posts/new">
              New Post
              <span className="sr-only" />
            </a>
          </li>

          {
            signedIn ? (
              <li className="nav-item">
                <a href={signOutLink} data-method="delete" className="nav-link">
                  {currentUserEmail}
                </a>
              </li>
            ) : [
              <li className="nav-item">
                <a href={signUpLink} className="nav-link">Sign Up</a>
              </li>,
              <li className="nav-item">
                <a href={signInLink} className="nav-link">Sign In</a>
              </li>,
            ]
          }
        </ul>

      </div>
    </nav>
  );
};

NavBar.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  currentUserEmail: PropTypes.string,
  signOutLink: PropTypes.string.isRequired,
  signInLink: PropTypes.string.isRequired,
  signUpLink: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  currentUserEmail: null,
};

export default NavBar;
