import { useCallback, useRef } from 'react';

type Fn = (...args: any[]) => any;

interface EnhancedCallbackHook {
  <F extends Fn>(fn: F): (...args: Parameters<F>) => ReturnType<F>;
}

export const useEnhancedCallback: EnhancedCallbackHook = <F extends Fn>(fn: F) => {
  const callbackRef = useRef(fn);
  callbackRef.current = fn;

  return useCallback((...args: Parameters<F>) => callbackRef.current(...args), []);
};

export default useEnhancedCallback;
