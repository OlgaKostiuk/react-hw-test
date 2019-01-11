import React from 'react';
import PropTypes from 'prop-types';
import './login.less';
import ContextConfig from '../context/context.jsx';
import {localization} from "../../constants/localization";

export default class Login extends React.Component {
    static contextType = ContextConfig;

    state = {
        username: '',
        password: ''
    };

    static propTypes = {
        callbackLogin: PropTypes.func.isRequired
    };

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChangeUsername = event => {
        const value = event.target.value;
        this.setState( () => (
            {username: value}
            ));
    };

    handleChangePassword = event => {
        const value = event.target.value;
        this.setState( () => (
            {password: value}
        ));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.callbackLogin(this.state.username, this.state.password);
    };

    render() {
        const lang = this.context.language;
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                    <div className={"login-form__item"}>
                        <label>{localization[lang].username} </label>
                        <input
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChangeUsername}
                        />
                    </div>
                    <div className={"login-form__item"}>
                        <label>{localization[lang].password} </label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                        />
                    </div>
                    <button
                        className={"login-form__item login-form__button"}
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        {localization[lang].loginBtn}
                    </button>
                </form>
            </div>
        );
    }
}
