import React from 'react';
import Logo from '../../ui/logo/Logo';
import illustration from '../../../assets/svg/illustration.svg';
import eye from '../../../assets/svg/eye.svg';
import FormInput from '../../ui/formElements/formInput/FormInput';
import BaseButton from '../../ui/baseButton/BaseButton';
import google from '../../../assets/svg/google.svg';
import facebook from '../../../assets/svg/facebook.svg';
import Auth from '../auth/Auth';

type Props = {};

function SignUp({}: Props) {
  return (
    <Auth
      title="Start Learning"
      description="Learn progressively and build your knowledge bank with
    space platform"
      text="Already have an account?"
      button_text="Sign in"
    >
      <div className="flex flex-col gap-8">
        <div className="flex gap-5">
          <FormInput label="First Name" placeholder="First Name" />
          <FormInput label="Last Name" placeholder="Last Name" />
        </div>
        <FormInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <div className="relative">
          <FormInput
            label="Create a password"
            placeholder="Enter a strong password"
          />
          <button
            className="absolute bottom-0 right-0 pr-5 pb-[18px]"
            type="button"
          >
            <img src={eye} alt="eye" />
          </button>
        </div>
      </div>
      <p className="text-base font-medium mt-10 mb-4 text-space_black">
        By continuing, you agree to out{' '}
        <span className="text-space_green">Terms Of Use</span>, and
        <span className="text-space_green"> Privacy Policy</span>
      </p>
      <BaseButton
        className="w-full"
        variant="primary"
        onClick={() => console.log('Hello')}
      >
        Sign up
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

export default SignUp;
