import React from 'react';
import BaseComponent from '..';
import { InputBox } from '../dashboard/InputBox';

class Form extends BaseComponent {
    state = {
        isShow: false,
        co_authors: {}
    }

    componentDidMount() {
        this.props.value && this.setState({
            co_authors: this.props.value
        })
    }

    componentWillReceiveProps() {
        this.setState({
            isShow: this.props.isShow
        })
    }

    onChangeHandler = (value) => {
        this.setState((prevState) => {
            if (Object.keys(value).includes('department')) {
                if (!value.department) {
                    // if department value is
                    // null deleting department from object 
                    delete prevState.co_authors.department
                } else {
                    prevState.co_authors = {
                        ...prevState.co_authors,
                        department: {
                            name: value.department,
                        },
                    }
                }
            } else if (Object.keys(value).includes('division')) {
                if (!value.division) {
                    delete prevState.co_authors.department
                } else {
                    if (prevState.co_authors.department) { // if there any department tree in object
                        prevState.co_authors = {
                            ...prevState.co_authors,
                            department: {
                                ...prevState.co_authors.department,
                                division: {
                                    name: value.division
                                }
                            }
                        }
                    }
                }

            } else {
                prevState.co_authors = {
                    ...prevState.co_authors,
                    ...value
                }
            }
            return prevState;
        })
    }

    onCloseModal = (e) => {
        let overlay = document.getElementById("CoAuthorDialog");
        if (e.target === overlay) {
            this.props.onClose()
        }
    }

    onSaveCoAuthor = (e) => {
        let { co_authors } = this.state;
        if (Object.entries(co_authors).length === 0) {
            alert("fields are empty")
        } else {
            this.props.onSaveAuthor(co_authors)
        }
    }


    render() {
        let { co_authors } = this.state;
        let CoAuthorInfo = (
            <div>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <h6>Co Author Info</h6>
                    </div>
                    <s style={{ borderBottom: '1px solid #7a6fbe', width: '100%' }}></s>
                </div>

                <div className="form-group row">
                    <InputBox
                        label="Salutation"
                        onChange={this.onChangeHandler}
                        field='salutation'
                        className="col-md-4"
                        placeholder="salutation"
                        labelClass="col-md-2"
                        defaultValue={co_authors.salutation}
                    />

                    <InputBox
                        label="First Name"
                        onChange={this.onChangeHandler}
                        field='first_name'
                        className="col-md-4"
                        placeholder="first name"
                        labelClass="col-md-2"
                        defaultValue={co_authors.first_name}
                    />
                </div>

                <div className="form-group row">
                    <InputBox
                        label="Middle name"
                        onChange={this.onChangeHandler}
                        field='middle_name'
                        className="col-md-4"
                        placeholder="middle name"
                        labelClass="col-md-2"
                        defaultValue={co_authors.middle_name}
                    />

                    <InputBox
                        label="Last Name"
                        onChange={this.onChangeHandler}
                        field='last_name'
                        className="col-md-4"
                        placeholder="last name"
                        labelClass="col-md-2"
                        defaultValue={co_authors.last_name}
                    />
                </div>

                <div className="form-group row">
                    <InputBox
                        label="Cor author email"
                        onChange={this.onChangeHandler}
                        field='email'
                        className="col-md-4"
                        placeholder="Corresponding author email"
                        labelClass="col-md-2"
                        InputType="email"
                        defaultValue={co_authors.email}
                    />

                    <InputBox
                        label="Cor author affiliation"
                        onChange={this.onChangeHandler}
                        field='affiliation'
                        className="col-md-4"
                        placeholder="author affiliated org"
                        labelClass="col-md-2"
                        defaultValue={co_authors.affiliation}
                    />
                </div>

                <div className="form-group row">
                    <InputBox
                        label="Cor author dept"
                        onChange={this.onChangeHandler}
                        field='department'
                        className="col-md-4"
                        placeholder="author department"
                        labelClass="col-md-2"
                        defaultValue={co_authors.department && co_authors.department.name}
                    />

                    <InputBox
                        label="Faculty Name"
                        onChange={this.onChangeHandler}
                        field='division'
                        className="col-md-4"
                        placeholder="Faculty name"
                        labelClass="col-md-2"
                        defaultValue={co_authors.department && co_authors.department.division && co_authors.department.division.name}
                        isDisable={true}
                    />
                </div>

                <div className="form-group row">
                    <InputBox
                        label="Orcid ID"
                        onChange={this.onChangeHandler}
                        field='orcid_id'
                        className="col-md-2"
                        placeholder="orcid id"
                        labelClass="col-md-2"
                    />
                    <InputBox
                        label="PMC id"
                        onChange={this.onChangeHandler}
                        field='pmc_id'
                        className="col-md-2"
                        placeholder="PMC id"
                        labelClass="col-md-2"
                    />
                    <InputBox
                        label="Position"
                        onChange={this.onChangeHandler}
                        field='position'
                        className="col-md-2"
                        placeholder="PMC id"
                        labelClass="col-md-2"
                    />
                </div>
            </div>
        )

        return (
            <div onClick={this.onCloseModal} id="CoAuthorDialog" style={modal.overlay}>
                <div className={`col-sm-10 bg-white alert`} style={modal.boxStyle}>
                    {CoAuthorInfo}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onClose && this.props.onClose()
                            }}
                        >Close</button>
                        <button type="button" className="btn btn-primary"
                            onClick={this.onSaveCoAuthor}
                        >Save changes</button>
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
        zIndex: 9999,
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

export const CoAuthor = Form;