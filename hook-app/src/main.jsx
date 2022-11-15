import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import SimpleForm from './02-useEffect/SimpleForm'
import { MultipleCustomHook } from './03-multiHook/MultipleCustomHook'
import FocusScreen from './04-useRef/FocusScreen'
import HooksApp from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <HooksApp />
  //   <CounterApp /> 
  //   <SimpleForm /> 
  //   <MultipleCustomHook />
  <FocusScreen />
  // </React.StrictMode>
)
