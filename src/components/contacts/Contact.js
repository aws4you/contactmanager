import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Consumer} from "../../context";
import axios from "axios";
import {api} from "../Settings";
import {Link} from "react-router-dom";

class Contact extends Component {

    state = {
        showContactInfo: false
    }

    render() {
        const {contact} = this.props;
        const {showContactInfo} = this.state

        const iconStyle = showContactInfo ? "fa-sort-down" : "fa-sort-up";
        return (
            <Consumer>{value => {
                return (
                    <div className={"card card-body mb-3"}>
                        <h4>{contact.name}
                            <i className={"fas " + iconStyle} style={{cursor: 'pointer'}}
                               onClick={this.onShowClick}/>
                            <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}
                               onClick={() => this.onDeleteClick(value, contact)}/>
                            <Link to={`contact/edit/${contact.id}`} >
                                <i className="fas fa-user-edit"
                                   style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}} />
                            </Link>
                        </h4>
                        {
                            showContactInfo ? (
                                <ul className={"list-group"}>
                                    <li className={"list-group-item"}>Email: {contact.email}</li>
                                    <li className={"list-group-item"}>Phone number: {contact.phone}</li>
                                </ul>
                            ) : null
                        }

                    </div>
                );
            }}
            </Consumer>
        );
    }

    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo});
    }

    onDeleteClick = (value, contact) => {
        axios.delete(api(`/contactmanager/contacts/${contact.id}/`))
            .then(res => value.dispatch({type: 'CONTACT_DELETE', payload: contact.id}));
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
