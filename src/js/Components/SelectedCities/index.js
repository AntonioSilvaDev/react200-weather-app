import { connect } from 'react-redux';
import SelectedCities from './SelectedCities';

function mapStoreToProps(store){
    return {
        city: store.search.city,
        //date: store.search.date,
        lineItems: store.search.lineItems
    };
}

export default connect(mapStoreToProps)(SelectedCities);