import React from "react";
import {testsJson} from "../../constants/tests";
import TestsNavigation from '../testsNavigation/TestsNavigation.jsx'
import Test from '../test/Test.jsx';
import TestResult from "../testResult/TestResult.jsx";
import ContextConfig from '../context/context.jsx';

export default class TestWrapper extends React.Component {
    static contextType = ContextConfig;

    state = {
        tests: JSON.parse(testsJson),
        currentTestIndex: 0,
        isTestCompleted: false
    };

    callbackAnswerChecked = (selectedOption) => {
        for (let lang in this.state.tests) {
            this.state.tests[lang][this.state.currentTestIndex].selectedOption = selectedOption
        }
        this.setState(() => ({tests: this.state.tests}));
    };

    callbackCurrentTestIndexChanged = (index) => {
        this.setState(() => ({currentTestIndex: index}));
    };

    callbackCompleteTest = () => {
        this.setState(() => ({isTestCompleted: true}));
    };

    callbackStartTestAgain = () => {
        this.setState(() => ({isTestCompleted: false, tests: JSON.parse(testsJson), currentTestIndex: 0}));
    };

    render() {
        const lang = this.context.language;
        const {currentTestIndex, isTestCompleted} = this.state;
        const tests = this.state.tests[lang];

        return (
            !isTestCompleted ? (
                <>
                    <TestsNavigation
                        tests={tests}
                        currentTestIndex={currentTestIndex}
                        callbackCurrentTestIndexChanged={this.callbackCurrentTestIndexChanged}
                        callbackCompleteTest={this.callbackCompleteTest}
                    />
                    <Test
                        test={tests[currentTestIndex]}
                        callbackAnswerChecked={this.callbackAnswerChecked}
                    />
                </>
            ) : <TestResult tests={tests} callbackStartTestAgain={this.callbackStartTestAgain}/>
        );
    }
}
