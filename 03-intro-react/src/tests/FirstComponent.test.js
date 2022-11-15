/* TESTING DE COMPONENTES DE REACT SIN ENZYME
// Para hacer pruebas con elementos de React, hay que importar React también en los tests
import React from "react";

// Hay que importar render y screen para comprobar que se renderizan bien las cosas
import { render, screen } from "@testing-library/react";
import FirstComponent from "../FirstComponent";

describe("FirstComponent Render test", () => {

    test("should render the salute", () => {

        const saludo = 'Hola, Julen.';

        // Esto renderiza el componente que se le da
        render(<FirstComponent nombre='Julen' />);

        // Esto comprueba que en la pantalla (screen) se encuentran los elementos capturados por texto (getByText)
        expect( screen.getByText(saludo) ).toBeInTheDocument();

    });
});
*/

import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import FirstComponent from '../FirstComponent';



//  Testing de componentes de REACT con Enzyme

describe("FirstComponent Render Test with Enzyme", () => {

    test("should render the salute", () => {

        const name = 'Julen';
        const wrapper = shallow( <FirstComponent nombre={name} /> );

        expect(wrapper).toMatchSnapshot();

    });

    test('should show the id received through props', () => { 
        const id = 1432;

        const wrapper = shallow(<FirstComponent nombre='Julen' id={1432} />);
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe('Tu ID es 1432');

    });

});
