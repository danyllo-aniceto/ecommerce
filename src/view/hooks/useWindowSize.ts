'use client';

import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const useHookReact = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [handleSize]);

  useHookReact(() => {
    handleSize();
  }, [handleSize]);

  return {
    width: size.width,
    height: size.height,
    webMobile: size.width <= 328,
    isMobile: size.width > 328 && size.width <= 720,
    webContent: size.width > 720 && size.width <= 1080,
  };
}
