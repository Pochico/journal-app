import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Test HomePage', () => {
    const user = {
        id: 1,
        name: 'Julen',
        age: 27,
    };

    const setUserMock = jest.fn();

    test('should show component with no user', () => {
        render(
            <UserContext.Provider value={{ user: 'null' }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain('null');
        expect(preTag.innerHTML).toContain('null');
    });

    test('should test Set User button', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage setUser={setUserMock} />
            </UserContext.Provider>
        );

        const userButton = screen.getByLabelText('set-user');
        fireEvent.click(userButton);
        expect(userButton.innerHTML).toContain('Log in');
        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith(user);
    });
});
