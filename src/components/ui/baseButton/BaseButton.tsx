import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  variant: ButtonVariants;
};

type ButtonVariants = 'primary' | 'secondary' | 'alternate';

const getvariants = (variant: ButtonVariants) => {
  if (variant === 'primary') {
    return 'bg-space_green text-white border-0';
  }
  if (variant === 'secondary') {
    return 'bg-white text-black border-[#2E332E4D]';
  }
  if (variant === 'alternate') {
    return 'bg-[#CEE7CF] text-space_green border-space_green';
  }
};

export default function BaseButton({
  children,
  onClick,
  className,
  variant,
}: ButtonProps) {
  return (
    <button
      className={`rounded-md flex items-center justify-center gap-2 border w-fit text-base font-semibold py-4 px-4 ${className} ${getvariants(
        variant
      )}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
// function variant(variant: any) {
//     throw new Error('Function not implemented.');
// }
