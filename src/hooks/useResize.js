import { useEffect } from 'react';
import { useLayoutEffect, useState } from 'react';

export default function useResize(refs) {
  const [size, setSize] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [windowWidth] = size;
  const SMALL_WINDOW = windowWidth < 900 ? true : false;
  const MEDIUM_WINDOW = windowWidth < 1400 && windowWidth >= 900 ? true : false;
  const LARGE_WINDOW = windowWidth >= 1400 ? true : false;

  useLayoutEffect(() => {
    function handleResize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize); // when destroy
  }, []);

  
  return {
    window: [SMALL_WINDOW, MEDIUM_WINDOW, LARGE_WINDOW, window.innerHeight],
  };
}
