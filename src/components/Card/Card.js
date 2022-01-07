/** w kazdym pliku react trzeba importować bibliotekę react */
import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <p className={styles.component}> {props.title} </p>
);

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;