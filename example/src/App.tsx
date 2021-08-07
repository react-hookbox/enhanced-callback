import { useState } from 'react';
import useEnhancedCallback from '@react-hookbox/enhanced-callback';

const AppExample = () => {
  const [num, setNum] = useState(1);

  const adder = useEnhancedCallback((prev: number) => prev + 1);

  const logNum = useEnhancedCallback((text: string, increase = true) => {
    // eslint-disable-next-line no-console
    console.log(text, num);
    if (increase) {
      setNum(adder);
    }
  });

  logNum(`RENDERING: expected ${num} received`, false);

  return (
    <div>
      <h1>@react-hookbox/enhanced-callback example</h1>

      <button
        type="button"
        onClick={() => logNum(`CLICK: expected ${num} received`)}
      >
        change num
      </button>
    </div>
  );
};

export default AppExample;
