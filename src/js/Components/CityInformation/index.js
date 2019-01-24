import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
    return {
        cityInfo: store.search.cityInfo
    };
}

export default connect(mapStoreToProps)(CityInformation);