import React from 'react';
import PropTypes from 'prop-types';
import './home.less';
import TestWrapper from "../testWrapper/TestWrapper.jsx";
import Invitation from "../invitation/Invitation.jsx";

export default class Home extends React.Component {
    state = {
        isAnonymous: false,
        isTestStarted: false
    };

    static propTypes = {
        isLogin: PropTypes.bool.isRequired
    };

    callbackStayAnonymousChanged = () => {
        this.setState((prevState) => ({isAnonymous: !prevState.isAnonymous}));
    };

    callbackStartTestClicked = () => {
        this.setState(() => ({isTestStarted: true}));
    };

    render() {
        const {isAnonymous, isTestStarted} = this.state;
        return (
            isTestStarted && (this.props.isLogin || isAnonymous) ?
                <TestWrapper /> :
                <Invitation
                    isLogin={this.props.isLogin}
                    callbackStayAnonymousChanged={this.callbackStayAnonymousChanged}
                    callbackStartTestClicked={this.callbackStartTestClicked}
                />
        );
    }
}
