import React from 'react';
import BaseComponent from '..';
import { DatePicker } from 'antd';
import moment from 'moment';
// import DatePicker from 'react-date-picker';

const format = 'Do MMM YYYY';

class Input extends BaseComponent {
    state = {
        msg: this.props.errMsg || '',
        date: this.props.date || new Date()
    }

    onChange = (date) => {
        this.setState({ date })
        this.props.onChange && this.props.onChange({ [this.props.field]: date })
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
                    <label
                        htmlFor={this.props.field || ''}
                        className={`${this.props.labelClass || ""}`}
                    >{this.props.label ? this.props.label : ''} {this.props.isRequired && <span className="text-danger"> * </span>}</label>
                    <div style={{ position: 'relative' }}>
                        {this.state.msg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.state.msg}</span>}


                        {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.props.errMsg}</span>}


                        <DatePicker
                            format={format}
                            defaultValue={moment(new Date(), format)}
                            allowClear
                            size="large"
                            style={{width:'100%'}}
                            id={this.props.field || ''}
                            disabled={this.props.disabled || false}
                            onChange={this.onChange}

                        />
                    </div>
                </> :
                <>
                    {this.props.label && <label
                        htmlFor={this.props.field || ''}
                        className={`col-sm-2 col-form-label ${this.props.labelClass || ""}`}
                    >{this.props.label ? this.props.label : ''} {this.props.isRequired && <span className="text-danger"> * </span>}</label>}

                    <div className={` ${this.props.className ? this.props.className : 'col-sm-4'}`} style={{ position: 'relative' }}>

                        {this.state.msg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.state.msg}</span>}

                        {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.props.errMsg}</span>}

                        {/* <DatePicker
                            value={this.state.date}
                            onChange={this.onChange}
                            className={`form-control`}
                            id={this.props.field || ''}
                            disabled={this.props.disabled || false}

                        /> */}
                        <DatePicker 
                            format={this.props.format || format}
                            defaultValue={this.props.defaultValue}
                            showTime={this.props.showTime || false}
                            allowClear
                            size="large"
                            style={{width:'100%', }}
                            popupStyle={{ zIndex: 99999, }}
                            id={this.props.field || ''}
                            disabled={this.props.disabled || false}
                            onChange={this.onChange}

                        />
                    </div>
                </>
        )
    }
}

export const OaDatePicker = Input;