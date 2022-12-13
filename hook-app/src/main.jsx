import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MainApp } from './09-useContext/MainApp';
// import { TodoApp } from './08-useReducer/TodoApp';
// import CallbackHook from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { Padre } from './07-tareaMemo/Padre';
// import CounterApp from './01-useState/CounterApp';
// import SimpleForm from './02-useEffect/SimpleForm';
// import { MultipleCustomHook } from './03-multiHook/MultipleCustomHook';
// import FocusScreen from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import HooksApp from './HooksApp';
// import './08-useReducer/intro-reducer';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
        <MainApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>
);
