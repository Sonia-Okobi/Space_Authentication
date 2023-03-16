import React, { ReactNode } from 'react';
import Logo from '../../ui/logo/Logo';
import illustration from '../../../assets/svg/illustration.svg';
import BaseButton from '../../ui/baseButton/BaseButton';
import FormInput from '../../ui/formElements/formInput/FormInput';
import eye from '../../../assets/svg/eye.svg';
import google from '../../../assets/svg/google.svg';
import facebook from '../../../assets/svg/facebook.svg';

type AuthProps = {
  children: ReactNode;
  title: string;
  description: string;
  button_text: string;
  text: string;
};

function Auth({ children, title, description, button_text, text }: AuthProps) {
  return (
    <div className="flex h-[976px]">
      <div className="w-[630px] flex bg-space_green/[.2] px-5 pt-5">
        <Logo />
        <img
          src={illustration}
          alt="Illustration"
          className="max-w-[256px] flex justify-center items-center"
        />
      </div>
      <div className="flex-1 px-5 pt-5">
        <div className="justify-end flex gap-2 items-center">
          <p className="text-space_black/[0.9] text-sm font-normal">{text}</p>
          <BaseButton variant="alternate" onClick={() => console.log('Hello')}>
            {button_text}
          </BaseButton>
        </div>
        <div className="mx-[126px]">
          <p className="text-[48px] font-bold text-[#2E332E] mt-8">{title}</p>
          <p className="mt-5 mb-[38px] text-base font-medium max-w-[431px] text-space_black">
            {description}
          </p>
          <form>{children}</form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
