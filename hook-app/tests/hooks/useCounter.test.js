import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('useCounter Tests', () => {
    test('Should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(1);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Should return 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Should return incremented value', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;

        act(() => {
            increment(10);
            increment();
        });

        expect(result.current.counter).toBe(12);
    });

    test('Should return decreased value', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement(10);
            decrement();
        });

        expect(result.current.counter).toBe(89);
    });

    test('Should return initial value', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, increment, reset } = result.current;

        act(() => {
            decrement(10);
            increment(2);
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
});
