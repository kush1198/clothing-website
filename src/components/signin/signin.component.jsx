import React from 'react'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= (event) => {
        event.preventDefault()

        this.setState((prevState,prevProps) => ({email: '', password:''}))
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return (<div className='sign-in'>
            <form onSubmit={this.handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label="email" required/>
                
                <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label="password" required/>
                
                <CustomButton type='submit'> Sign In </CustomButton>
            </form>
        </div>)
    }
}

export default SignIn;