import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";
import {api} from "../Settings";

class EditContact extends Component {
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

        const contact = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }

        // axios.put(api(`/contactmanager/contacts/`), contact)
        //     .then(res => {
        //         dispatch({type: 'CONTACT_ADD', payload: res.data})
        //         this.setState({name: '', email: '', phone: '', errors: {}});
        //         this.props.history.push("/");
        //     })
        //     .catch(err => {
        //         this.setState({ errors: { ...err.response.data }})
        //     })
        // ;
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(api(`/contactmanager/contacts/${id}/`));
        this.setState({name: res.data.name, email: res.data.email, phone: res.data.phone});
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>{value => {
                return (
                    <div className={'card mb-3'}>
                        <div className="card-header">Update contact</div>
                        <div className="card-body">
                            <form onSubmit={(e) => this.onSubmit(e, value.dispatch)}>
                                <TextInputGroup label={"Name"} onChange={this.onChange} value={name}
                                                placeholder={"Enter name..."} name={"name"} error={errors.name}/>
                                <TextInputGroup label={"Email"} onChange={this.onChange} value={email} type={"email"}
                                                placeholder={"Enter email..."} name={"email"} error={errors.email}/>
                                <TextInputGroup label={"Phone"} onChange={this.onChange} value={phone}
                                                placeholder={"Enter phone..."} name={"phone"} error={errors.phone}/>
                                <input type="submit" value={"Update contact"} className={'btn btn-light btn-block'}/>
                            </form>
                        </div>
                    </div>
                );
            }}

            </Consumer>
        );
    }
}

export default EditContact;