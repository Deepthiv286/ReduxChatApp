import axios from 'axios';
/**
 * 
 * @param {*used to send registered data to server} data 
 */
export function userRegister(data) {
    console.log("DATA IS ",data);
    
    return axios.post('/register', data);
}
/**
 * 
 * @param {*send login data to server} data 
 */
export function userLogin(data) {
    return axios.post('/login', data);
}