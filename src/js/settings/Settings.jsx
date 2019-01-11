import React from "react";
import './settings.less';
import {languages} from "../../constants/languages";
import ContextConfig from '../context/context.jsx';
import {localization} from "../../constants/localization";
import PropTypes from "prop-types";

export default class Settings extends React.Component {
    static contextType = ContextConfig;

    static propTypes = {
        isLogin: PropTypes.bool.isRequired
    };

    changeLang = (e) => {
        this.context.setLanguage(e.target.value);
    };

    handleChangeShowHints = () => {
        this.context.toggleShowHints();
    };

    render() {
        const lang = this.context.language;
        let showHintsDisabled = !this.props.isLogin;
        return (
            <div className="settings">
                <div className={"settings__language"}>
                    <label>{localization[lang].chooseLanguage}</label>
                    <select className={"settings__lang-selector"} defaultValue={lang} onChange={this.changeLang}>
                        <option value={languages.ru}>{localization[lang].langRu}</option>
                        <option value={languages.en}>{localization[lang].langEn}</option>
                    </select>
                </div>
                <div className={"settings__checkbox-hints"}>
                    <input type="checkbox" onChange={this.handleChangeShowHints} disabled={showHintsDisabled} checked={this.context.showHints}/>
                    <label> {localization[lang].settingsShowHints}</label>
                </div>
            </div>
        );
    }
};