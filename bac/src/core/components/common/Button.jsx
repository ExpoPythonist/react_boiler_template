import React from 'react';
import BaseComponent from '..';

class Btn extends BaseComponent {
    render() {
        let { name, size, className, onClick, type, text } = this.props;
        return (
            <button
                type={type}
                className={`btn btn-${name} btn-${size || 'sm'} waves-effect ${className}`}
                onClick={(e) => {
                    e.preventDefault();
                    onClick && onClick(e)
                }}
            >
                {text}
            </button>
        )
    }
}


export const Button = Btn;