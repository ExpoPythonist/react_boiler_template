import React from 'react';
// import Select from 'react-select';
import BaseComponent from '..';
import { Select } from 'antd';
import 'antd/dist/antd.css';
const Option = Select.Option;

export default class Selects extends BaseComponent {
    state = {
        msg: this.props.errMsg || '',
        selectedValue: null,
        defaultValue: this.props.defaultValue,
    }

    componentDidMount() {
        this.setState({
            selectedValue: {
                value: this.props.defaultValue,
                label: "Select"
            },
            defaultValue: this.props.defaultValue
        })
    }

    componentDidCatch() {
        let selectedValue;
        if (this.props.defaultValue && this.props.data) {
            selectedValue = this.props.data.find((value) => {
                return value.name === this.props.defaultValue && value
            })
            selectedValue && this.setState({
                selectedValue: {
                    value: this.props.defaultValue,
                    label: selectedValue.name
                }
            })
        }
    }

    handleBlur = (e) => {
        // e.preventDefault();
        // if (!this.state.selectedValue.value && this.props.isRequired) {
        //     this.setState({
        //         msg: 'Filled is Required'
        //     })
        // } else {
        //     this.setState({
        //         msg: ''
        //     })
        // }
    }

    handleChange = (value, option) => {
        let isArray = Array.isArray(option);
        if (isArray) {
            let ids = [];
            option.map((item) => {
                let data = item.props.info;
                return ids.push(data.name);
            })
            this.props.onChange && this.props.onChange({ [this.props.field]: ids })
        } else {
            let data = option.props.info;
            if (this.props.isData) {
                this.props.onChange && this.props.onChange({ [this.props.field]: value, additional_info: data })
            } else {
                this.props.onChange && this.props.onChange({ [this.props.field]: value })
            }
        }
    }
    render() {
        return (
            this.props.isPublic ?
                <>
                    {this.props.label &&
                        <label
                            htmlFor={this.props.field || ''}
                            className={`${this.props.labelClass || ""}`}
                        >{this.props.label ? this.props.label : ''} {this.props.isRequired && <span className="text-danger"> * </span>}</label>
                    }
                    <div style={{ position: 'relative' }}>
                        {this.state.msg && <span className={`${this.state.status ? 'text-success' : 'text-danger'} text-small`} style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.state.msg}</span>}


                        {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.props.errMsg}</span>}
                        <Select
                            mode={this.props.multiple ? 'multiple' : ''}
                            showSearch
                            placeholder={this.props.label ? this.props.label : ''}
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            size="large"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            defaultValue={this.props.defaultValue || ""}
                            style={styles.select}
                            required={this.props.isRequired || false}
                            disabled={this.props.disabled || false}
                        >
                            {this.props.data && this.props.data.map((data, index) => {
                                return <Option key={index} info={data} value={data.name}>{data.name}</Option>
                            })}
                        </Select>
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

                        {this.state.msg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 99999 }}>{this.state.msg}</span>}

                        {
                            this.props.data && this.props.defaultValue !== undefined &&
                            <Select
                                mode={this.props.multiple ? 'multiple' : ''}
                                showSearch
                                placeholder={this.props.label ? this.props.label : ''}
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                defaultValue={this.props.defaultValue || ""}
                                style={styles.select}
                                required={this.props.isRequired || false}
                                disabled={this.props.disabled || false}
                                size="large"
                            >
                                {this.props.data && this.props.data.map((data, index) => {
                                    return <Option key={index} info={data} value={data.name || ""}>{data.name || ""}</Option>
                                })}
                            </Select>
                        }

                        {
                            this.props.data && this.props.defaultValue === undefined &&
                            <Select
                                showSearch
                                mode={this.props.multiple ? 'multiple' : ''}
                                placeholder={this.props.placeholder ?  this.props.placeholder : this.props.label ? this.props.label : ''}
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                style={styles.select}
                                size="large"
                                required={this.props.isRequired || false}
                                disabled={this.props.disabled || false}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {this.props.data && this.props.data.map((data, index) => {
                                    return <Option key={index} info={data} value={data.name}>{data.name}</Option>
                                })}
                            </Select>
                        }

                        {
                            !this.props.data &&
                            <Select
                                showSearch
                                placeholder={this.props.label ? this.props.label : ''}
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                style={styles.select}
                                size="large"
                                required={this.props.isRequired || false}
                                disabled={this.props.disabled || false}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                            </Select>
                        }

                    </div>
                </>
        )
    }
}


const styles = {
    select: {
        width: '100%',
        fontSize: 14,
    }
}


