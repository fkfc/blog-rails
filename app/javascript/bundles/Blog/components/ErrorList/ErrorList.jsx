import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorList(props) {
  const { errors, name } = props;
  const count = errors.length;
  if (count === 0) return null;

  const title = `${count} ${(count > 1) ? 'errors' : 'error'} prevented this ${name} from saving:`;

  return (
    <div className="alert alert-danger">
      <h5>
        {title}
      </h5>
      <ul>
        {
          errors.map((error, index) => {
            const key = `error${index}`;
            return (<li key={key}>{error}</li>);
          })
        }
      </ul>
    </div>
  );
}

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

ErrorList.defaultProps = {
  errors: [],
};
