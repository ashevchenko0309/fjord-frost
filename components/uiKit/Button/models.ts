import { MouseEventHandler } from 'react';

export type ButtonVariant = 'primary' | 'tonal';
export type ButtonSize = 'small' | 'normal' | 'big';

export interface ButtonProps {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  text?: string | number;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface IconButtonProps extends Omit<ButtonProps, 'text' | 'startIcon' | 'endIcon'> {
  children: JSX.Element;
}
