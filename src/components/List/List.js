/** w kazdym pliku react trzeba importować bibliotekę react */
import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p> Interesting things I want to check out! </p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageBGI={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Animals' />
          <Column title='Plants' />
          <Column title='Minerals' />
        </div>
      </section>
    )
  }
}

export default List;
