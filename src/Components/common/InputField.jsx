import React from 'react';
import BaseComponent from '..';

class Input extends BaseComponent {
    state = {
        msg: this.props.errMsg || ''
    }

    onBlurHandler = (e) => {
        e.preventDefault();
        if (e.target.value === '' && this.props.isRequired){
            this.setState({
                msg: 'Filled is Required'
            })
        } else {
            this.setState({
                msg: ''
            })
        }
    }

    onChange = (e) => {
        if(this.props.field) {
            if (e.target.name === 'email') {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                re.test(String(e.target.value).toLowerCase());
                if (re.test(String(e.target.value).toLowerCase())) {
                    this.props.onChange({ [this.props.field]: e.target.value })
                } else {
                    this.setState({
                        msg: "Email is not valid"
                    })
                    this.props.onChange({ [this.props.field]: '' })
                }
            } else {
                this.props.onChange({ [this.props.field]: e.target.value })
            }
        }
    }

    componentDidUpdate() {
        this.props.errMsg && setTimeout(() => {
            this.setState({
                msg: this.props.errMsg
            })
        }, 300)
    }


    render(){
        return(
            <>
                <label htmlFor={this.props.field || ''} className="col-sm-2 col-form-label">{this.props.label ? this.props.label : ''} {this.props.isRequired && <span className="text-danger"> * </span>}</label>
                <div className={` ${this.props.className ? this.props.className : 'col-sm-4'}`}>

                    {this.state.msg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px' }}>{this.state.msg}</span>}

                    {/* {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px' }}>{this.props.errMsg}</span>} */}

                    <input
                        className={`form-control`}
                        type={this.props.type ? this.props.type : "text"}
                        defaultValue={this.props.defaultValue || ''}
                        id={this.props.field || ''}
                        placeholder={this.props.placeholder || ""}
                        disabled={this.props.disabled || false}
                        onChange = {(e)=> {this.props.OnChangeTextBox(e.target.value, this.props.name)}}
                        onBlur={this.onBlurHandler}
                        required={this.props.isRequired}
                        name={this.props.name}
                    />
                </div>
            </>
        )
    }
}

export const InputField = Input;