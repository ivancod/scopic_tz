import { combineReducers } from 'redux';
import ListRedicer from './listReduser';

const AllReducers = combineReducers({
    list: ListRedicer
});

export default AllReducers;