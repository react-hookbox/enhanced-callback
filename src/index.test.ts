import { renderHook } from '@testing-library/react-hooks';
import useEnhancedCallback from './index';

describe('@react-hookbox/enhanced-callback', () => {
  it('should return a function', () => {
    const { result } = renderHook((fn) => useEnhancedCallback(fn), {
      initialProps: (num: number) => num + 4,
    });
    expect(typeof result.current).toBe('function');
  });

  it('should return a static shell for the function passed', () => {
    const { result, rerender } = renderHook((fn) => useEnhancedCallback(fn), {
      initialProps: (num: number) => num + 4,
    });
    const oldFunction = result.current;

    rerender((num: number) => num + 8);
    expect(result.current).toEqual(oldFunction);
  });

  it('should update function after effect-ive time', () => {
    const { result, rerender } = renderHook((fn) => useEnhancedCallback(fn), {
      initialProps: (num: number) => num + 4,
    });
    expect(result.current(6)).toEqual(10);

    // todo: understand how can we check it before and after use effect
    rerender((num: number) => num + 8);
    expect(result.current(12)).toEqual(20);
  });
});
