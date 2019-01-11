import React from 'react';
import PropTypes from 'prop-types';
import './testResult.less';
import ContextConfig from '../context/context.jsx';
import {localization} from "../../constants/localization";

export default class TestResult extends React.Component {
    static contextType = ContextConfig;

    static propTypes = {
        tests: PropTypes.array.isRequired,
        callbackStartTestAgain: PropTypes.func,
    };

    countTestResult = () => {
        const {tests} = this.props;
        let countCorrectAnswers = 0;
        tests.forEach(test => {
            if (test.selectedOption === test.correctAnswer) countCorrectAnswers++
        });
        return countCorrectAnswers / tests.length * 100;
    };

    handleStartTestAgain = () => {
        this.props.callbackStartTestAgain && this.props.callbackStartTestAgain();
    };

    render() {
        const lang = this.context.language;
        return (
            <div className={"test-result"}>
                <p className={"test-result__percents"}>{localization[lang].yourResult} {this.countTestResult()}%</p>
                <button
                    className={"invitation-container__button"}
                    onClick={this.handleStartTestAgain}>
                    {localization[lang].startTestBtn}
                </button>
            </div>
        );
    }
}