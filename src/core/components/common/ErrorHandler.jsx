import React from 'react';
import { PopupBox } from './PopupBox';

export const ErrorHandler = (props) => {
    let err = '';
    const statusMsg = {
        400: 'Entity not found and will not proceed',
        401: 'Not authorized',
        403: 'Forbidden',
        404: 'Resource not found',
        405: 'Method not allowed',
        409: 'Record conflict',
        422: 'Unprocessable entity',
        429: 'Too many requests.',
        500: 'Internal Server Error'
    };


    if (props.status in statusMsg) {
        err = <PopupBox
            title={props.title || props.status + " Error"}
            msg={props.msg || statusMsg[props.status]}
            onCancel={() => props.onReset && props.onReset(true)}
        />
    } else if (props.title) {
        err = <PopupBox
            title={props.title}
            msg={props.msg || "Unknown error found"}
            onCancel={() => props.onReset && props.onReset(true)}
        />
    } else {
        err = false
    }

    return err;
}