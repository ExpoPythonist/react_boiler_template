import React from 'react';
import validator from 'validator'
import { Input } from 'antd';
import 'antd/dist/antd.css';

class TextArea extends React.Component {
    state = {
        msg: this.props.errMsg || '',
        status: false
    }

    onBlurHandler = (e) => {
        e.preventDefault();
        let value = e.target.value;
        validator.isEmpty(value)
        if (this.props.isRequired && validator.isEmpty(value)) {
            if (validator.isEmpty(value)) {
                this.setState({
                    msg: 'Filled is Required'
                })
            } else {
                this.setState({
                    msg: ''
                })
            }
        }
    }

    onChange = (e) => {
        if (this.props.field) {
            let value = e.target.value;
            switch (this.props.InputType) {
                case 'email':
                    if (validator.isEmail(value)) {
                        // this.props.onChange({ [this.props.field]: value })
                        this.setState({
                            msg: '',
                            status: true
                        });
                    } else {
                        this.setState({
                            msg: 'Email is not valid',
                            status: false
                        });
                    }
                    break;
                case 'url':
                    let options = {
                        require_protocol: true
                    }
                    if (validator.isURL(value, options)) {
                        // this.props.onChange({ [this.props.field]: value })
                        this.setState({
                            msg: '',
                            status: true
                        });
                    } else {
                        this.setState({
                            msg: 'URL is not valid (use http:// or https://)',
                            status: false
                        });
                    }
                    break;
                case 'number':
                    if (validator.isNumeric(value)) {
                        // this.props.onChange({ [this.props.field]: value })
                        this.setState({
                            msg: '',
                            status: true
                        });
                    } else {
                        this.setState({
                            msg: 'Number is not valid',
                            status: false
                        });
                    }
                    break;
                default:
                    this.setState({ msg: '' });
                    this.props.onChange({ [this.props.field]: value })
            }

            this.props.onChange({ [this.props.field]: value })
        }
    }

    componentDidUpdate() {
        this.props.errMsg && setTimeout(() => {
            this.setState({
                msg: this.props.errMsg
            })
        }, 300)
    }


    render() {
        return (
            this.props.isPublic ?
                <>
                    {this.props.label &&
                        <label
                            htmlFor={this.props.field || ''}
                            className={` col-form-label ${this.props.labelClass || "col-sm-2"}`}
                        >{this.props.label ? this.props.label : ''} {this.props.isRequired && <span className="text-danger"> * </span>}</label>
                    }
                    <div style={{ position: 'relative' }} className={this.props.className}>
                        {this.state.msg && <span className={`${this.state.status ? 'text-success' : 'text-danger'} text-small`} style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.state.msg}</span>}


                        {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.props.errMsg}</span>}

                        <Input.TextArea
                            className={`form-control`}
                            defaultValue={this.props.defaultValue || ''}
                            id={this.props.field || ''}
                            placeholder={this.props.placeholder || ""}
                            disabled={this.props.disabled || false}
                            onChange={this.onChange}
                            onBlur={this.onBlurHandler}
                            required={this.props.isRequired}
                            name={this.props.field}
                            onKeyUp={(e) => this.props.onKeyUp && this.props.onKeyUp(e)}
                        />
                    </div>
                </> :
                <>
                    {this.props.label &&
                        <label
                            htmlFor={this.props.field || ''}
                            className={` col-form-label ${this.props.labelClass || "col-sm-2"}`}
                        >{this.props.label ? this.props.label : ''} {this.props.isRequired && <span className="text-danger"> * </span>}</label>
                    }
                    <div className={` ${this.props.className ? this.props.className : 'col-sm-4'}`} style={{ position: 'relative' }}>

                        {this.state.msg && <span className={`${this.state.status ? 'text-success' : 'text-danger'} text-small`} style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.state.msg}</span>}


                        {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.props.errMsg}</span>}
                        {this.props.defaultValue !== undefined &&
                            <Input.TextArea
                                className={`form-control`}
                                defaultValue={this.props.defaultValue || ''}
                                id={this.props.field || ''}
                                placeholder={this.props.placeholder || ""}
                                disabled={this.props.disabled || false}
                                onChange={this.onChange}
                                onBlur={this.onBlurHandler}
                                required={this.props.isRequired}
                                name={this.props.field}
                                onKeyUp={(e) => this.props.onKeyUp && this.props.onKeyUp(e)}
                            />}

                        {this.props.defaultValue === undefined &&
                            <Input.TextArea
                                className={`form-control`}
                                defaultValue={this.props.defaultValue || ''}
                                id={this.props.field || ''}
                                placeholder={this.props.placeholder || ""}
                                disabled={this.props.disabled || false}
                                onChange={this.onChange}
                                onBlur={this.onBlurHandler}
                                required={this.props.isRequired}
                                name={this.props.field}
                                onKeyUp={(e) => this.props.onKeyUp && this.props.onKeyUp(e)}
                            />}
                    </div>
                </>
        )
    }
}
export const TextBox = TextArea;
