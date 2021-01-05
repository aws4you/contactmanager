import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import React from "react";
import {Provider} from "./context";
import AddContact from "./components/contacts/AddContact";


function App() {
    return (
        <Provider>
            <div className="App">
                <Header/>
                <div className="container">
                    <AddContact/>
                    <Contacts/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
