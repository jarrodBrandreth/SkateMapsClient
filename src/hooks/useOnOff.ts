import { useState } from "react"

export const useOnOff = (initialState:boolean) => {
  const [ isOn, setIsOn] = useState(initialState);

  const turnOn = () => {
    setIsOn(true);
  }

  const turnOff = () => {
    setIsOn(false);
  }

  const toggle = () => {
    setIsOn(!isOn);
  }

  return {isOn,toggle,turnOn,turnOff}
}