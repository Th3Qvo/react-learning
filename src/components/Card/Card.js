/** w kazdym pliku react trzeba importować bibliotekę react */
import React from 'react';
import styles from './Card.scss';
import PropTypes from 'propTypes';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  render() {
    return (
      <div className={styles.component}>
        {this.props.title}
      </div>
    )
  }
}

export default Card;