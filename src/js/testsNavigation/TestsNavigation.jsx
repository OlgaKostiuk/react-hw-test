import React from 'react';
import PropTypes from 'prop-types';
import './testsNavigation.less';
import ContextConfig from '../context/context.jsx';
import {localization} from "../../constants/localization";

export default class TestsNavigation extends React.Component {
    static contextType = ContextConfig;

    static propTypes = {
        tests: PropTypes.array.isRequired,
        currentTestIndex: PropTypes.number.isRequired,
        callbackCurrentTestIndexChanged: PropTypes.func,
        callbackCompleteTest: PropTypes.func
    };

    state = {
        currentTestIndex: this.props.currentTestIndex
    };

    handleItemClicked = (event) => {
        let index = parseInt(event.target.value);
        this.setState(() => (
            {currentTestIndex: index}
        ));
        this.props.callbackCurrentTestIndexChanged && this.props.callbackCurrentTestIndexChanged(index);
    };

    handleCompleteTestClicked = () => {
        this.props.callbackCompleteTest && this.props.callbackCompleteTest();
    };

    countAnsweredTests = () => {
        const {tests} = this.props;
        let count = 0;
        tests.forEach(test => {if(test.selectedOption) count++});
        return count;
    };

    render() {
        const lang = this.context.language;
        const {tests} = this.props;
        const {currentTestIndex} = this.state;

        return (
            <>
                <div className={"test-navigation-container"}>
                    {tests.map((test, index) => (
                        <button type={"button"}
                                key={index}
                                value={index}
                                className={"test-navigation-container__number " + (index === currentTestIndex ? "active" : "")}
                                onClick={this.handleItemClicked}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <div className={"status-bar"}>
                    <div className={"status-bar__status"}>{this.countAnsweredTests()} / {tests.length}</div>
                    <button
                        className={"status-bar__check-btn " + (this.countAnsweredTests() < tests.length ? "not-ready" : "ready")}
                        onClick={this.handleCompleteTestClicked}
                    >
                        {localization[lang].completeTestBtn}
                    </button>
                </div>
            </>
        );
    }
}