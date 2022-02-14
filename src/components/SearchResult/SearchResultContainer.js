import { connect } from 'react-redux';
import { getCardsForSearchResult } from '../../redux/cardsRedux';
import SearchResult from './SearchResult';

const mapStateToProps = (state, props) => {
  const cardId = props.match.params.cardId;

  return {
    cards: getCardsForSearchResult(state, cardId),
  };
};

export default connect(mapStateToProps)(SearchResult);