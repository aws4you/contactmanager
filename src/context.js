import React, {Component} from 'react';
import {api} from "./components/Settings";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'CONTACT_DELETE':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'CONTACT_ADD':
            return {
                ...state,
                contacts: [ action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        axios(api("/contactmanager/contacts/"))
            .then(res => this.setState({
                contacts: res.data
            }))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;

