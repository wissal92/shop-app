import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {email: '', password: ''}
    }

    handleChange = e =>{
       this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const {email, password} = this.state;
        this.props.emailSignInStart(email, password)
    }

    render(){
        const {googleSignInStart} = this.props;
        return(
            <div className='sign-in'>
               <h2>I Already Have An Account</h2>
               <span>Sign In With Your Email And Password</span>
               <form onSubmit={this.handleSubmit}>
                  <FormInput
                    type='email' 
                    name='email'
                    label='email'
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    required
                   />
                  <FormInput
                    type='password' 
                    name='password' 
                    label='password'
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    required
                    />
                    <div className='buttons'>
                      <CustomButton type='submit'>Sign In</CustomButton>
                      <CustomButton type='submit' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
               </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);