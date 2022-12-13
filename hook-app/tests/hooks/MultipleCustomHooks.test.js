import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-multiHook/MultipleCustomHook';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');

describe('Testing MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();
    // TODO: Fix mockReturnValue is not a function.
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHook />);

        // expect(screen.getByText('Loading...'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Should show a Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Julen', quote: 'Hola' }],
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHook data-testid="component" />);
        expect(screen.getByText('Hola'));
    });

    test('should call increment function', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Julen', quote: 'Soy INDUSTRIBLE' }],
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHook />);

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });
});
