import React, {Component} from 'react';
import {Consumer} from "../../context";
import {v4} from 'uuid';
import TextInputGroup from "./TextInputGroup";

class AddContact extends Component {
    state = {
        name: '', email: '', phone: '', errors: {}
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e, dispatch) => {
        e.preventDefault();

        const errors = {}
        if (this.state.name === '')
            errors.name = 'The name is required';
        if (this.state.email === '')
            errors.email = 'The email is required';
        if (this.state.phone === '')
            errors.phone = 'The phone is required';

        if (Object.keys(errors).length !== 0) {
            this.setState({errors: errors});
            return;
        }

        dispatch({type: 'CONTACT_ADD', payload: {id: v4(), ...this.state}})
        this.setState({name: '', email: '', phone: '', errors: {}});
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>{value => {
                return (
                    <div className={'card mb-3'}>
                        <div className="card-header">Add contact</div>
                        <div className="card-body">
                            <form onSubmit={(e) => this.onSubmit(e, value.dispatch)}>
                                <TextInputGroup label={"Name"} onChange={this.onChange} value={name}
                                                placeholder={"Enter name..."} name={"name"} error={errors.name}/>
                                <TextInputGroup label={"Email"} onChange={this.onChange} value={email} type={"email"}
                                                placeholder={"Enter email..."} name={"email"} error={errors.email}/>
                                <TextInputGroup label={"Phone"} onChange={this.onChange} value={phone}
                                                placeholder={"Enter phone..."} name={"phone"} error={errors.phone}/>
                                <input type="submit" value={"Add contact"} className={'btn btn-light btn-block'}/>
                            </form>
                        </div>
                    </div>
                );
            }}

            </Consumer>
        );
    }
}

export default AddContact;