import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            handleChange={this.handleChange}
            type='email'
            required
            name='email'
            required
          />
          <FormInput
            type='password'
            handleChange={this.handleChange}
            label='Password'
            name='password'
            required
          />
          <CustomButton type='submit'>SIGNIN</CustomButton>
          <CustomButton onClick={SignInWithGoogle}>SIGNIN with Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
