import { TextButton } from '../uiKit/Button/Button';

export default function OpenCart({
  quantity,
  onClick
}: {
  quantity?: number;
  onClick: () => void;
}) {
  return (
    <TextButton
      text="Card"
      aria-label="Open cart"
      onClick={onClick}
      endIcon={
        <span className="rounded-full bg-primary-background px-2 py-0.5 text-center font-medium text-neutral-50">
          {quantity ?? 0}
        </span>
      }
    />
  );
}
