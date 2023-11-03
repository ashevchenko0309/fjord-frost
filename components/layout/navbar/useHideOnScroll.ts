'use client';
import { useEffect } from 'react';

const useHideOnScroll = (close: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      close();
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useHideOnScroll;
