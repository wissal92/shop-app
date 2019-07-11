import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
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

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: '', password: ''})
        } catch(err) {
           console.log(err)
        }
    }

    render(){
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
                      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
               </form>
            </div>
        )
    }
}

export default SignIn;