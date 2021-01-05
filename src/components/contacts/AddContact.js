import React, {Component} from 'react';
import {Consumer} from "../../context";
import { v4 } from 'uuid';

class AddContact extends Component {
    state = {
        name: '', email: '', phone: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e, dispatch) => {
        e.preventDefault();
        dispatch({type: 'CONTACT_ADD', payload: {id: v4(), ...this.state} })
        this.setState({name: '', email: '', phone: ''});
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>{value=>{
                return (
                    <div className={'card mb-3'}>
                        <div className="card-header">Add contact</div>
                        <div className="card-body">
                            <form onSubmit={(e) => this.onSubmit(e, value.dispatch)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder={'Enter name...'} name={'name'}
                                           value={name} onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control form-control-lg"
                                           placeholder={'Enter email...'} name={'email'}
                                           value={email} onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder={'Enter phone...'} name={'phone'}
                                           value={phone} onChange={this.onChange}
                                    />
                                </div>
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