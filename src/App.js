import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import React from "react";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Contacts />
            </div>
        </div>
    );
}

export default App;
