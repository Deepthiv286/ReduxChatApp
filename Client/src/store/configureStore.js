/****************************************************************************
 * 
 * Purpose : To create a store that holds the state
 * 
 * @description
 * @file : configureStore.js
 * @author : Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 ****************************************************************************/
import { createStore } from 'redux';

import rootReducer from '../reducers';

const configureStore = () => {
  return {
    ...createStore(rootReducer)
  }
};

export default configureStore;