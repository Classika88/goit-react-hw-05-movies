import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieItem } from './MovieLink.styled';

const MovieLink = ({ name, id }) => {
  const location = useLocation();
  return (
    <MovieItem>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {name}
      </NavLink>
    </MovieItem>
  );
};

MovieLink.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieLink;
