import React from 'react';
import BaseButton from '../../ui/baseButton/BaseButton';
import FormInput from '../../ui/formElements/formInput/FormInput';
import Auth from '../auth/Auth';
import google from '../../../assets/svg/google.svg';
import facebook from '../../../assets/svg/facebook.svg';

type Props = {};

function SignIn({}: Props) {
  return (
    <Auth
      title="Welcome Back"
      description="Enter your login credentials to get started"
      text="Don’t have an account?"
      button_text="Sign up"
    >
      <div className="flex flex-col gap-8">
        <FormInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <FormInput label="Password" placeholder="Enter a strong password" />
      </div>
      <p className="text-base font-medium mt-10 mb-4 text-space_green">
        Forgot your password?{' '}
      </p>
      <BaseButton
        className="w-full"
        variant="primary"
        onClick={() => console.log('Hello')}
      >
        Sign in
      </BaseButton>
      <div className="flex items-center my-6">
        <div className="flex-grow border border-space_black/[.32] border-solid" ></div>
        <p className="text-space_black text-base font-medium flex-shrink mx-5">Or</p>
        <div className="flex-grow border border-space_black/[.32] border-solid" ></div>
      </div>
      <div className="flex gap-5">
        <BaseButton
          className="w-full"
          variant="secondary"
          onClick={() => console.log('Hello')}
        >
          <img src={google} alt="Icon" /> Google
        </BaseButton>
        <BaseButton
          className="w-full"
          variant="primary"
          onClick={() => console.log('Hello')}
        >
          {' '}
          <img src={facebook} alt="Icon" /> Facebook
        </BaseButton>
      </div>
    </Auth>
  );
}

export default SignIn;
