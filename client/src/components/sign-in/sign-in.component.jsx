import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const handleChange = e =>{
       setCredentials({...userCredentials, [e.target.name]: e.target.value})
    }
    
    const {email, password} = userCredentials;

    const handleSubmit = async e =>{
        e.preventDefault();
        emailSignInStart(email, password)
    }

   return(
        <div className='sign-in'>
            <h2>I Already Have An Account</h2>
           <span>Sign In With Your Email And Password</span>
          <form onSubmit={handleSubmit}>
              <FormInput
                    type='email' 
                    name='email'
                    label='email'
                    value={email} 
                    handleChange={handleChange} 
                    required
               />
              <FormInput
                    type='password' 
                    name='password' 
                    label='password'
                    value={password} 
                    handleChange={handleChange} 
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

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);