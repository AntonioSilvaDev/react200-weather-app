import { combineReducers } from 'redux';
import selectedReducer from './Components/SelectedCities/selectedReducer';

const rootReducer = combineReducers({
// add reducers
    search: selectedReducer
});

export default rootReducer;
