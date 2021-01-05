import React, {Component} from 'react';
import Contact from "./Contact";
import {Consumer} from "../context";

class Contacts extends Component {
    render() {

        return (
            <Consumer>{value => {
                return (
                    <React.Fragment>
                        {value.contacts.map(c => (
                            <Contact key={c.id} contact={c} />
                        ))}
                    </React.Fragment>
                );
            }}
            </Consumer>
        );
    }
}

export default Contacts;