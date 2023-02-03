import { useCallback, useState } from 'react';

export const useOnOff = (initialState: boolean) => {
  const [isOn, setIsOn] = useState(initialState);
  
  const turnOn = useCallback(() => {
    setIsOn(true);
  },[]);

  const turnOff = useCallback(() => {
    setIsOn(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  return { isOn, toggle, turnOn, turnOff };
};
