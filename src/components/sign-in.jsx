import React, { Component } from 'react';
import ActionError from './action-error';

export default class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { type, value } = event.target;
        this.setState({ [type]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;
        await this.props.authenticate(email, password);

        if (!this.props.requesting && this.props.success) {
            this.props.redirect('/apps');
        } else {
            this.setState({ password: '' });
        }
    }

    render () {
        return (
            <form id="sign-in" onSubmit={this.handleSubmit}>
                {!this.props.requesting && this.props.error
                    ? <ActionError message={'Authenticaton error, please try again.'} /> : null}
                <input value={this.state.email} onChange={this.handleChange} placeholder="Email address" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <input value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password" />
                <input type="submit" />
            </form>
        );
    }
}