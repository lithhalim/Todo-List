import React, { StrictMode } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from './Header/header';
import Form from "./Form/form";
import Output from './Outpot/output';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import {Color_Provider} from './context-api/change-theme';


import "./style/style.scss"

function App() {
  return (

    <Color_Provider>
        <Provider store={store}>
            <StrictMode>
                <Header/>
                    <div className="container-icon" >
                        <Form/>
                        <Output/>
                    </div>
            </StrictMode>
        </Provider>
    </Color_Provider>
  )
}

export default App
