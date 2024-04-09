import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import DiceContextProvider from './utils/context/diceContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DiceContextProvider>
  <React.StrictMode>
      <Router>
            <App />
        </Router>
  </React.StrictMode>
  </DiceContextProvider>,
)
