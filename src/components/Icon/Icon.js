import PropTypes from 'prop-types';
import React from 'react';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: PropTypes.node,
};

export default Icon;
