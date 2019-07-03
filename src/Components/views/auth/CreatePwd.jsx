import React from 'react';
import { Link } from 'react-router-dom'
import { InputBox } from '../../../components/common';

class Pwd extends React.Component {
    state = {
        errMsg: null
    }
    onChange = (value) => {
        this.setState((prevState) => {
            Object.assign(prevState, value)
            if (prevState.pass !== prevState.cpass) {
                prevState.errMsg = "Password didn't match"
            } else {
                prevState.errMsg = false
            }
            return prevState;
        })
    }

    onContinue = (e) => {
        e.preventDefault();
        console.log(this.props)
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.errMsg === false) {
            this.props.onSubmitHandler({
                new_password: this.state.pass
            })
        } else {
            alert("Invalid Form")
        }
    }

    render() {
        return (
            <form>
                <div className="form-group d-flex justify-content-center mt-5">
                    <InputBox
                        label="Password"
                        InputType="password"
                        onChange={this.onChange}
                        field='pass'
                        placeholder="Password"
                        isRequired={true}
                        className="col-md-4"
                        defaultValue={this.state.pass}
                    />
                </div>
                <div className="form-group d-flex justify-content-center">
                    <InputBox
                        label="Retype Password"
                        InputType="password"
                        onChange={this.onChange}
                        field='cpass'
                        placeholder="Retype Password"
                        isRequired={true}
                        className="col-md-4"
                        defaultValue={this.state.cpass}
                        errMsg={this.state.errMsg}
                    />
                </div>

                {this.state.errMsg === false && <p className="text-success text-center m-0">Password Matched</p>}

                <div className="text-center d-flex justify-content-center mt-5">
                    <div className="col-sm-2"></div>
                    <button
                        className="btn btn-primary waves-effect waves-light mx-1"
                        onClick={this.onSubmitHandler}
                    >Submit</button>
                    <Link
                        to="/signin"
                        className="btn btn-success waves-effect waves-light mx-1"
                    >Continue login</Link>
                </div>

            </form>
        )
    }
}



export const CreatePwd = Pwd;