export const ChevronUp = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.375 15.375L12 8.625L5.625 15.375"
        stroke="#8C8C8B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronDown = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.625 8.625L12 15.375L18.375 8.625"
        stroke="#8C8C8B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
