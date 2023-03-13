import React from 'react';
import Logo from '../../ui/logo/Logo';
import illustration from '../../../assets/svg/illustration.svg';
import eye from '../../../assets/svg/eye.svg';
import FormInput from '../../ui/formElements/formInput/FormInput';
import BaseButton from '../../ui/baseButton/BaseButton';
import google from '../../../assets/svg/google.svg';
import facebook from '../../../assets/svg/facebook.svg';

type Props = {};

function SignUp({}: Props) {
  return (
    <div className="px-5 pt-5 flex">
      <div className="w-[630px]  bg-space_green/[.2]">
        <Logo />
        <img
          src={illustration}
          alt="Illustration"
          className="max-w-[256px] h-[488px] grid place-items-center"
        />
      </div>
      <div className="flex-1">
        <div className="justify-end flex gap-2 items-center">
          <p className="text-space_black/[0.9] text-sm font-normal">
            Already have an account?
          </p>
          <BaseButton variant="alternate" onClick={() => console.log('Hello')}>
            Sign in
          </BaseButton>
        </div>
        <div className="mx-[126px]">
          <p className="text-[48px] font-bold text-[#2E332E]">Start Learning</p>
          <p className="mt-5 mb-[38px] text-base font-medium max-w-[431px] text-space_black">
            Learn progressively and build your knowledge bank with space
            platform
          </p>
          <form>
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
            <div className="relative">
              <p className="absolute text-space_black bg-white px-5 top-2/4 right-1/2">
                Or
              </p>
              <hr className="my-9 border border-space_black/[.32] border-solid" />
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
