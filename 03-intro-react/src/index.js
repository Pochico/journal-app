import React from "react";
import ReactDOM from "react-dom/client";
// import FirstComponent from "./FirstComponent";
import CounterApp from "./CounterApp";

import "./index.css";

// Selecciona un elemento del DOM y lo establece como raíz
const root = ReactDOM.createRoot(document.querySelector("#root"));

// Renderiza un componente dentro del root creado anteriormente
// root.render(<FirstComponent nombre="Julen" id={141424314} />);
root.render(<CounterApp value={100} />);
