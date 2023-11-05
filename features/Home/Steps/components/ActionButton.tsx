import {
  // @ts-ignore
  experimental_useFormStatus as useFormStatus
} from 'react-dom';
import { SolidButton } from '../../../../components/uiKit/Button/Button';

const ActionButton = () => {
  const { pending } = useFormStatus();

  return (
    <SolidButton
      aria-label="Try daily care set"
      aria-disabled={pending}
      text="Try daily care set"
      disabled={pending}
      className="w-full justify-center lg:mx-auto lg:w-auto"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
    />
  );
};

export default ActionButton;
