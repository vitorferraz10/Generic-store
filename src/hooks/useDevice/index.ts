import { useEffect, useState } from 'react';

export const enum SizeScreens {
  desktop = 1024,
}

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < SizeScreens.desktop) {
      setMobile(true);
      return;
    }
    setMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};
