import React from 'react';
import PropTypes from 'prop-types';
import './test.less';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ContextConfig from '../context/context.jsx';

export default class Test extends React.Component {
    static contextType = ContextConfig;

    static propTypes = {
        test: PropTypes.object.isRequired,
        callbackAnswerChecked: PropTypes.func
    };

    handleOptionChange = event => {
        const value = event.target.value;
        this.props.callbackAnswerChecked && this.props.callbackAnswerChecked(value);
    };

    render() {
        const { test } = this.props;

        return (
            <div className={"test-container"}>
                <p className={"test-container__question"}>{test.question}</p>
                {
                    test.code &&
                    <div className={"test-container__code"}>
                        <SyntaxHighlighter language='jsx'>{test.code}</SyntaxHighlighter>
                    </div>
                }
                <div className={"test-container__choice-set"}>
                    {test.choiceSet.map((choice) => (
                       <div key={choice} className={"test-container__choice-set radio"}>
                            <label>
                                <input
                                    type={"radio"}
                                    value={choice}
                                    checked={test.selectedOption===choice}
                                    onChange={this.handleOptionChange}
                                />
                                {choice}
                            </label>
                       </div>
                    ))}
                </div>
                {this.context.showHints && <div className={"test-container__hint"} dangerouslySetInnerHTML={{__html: test.hint}}></div>}
            </div>
        );
    }
}