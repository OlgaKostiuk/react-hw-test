import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './modal.less';

export default class Modal extends React.Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        closeButtonName: PropTypes.string
    };

    static defaultProps = {
        closeButtonName: 'Close'
    };

    constructor(props) {
        super(props);
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const {
            onClose,
            closeButtonName,
        } = this.props;

        return ReactDOM.createPortal(
            <div className="modal">
                <div className={"modal__content"}>{this.props.children}</div>
                <button
                    className={'modal__close-button custom-button'}
                    onClick={onClose}
                >{closeButtonName}</button>
            </div>,
            this.root
        );
    }
}
