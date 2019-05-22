/****************************************************************************
 * 
 * Purpose : To design a registration page
 * 
 * @description
 * @file : Registration.jsx
 * @author : Deepthi V <deepthiv286@gmail.com>
 * @version : 1.0
 * @since : 08/05/2019
 * 
 ****************************************************************************/
import React, { Component } from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { registerUserAction } from '../actions/authenticationActions';
/**
 * import required files
 */
class Registration extends Component {
    /**
     * to submit the registration form
     */
    handleSubmit = (event) => {
        try {
            event.preventDefault();
            let firstName = event.target.firstName.value;
            let lastName = event.target.lastName.value;
            let email = event.target.email.value;
            let password = event.target.password.value;
            let confirmPassword = event.target.confirmPassword.value;
            const data = {
                firstName, lastName, email, password, confirmPassword
            }
            this.props.registerUserAction(data);
            this.props.history.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }
    /**
     * to go to login page
     */
    handleLogin = () => {
        try {
            this.props.history.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
            <div>
                <Card>
                    <h1>CHAT APP</h1>
                    <div>Create Account</div>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <TextField
                            type='email'
                            className='firstNameInput'
                            name='firstName'
                            label='First Name'
                            variant='outlined'
                        />
                        <TextField
                            type='text'
                            className='lastNameInput'
                            name='lastName'
                            label='Last Name'
                            variant='outlined'
                        />
                        <TextField
                            type='text'
                            className='emailInput'
                            name='email'
                            label='Email-id'
                            variant='outlined'
                        />
                        <TextField
                            type='password'
                            className='passwordInput'
                            name='password'
                            label='Password'
                            variant='outlined'
                        />
                        <TextField
                            type='password'
                            className='confirmPasswordInput'
                            name='confirmPassword'
                            label='Confirm-Password'
                            variant='outlined'
                        />
                        <Button
                            type="submit"
                            variant='contained'
                            size='small'
                            color='primary'
                        >
                            Submit
                        </Button>
                    </form>
                    Already have an account?
                    <Button
                        size="small"
                        color="primary"
                        onClick={this.handleLogin}
                    >
                        Sign in instead
                    </Button>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    registerUserAction: (data) => dispatch(registerUserAction(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Registration);