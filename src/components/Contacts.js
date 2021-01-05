import React, {Component} from 'react';
import Contact from "./Contact";

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Karen",
                email: "karen@gmail.com",
                phone: "555-555-11111"
            },
            {
                id: 3,
                name: "Henry",
                email: "henry@gmail.com",
                phone: "555-555-2222"
            }
        ]
    }

    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
                { contacts.map(c => (
                    <Contact key={c.id} contact={c} deleteClickHandler={() => this.deleteContact(c.id)} />
                )) }
            </React.Fragment>
        );
    }

    deleteContact = (id) => {
        console.log("Deleting the contact: " + id);
        const { contacts } = this.state;

        this.setState({contacts: contacts.filter(c => c.id !== id)});
    }
}

export default Contacts;