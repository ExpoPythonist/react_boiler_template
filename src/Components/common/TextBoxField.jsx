import React from 'react';

class TextArea extends React.Component {

    render() {
        return (
            <>
                <label htmlFor={this.props.id || ''} className="col-sm-2 col-form-label">{this.props.label ? this.props.label : ''}</label>
                <div className={` ${this.props.className ? this.props.className : 'col-sm-4'}`}>
                    <textarea
                        className={`form-control`}
                        value={this.props.defaultValue}
                        onChange={this.handleChange}
                        placeholder={this.props.placeholder || ""}
                    // onChange = {(e)=> {this.props.OnChangeTextBox(e.target.value, this.props.name)}}
                    />
                </div>
            </>
        )
    }
}

export const TextBoxField = TextArea;