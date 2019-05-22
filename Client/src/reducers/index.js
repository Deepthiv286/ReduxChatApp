/****************************************************************************
 * 
 * Purpose : To combine all the reducers
 * 
 * @description
 * @file : index.js
 * @author : Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 ****************************************************************************/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
const rootReducer = combineReducers({
    simpleReducer
});

export default rootReducer;