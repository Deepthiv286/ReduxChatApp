/****************************************************************************
 * 
 * Purpose : To design a login page
 * 
 * @description
 * @file : Login.jsx
 * @author : Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 07/05/2019
 * 
 ****************************************************************************/
import React, { Component } from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { loginAction } from '../actions/authenticationActions';
/**
 * import required files
 */
class Login extends Component {
    /**
     * to submit login form
     */
    handleSubmit = (event) => {
        try {
            event.preventDefault();
            let email = event.target.email.value;
            let password = event.target.password.value;
            const data = {
                email, password
            }
            this.props.loginAction(data);
            this.props.history.push('/dashboard');
        } catch (error) {
            console.log(error.message);
        }
    }
    /**
     * to go to registration page
     */
    handleRegister = () => {
        try {
            this.props.history.push('/register');
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
            <Card>
                <h1>CHAT APP</h1>
                <div>Sign in</div>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div>
                        <TextField
                            type='email'
                            className='emailInput'
                            name='email'
                            label='Email'
                            variant='outlined'
                        />
                    </div>
                    <div>
                        <TextField
                            type='password'
                            name="password"
                            variant="outlined"
                            label="Password"
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            variant='contained'
                            size='small'
                            color='primary'
                        >
                            Submit
                    </Button>
                    </div>
                </form>
                <Button
                    size="small"
                    color="primary"
                    onClick={this.handleRegister}
                >
                    Register
                </Button>
            </Card>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    loginAction: (data) => dispatch(loginAction(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);