import { userRegister, userLogin } from "../services/userService";

export default (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      console.log(action.payload);
      userRegister(action.payload).then(response => {
        console.log("response is ", response);
      }).catch(err => {
        console.log(err)
      })
      return {
        result: action.payload
      }
    case 'LOGIN_USER':
      console.log(action.payload);
      userLogin(action.payload).then(response => {
        console.log("response is ", response);
      }).catch(err => {
        console.log(err)
      })
      return {
        result: action.payload
      }
    default:
      return state
  }
}
