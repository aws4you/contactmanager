import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import React from "react";
import {Provider} from "./context";


function App() {
    return (
        <Provider>
            <div className="App">
                <Header/>
                <div className="container">
                    <Contacts/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
