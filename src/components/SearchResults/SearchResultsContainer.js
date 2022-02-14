import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const cardId = props.match.params.cardId;

  return {
    cards: getCardsForSearchResults(state, cardId),
  };
};

export default connect(mapStateToProps)(SearchResults);