import React, { StrictMode } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from './Header/header';
import Form from "./Form/form";
import Output from './Outpot/output';
import { store } from './redux/store'
import { Provider } from 'react-redux'



import "./style/style.scss"

function App() {
  return (
    <Provider store={store}>
        <StrictMode>
            <Header/>
                <div className="container-icon" >
                    <Form/>
                    <Output/>
                </div>
        </StrictMode>
    </Provider>
  )
}

export default App
