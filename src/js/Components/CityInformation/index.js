import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
    return {
        cityInfo: store.search.cityInfo,
        error: store.search.error
    };
}

export default connect(mapStoreToProps)(CityInformation);