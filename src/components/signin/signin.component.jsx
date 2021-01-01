import React from 'react'

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
                <h1>Sign In</h1>
                <span>Sign in with your email and password</span>
                <input name='email' type='email' onChange={this.handleChange} value={this.state.email} required></input>
                <label>Email</label>
                <input name='password' type='password' onChange={this.handleChange} value={this.state.password} required></input>
                <label>Password</label>
                <input type='submit' value='Submit Form'/>
            </form>
        </div>)
    }
}

export default SignIn;