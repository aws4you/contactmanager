import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Consumer} from "../context";

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
            }
            }
            </Consumer>
        );
    }

    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo});
    }

    onDeleteClick = (value, contact) => {
        value.dispatch({type: 'CONTACT_DELETE', payload: contact.id});
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;