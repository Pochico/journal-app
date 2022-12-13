import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Test MainApp', () => {
    test('should show HomePage component', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeTruthy();
    });

    test('should show LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Login')).toBeTruthy();
    });
});
