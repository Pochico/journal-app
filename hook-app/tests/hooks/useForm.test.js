import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('useForm Tests', () => {
    const initialForm = {
        name: 'Julen',
        email: 'julencas.gomez@gmail.com',
    };

    test('should return initial form values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Should change form name', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newValue = 'Romero';

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe('Romero');
    });

    test('Should reset form values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const newValue = 'Romero';

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
