import { combineReducers } from 'redux';
import LibraryReducer from './LIbraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});
