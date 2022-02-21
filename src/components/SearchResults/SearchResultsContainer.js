import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const cardId = props.match.params.cardId;
  const fliteredCards = state.cards.filter(card => card.id == cardId);
  const cardsParams = fliteredCards[0] || {};

  return {
    ...cardsParams,
    cards: getCardsForSearchResults(state, cardId),
  };
};

export default connect(mapStateToProps)(SearchResults);