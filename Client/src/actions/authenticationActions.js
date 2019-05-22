/****************************************************************************
 * 
 * Purpose : To create actions
 * 
 * @description
 * @file : authenticationActions.js
 * @author : Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 ****************************************************************************/
import * as types from './index';

export const registerUserAction = (user) => {
  console.log(user);
  return {
    type: types.REGISTER_USER,
    payload: user
  }
};
export const loginAction = (data) => {
  console.log(data);
  return {
    type: types.LOGIN_USER,
    payload: data
  }
}