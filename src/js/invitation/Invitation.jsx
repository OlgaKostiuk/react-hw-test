import React from 'react';
import './invitation.less';
import PropTypes from "prop-types";
import Modal from '../libraryComponents/modal/Modal.jsx';
import ContextConfig from '../context/context.jsx';
import {localization} from "../../constants/localization";

export default class Invitation extends React.Component {
    static contextType = ContextConfig;

    state = {
        isAnonymous: false,
        isModalOpen: false
    };

    static propTypes = {
        isLogin: PropTypes.bool.isRequired,
        callbackStartTestClicked: PropTypes.func,
        callbackStayAnonymousChanged: PropTypes.func
    };

    handleStartTest = () => {
        this.props.callbackStartTestClicked && this.props.callbackStartTestClicked();
    };

    handleChangeStayAnonymous = () => {
        let openModal = !this.state.isAnonymous;
        this.setState(prevState => ({ isAnonymous: !prevState.isAnonymous, isModalOpen: openModal }));
        this.props.callbackStayAnonymousChanged && this.props.callbackStayAnonymousChanged();
    };

    toggleModalWindow = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    };

    render() {
        const lang = this.context.language;
        const {isLogin} = this.props;
        const {isAnonymous, isModalOpen} = this.state;
        let enabledCheckbox = isLogin || isAnonymous;

        return (
            <div className={"invitation-container"}>
                <div className={"invitation-container__line"}>{localization[lang].invitationQuestion}</div>
                { !isLogin &&
                    <div className={"invitation-container__line"}>
                        <input type="checkbox" onChange={this.handleChangeStayAnonymous}/>
                        <label> {localization[lang].invitationCheckbox}</label>
                    </div>
                }
                {isModalOpen &&
                <Modal onClose={this.toggleModalWindow} closeButtonName={localization[lang].closeBtn}>
                    <p>{localization[lang].invitationWarning}</p>
                </Modal>}
                <button
                    disabled={!enabledCheckbox}
                    className={"invitation-container__button" + (!enabledCheckbox ? "--disabled" : "")}
                    onClick={this.handleStartTest}>
                    {localization[lang].startTestBtn}
                </button>
            </div>
        );
    }
}
