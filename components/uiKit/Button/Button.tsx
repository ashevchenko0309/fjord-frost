import React, { forwardRef, useMemo } from 'react';
import { ButtonProps } from './models';

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ startIcon, endIcon, text, className = '', ...rest }, ref) => {
    return (
      <button
        aria-label={text?.toString() || rest.variant}
        aria-disabled={rest.disabled}
        {...rest}
        ref={ref}
        className={`${className} flex cursor-pointer items-center rounded font-medium transition-all ease-in-out disabled:cursor-not-allowed`}
      >
        {startIcon && <span className="mr-2">{startIcon}</span>}
        {text}
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </button>
    );
  }
);

BaseButton.displayName = 'BaseButton'

export const OutlineButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
  ({ className = '', size = 'normal', ...rest }, ref) => {
    const buttonSizeClassName = useMemo(() => {
      switch (size) {
        case 'small': {
          return 'py-2.5 px-6';
        }
        case 'normal':
        case 'big': {
          return 'py-2.5 px-8';
        }
      }
    }, [size]);

    return (
      <BaseButton
        {...rest}
        ref={ref}
        className={`${className} ${buttonSizeClassName} text-neutral-80 ring-1 ring-primary-main focus-within:bg-primary-surface focus-within:ring-neutral-10 hover:bg-transparent hover:ring-primary-hover focus:bg-primary-surface focus:ring-neutral-10 focus-visible:bg-primary-surface focus-visible:outline-0 focus-visible:ring-neutral-10 active:ring-primary-pressed`}
      />
    );
  }
);

OutlineButton.displayName = 'OutlineButton'

export const SolidButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', size = 'normal', variant, ...rest }, ref) => {
    const buttonSizeClassName = useMemo(() => {
      switch (size) {
        case 'small': {
          return 'py-2.5 px-6';
        }
        case 'normal':
        case 'big': {
          return 'py-2.5 px-8';
        }
      }
    }, [size]);

    const buttonVariantClassName = useMemo(() => {
      switch (variant) {
        case 'tonal':
          return 'bg-primary-surface text-neutral-100 hover:bg-primary-border active:bg-primary-main focus:bg-primary-border focus-visible:bg-primary-border focus-visible:ring-0 focus-visible:ring-offset-0 focus-within:bg-primary-border disabled:bg-neutral-30 disabled:text-neutral-40';
        default:
          return 'bg-neutral-80 text-neutral-10 hover:bg-neutral-80 hover:outline-primary-main hover:ring-1 hover:ring-primary-main focus-visible:outline-0 focus-visible:ring focus-visible:ring-offset-0 focus-visible:ring-offset-primary-focus focus-visible:ring-primary-focus focus:outline-0 focus:ring focus:ring-offset-3 focus:ring-offset-primary-focus focus:ring-primary-focus focus-visible:ring-offset-3 disabled:bg-neutral-30 disabled:text-neutral-40 disabled:hover:ring-0';
      }
    }, [variant]);

    return (
      <BaseButton
        {...rest}
        className={`${className} ${buttonSizeClassName} ${buttonVariantClassName}`}
        ref={ref}
      />
    );
  }
);

SolidButton.displayName = 'SolidButton'

export const TextButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
  ({ className = '', size = 'normal', ...rest }, ref) => {
    const buttonSizeClassName = useMemo(() => {
      switch (size) {
        case 'small': {
          return 'p-1';
        }
        case 'normal': {
          return 'p-1.5';
        }
        case 'big': {
          return 'p-2';
        }
      }
    }, [size]);

    return (
      <BaseButton
        {...rest}
        ref={ref}
        className={`${className} ${buttonSizeClassName} focus:ring-offset-3  focus-visible:ring-offset-3 text-neutral-80 focus:outline-0 focus:ring focus:ring-primary-focus focus:ring-offset-primary-focus focus-visible:outline-0 focus-visible:ring focus-visible:ring-primary-focus focus-visible:ring-offset-0 focus-visible:ring-offset-primary-focus disabled:bg-neutral-30 disabled:text-neutral-40 disabled:hover:ring-0`}
      />
    );
  }
);

TextButton.displayName = 'TextButton'

// export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
//     ({ className = "", size, variant, children, onMiddleMouseClick, ...rest }, ref) => {
//         {
//             const buttonVariantClassName = useMemo(() => {
//                 switch (variant) {
//                     case "error":
//                         return "text-red-500 disabled:text-red-200 hover:bg-red-200";
//                     case "neutral":
//                         return "text-gray-500 disabled:text-gray-200 hover:bg-gray-200";
//                     case "warning":
//                         return "text-yellow-500 disabled:text-yellow-200 hover:bg-yellow-200";
//                     case "transparent":
//                         return "";
//                     default:
//                         return "text-blue-500 disabled:text-blue-200 hover:bg-blue-200";
//                 }
//             }, [variant]);
//
//             const buttonSizeClassName = useMemo(() => {
//                 switch (size) {
//                     case "sm":
//                         return "px-2 py-1";
//                     case "lg":
//                         return "px-6 py-4";
//                     case "thin":
//                         return "p-0";
//                     default:
//                         return "px-3 p-2";
//                 }
//             }, [size]);
//
//             return (
//                 <button
//                     aria-disabled={rest.disabled}
//                     {...rest}
//                     {...(onMiddleMouseClick && { onMouseDown: onMiddleMouseDown(onMiddleMouseClick) })}
//                     className={`${className} ${buttonSizeClassName} ${buttonVariantClassName} transition-all ease-in-out flex items-center`}
//                     ref={ref}
//                 >
//                     {children}
//                 </button>
//             );
//         }
//     }
// );
