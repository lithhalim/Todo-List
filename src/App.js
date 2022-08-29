import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from './Header/header';
import Form from "./Form/form";
import Output from './Outpot/output';
import Login from './login/login';


import { store } from './redux/store'
import { Provider } from 'react-redux'
import {Color_Provider} from './context-api/change-theme';
import { Login_Provider } from './context-api/context-authntication';


import "./style/style.scss"

function App() {
  return (
    <BrowserRouter>
      <Login_Provider>
        <Color_Provider>
            <Provider store={store}>
                  <Routes>
                            <Route path='/home' element={ <><Header/><div className="container-icon"><Form/><Output/></div></>}/>
                            <Route path='/' element={ <><Login/></>}/>
                  </Routes>
            </Provider>
        </Color_Provider>
      </Login_Provider>
    </BrowserRouter>

  )
}

export default App
