import React from 'react';
import BaseComponent from '..';

class Modal extends BaseComponent {
    state = {
        isShow: false,
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps() {
        this.setState({
            isShow: this.props.isShow
        })
    }

    onCloseModal = (e) => {
        this.props.onClose()
    }

    render() {
        
        return (
            <div style={modal.overlay}>
                <div className={`${this.props.modalClass || 'col-sm-10'} bg-white alert`} style={modal.boxStyle}>
                    
                    {this.props.title && <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                        <button type="button" className="close" onClick={this.onCloseModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>}
                    <div className="modal-body">
                        {
                            this.props.children
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onClose && this.props.onClose()
                            }}
                        >Close</button>
                        {this.props.submitBtnTxt && <button type="button" className="btn btn-primary"
                            onClick={this.onSubmit}
                        >Save changes</button>}
                    </div>
                </div>
            </div>
        )
    }
}

let boxHeight = ''
if (navigator.userAgent.toLowerCase().includes('firefox')) {
    boxHeight = '-moz-fit-content'
} else if (navigator.userAgent.toLowerCase().includes('chrome')) {
    boxHeight = '-webkit-fit-content'
}

const modal = {
    overlay: {
        position: 'fixed',
        zIndex: 1001,
        backgroundColor: 'rgba(0, 0, 0, 0.64)',
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 1,
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center'
    },
    boxStyle: {
        transform: 'translate(0, 25px)',
        height: boxHeight
    }
}

export const ModalCustom = Modal;