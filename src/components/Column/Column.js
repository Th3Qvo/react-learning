/** w kazdym pliku react trzeba importować bibliotekę react */
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';


class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }



  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}> {this.props.title} </h3>
        <div>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key}{...cardProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }
}

export default Column;