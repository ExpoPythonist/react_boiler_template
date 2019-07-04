import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from '../../../../core/components/BaseComponent';
import { activateAccount, logoutUserData, ChangePassword } from '../../../actions';
import Loader from 'react-loader-spinner'
import { CreatePwd } from './CreatePwd';

export default class Actv extends BaseComponent {
    state = {
        security_code: '',
        token: null,
        status: null
    }


    async componentDidMount() {
        var search = this.props.location.search;
        const queryString = this.checkUrl(search);
        if (queryString) {
            this.props.logoutUser();
            const acc = await this.props.activateAccount({ security_code: queryString.security_code });
            if (acc.response && acc.response.status === 400) {
                this.setState({
                    msg: acc.response.data.message,
                    status: false
                })
            } else if (acc) {
                this.setState({
                    token: acc.token,
                    status: true,
                    msg: "Your account has successfully been activated, please reset your password."
                })
            }
        } else {
            this.props.history.push('/')
        }
    }

    checkUrl = (query) => {
        try {
            const q = query && JSON.parse('{"' + decodeURI(query.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            return q;
        } catch (e) {
            return false
        }
    }

    ChangePassword = async (value) => {
        await this.props.ChangePassword(value, this.state.token);
        this.props.history.push('/')
    }

    render() {
        let msg = null;

        if (this.state.status !== null) {
            msg = <div className="">
                {this.state.status === true && <h4 className="alert alert-success">{this.state.msg}</h4>}
                {this.state.status === false ? <div>
                    <h4 className="alert alert-danger ">{this.state.msg} <button className="btn btn-primary btn-lg px-3 ml-4">Send code again</button></h4>
                    
                </div> :
                    <CreatePwd
                        onSubmitHandler={this.ChangePassword}
                    />
                }
            </div>
        } else {
            msg = <div>
                <Loader
                    type="Plane"
                    color="#036FFF"
                    height="100"
                    width="100"
                />
                <h1 className="mt-5">Activating</h1>
            </div>
        }

        return (
            <div className="container pt-5 text-center">
                {msg}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    activateAccount: (data) => dispatch(activateAccount(data)),
    logoutUser: () => dispatch(logoutUserData()),
    ChangePassword: (payload, token) => dispatch(ChangePassword(payload, token))
})

export const Activate = connect(mapStateToProps, mapDispatchToProps)(Actv)