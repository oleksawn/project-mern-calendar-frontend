import { useLayoutEffect, useState } from 'react';

export default function useResizeWindow() {
  const [windowSize, setWindowSize] = useState([0, 0]);
  const [windowWidth] = windowSize;
  const SMALL_WINDOW = windowWidth < 800 ? true : false;
  const MEDIUM_WINDOW = windowWidth < 1200 && windowWidth >= 800 ? true : false;
  const LARGE_WINDOW = windowWidth < 1600 && windowWidth >= 1200 ? true : false;
  const EXTRA_WINDOW = windowWidth >= 1600 ? true : false;

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize); // when destroy
  }, []);

  return [
    SMALL_WINDOW,
    MEDIUM_WINDOW,
    LARGE_WINDOW,
    EXTRA_WINDOW,
    window.innerHeight,
  ];
}
