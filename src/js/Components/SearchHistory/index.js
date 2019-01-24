import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store){
    return {
        searchedCities: store.search.lineItems
    };
}

export default connect(mapStoreToProps)(SearchHistory);