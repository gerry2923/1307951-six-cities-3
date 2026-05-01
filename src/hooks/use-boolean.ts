import { useState } from 'react';

const useBoolean = (initialValue = false) => {
  const [isOn, setIsOn] = useState(initialValue);

  return {
    isOn,
    off: () => setIsOn(false),
    on: () => setIsOn(true),
    toggle: () => setIsOn((prev) => !prev),
  };
};

export { useBoolean };
