import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigator.less';
import PropTypes from "prop-types";
import ContextConfig from '../context/context.jsx';
import {localization} from "../../constants/localization";
import Modal from "../libraryComponents/modal/Modal.jsx";
import Settings from "../settings/Settings.jsx";

export default class Navigator extends React.Component {
    static contextType = ContextConfig;

    state = {
        isSettingsModalOpen: false
    };

    static propTypes = {
        isLogin: PropTypes.bool.isRequired,
        callbackLogout: PropTypes.func.isRequired,
        username: PropTypes.string,
    };

    toggleModalWindow = () => {
        this.setState(prevState => ({ isSettingsModalOpen: !prevState.isSettingsModalOpen }));
    };

    render() {
        const lang = this.context.language;
        const { isLogin, callbackLogout, username } = this.props;

        return (
            <div className='navigator'>
                <div className='nav-links navigator__nav-links'>
                    {/*<NavLink className='nav-links__link' to={'/'}>Home</NavLink>*/}
                    {!isLogin ? <NavLink className='nav-links__link' to={'/login'}>{localization[lang].login}</NavLink> :
                        <><span>{localization[lang].hi} {username}</span><a className='nav-links__link' onClick={callbackLogout} >{localization[lang].logout}</a></>
                    }
                    <a className='nav-links__link' onClick={this.toggleModalWindow}>{localization[lang].settings}</a>
                </div>
               <div className='navigator__stub'/>
                {this.state.isSettingsModalOpen &&
                <Modal onClose={this.toggleModalWindow} closeButtonName={localization[lang].closeBtn}>
                    <Settings isLogin={isLogin} />
                </Modal>}
            </div>
        );
    }
}
