import React from "react";

import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("CounterApp test", () => {
    let wrapper = shallow(<CounterApp />);

    // Esta instrucción le indica que wrapper debería adquirir el valor antes de cada test, así evitamos repetir la asignación del valor dentro de cada test
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test("Should return default prop value (100)", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should return 100 as a default value", () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const element = wrapper.find("p").text();

        expect(element).toBe("100");
    });

    test("should add 1 to the counter", () => {
        wrapper.find("button").at(0).simulate("click");
        const counterText = wrapper.find(".counter").text().trim();

        expect(counterText).toBe("11");
    });

    test("should substract 1 to the counter", () => {

        wrapper.find("button").at(2).simulate("click");
        const counterText = wrapper.find(".counter").text().trim();

        expect(counterText).toBe("9");
    });

    test("should substract 0 to the counter", () => {
        // Añadimos algunos números al contador antes de resetearlo
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");

        // Reseteamos el valor al por defecto (en este caso, al no tener valor se le asigna 0)
        wrapper.find("button").at(1).simulate("click");

        const counterText = wrapper.find(".counter").text().trim();

        expect(counterText).toBe("10");
    });
});
