import React from 'react';
import BaseComponent from '../../../../core/components';
import { connect } from 'react-redux';
import { getGroupList, getOrgList, getAllCountry, getAllState, getAllCity } from '../../../actions';
import { getRoleList } from '../../../actions';
import { TextBox, SelectBox, InputBox } from '../../../../core/components/common';

const mapStateToProps = (state) => ({
    auth: state.auth,
    groups: state.app.groups,
    roles: state.app.roles,
    orgs: state.app.organizations,
    countries: state.app.countries,
    geoLocation: state.app.geoLocation,
    Messages: {},
    user_status: state.user.new_user && state.user.new_user.status
})

const mapDispatchToProps = (dispatch) => ({
    getRoleList: () => dispatch(getRoleList()),
    getGroupList: () => dispatch(getGroupList()),
    getOrgList: (payload) => dispatch(getOrgList(payload)),
    getAllCountry: () => dispatch(getAllCountry()),
    getAllState: (payload) => dispatch(getAllState(payload)),
    getAllCity: (payload) => dispatch(getAllCity(payload))
})

class User extends BaseComponent {
    state = {
        user: {},
        roleList: false,
        groupList: false,
        addressCounter: 0,
        addresses: [],
        user_meta: {},
        domain_meta: {},
        orgStatus: false,
        stateStatus: [],
        cityStatus: [],
        selectedOrganization: false,
        errMsg: false,
        email_domain: false
    }

    componentDidMount() {
        this.props.user && this.setState({
            user: this.props.user,
            addressCounter: this.props.user.addresses ? this.props.user.addresses.length : 0
        })
        this.props.getRoleList();
        this.props.getGroupList();
        this.props.getAllCountry();
    }

    onChangeHandler = async (value) => {
        this.setState((prevState) => {
            if(value.email_domain) prevState.email_domain = value.email_domain;
            return Object.assign(prevState.user, value);
        })
        // If email domain store in state it will check if email domain is matched with
        // the email domain of organization
        // Otherwise it will show a message in the top right corner that
        // Email domain does not matched with organization email domain
        this.state.email_domain && this.onChangeEmailDomain(this.state.email_domain);
    }

    // This lifecycle will only applicable for update
    componentWillReceiveProps() {
        if (this.props.user) {
            this.setState({
                user: this.props.user
            })
            if (this.props.user.group && !this.state.orgStatus) {
                this.onChangeGroupHandler({ group: this.props.user.group})
            }
            
        }
    }

    // New organization will be initialized if group changed 
    // using this event handler
    onChangeGroupHandler = async (value) => {
        value.email_domain && this.onChangeEmailDomain(value.email_domain)

        this.setState((prevState) => {
            prevState.user = Object.assign(prevState.user, value);
            prevState.orgStatus = false;
            prevState.email_domain = value.email_domain
            prevState.user.organisation = this.props.user.organisation || false
            return prevState;
        })
        const org = value.group && await this.props.getOrgList(value);
        org && org.status && this.setState((prevState) => {
            prevState.orgStatus = true;
            return prevState;
        })
    }

    onChangeAddressHandler = async (i, value) => {
        let adds = this.state.addresses[i] || {};
        let state, city;
        this.setState((prevState) => {
            prevState.addresses[i] = Object.assign(adds, value)
            return prevState;
        })
        let newValue = {
            ...value,
            index: i
        };

        if(value.country){
            this.setState((prevState) => {
                prevState.stateStatus[i] = false
                return prevState;
            })
            state = await this.props.getAllState(newValue)
            state.status && this.setState((prevState) => {
                prevState.stateStatus[i] = true
                return prevState;
            })
        } else if (value.state) {
            this.setState((prevState) => {
                prevState.cityStatus[i] = false
                return prevState;
            })
            city = await this.props.getAllCity(newValue)
            city.status && this.setState((prevState) => {
                prevState.cityStatus[i] = true
                return prevState;
            })
        }
    }

    onChangeOrcidHandler = (value) => {
        this.setState((prevState) => {
            Object.assign(prevState.user_meta, value);
            return prevState;
        })
    }

    onChangeDomainHandler = (value) => {
        this.setState((prevState) => {
            prevState.domain_meta && Object.assign(prevState.user, {
                domain_meta: {
                    ...prevState.user.domain_meta,
                    ...value
                }
            });
            return prevState;
        })
    }


    onChangeEmailDomain = (value) => {
        const email_domain = value.substring((value.indexOf('@')+1), value.length);
        console.log(email_domain)
        this.setState((prevState) => {
            prevState.email_domain = value;
            if (prevState.user.email && !prevState.user.email.includes(email_domain)) {
                prevState.errMsg = "Email domain mismatch"
            } else {
                prevState.errMsg = ""
            }
            return prevState;
        })
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        await this.setState((prevState) => {
            prevState.addresses.filter((element) => {
                element.title === "" && delete element.title;
                element.address1 === "" && delete element.address1;
                element.address2 === "" && delete element.address2;
                element.city === "" && delete element.city;
                element.postal_code === "" && delete element.postal_code;
                if (Object.entries(element).length === 0) {
                    return prevState.addresses = [];
                } else {
                    return element;
                }
            })
            Object.assign(prevState.user, {
                username: prevState.user.email,
                addresses: prevState.addresses,
                user_meta: prevState.user_meta
            })
            return prevState;
        })

        // console.log(this.state.user)
        await this.props.onSubmitHandler(this.state.user)
        if (this.props.user_status === 201 ) {
            this.setState({
                user: {},
                stateStatus: [],
                cityStatus: [],
                addressCounter: 1
            })
        }
    }

    incrementAddress = () => {
        if (this.state.addressCounter >= 0) {
            this.setState({
                addressCounter: this.state.addressCounter + 1
            })
        }
    }

    decrementAddress = () => {
        if (this.state.addressCounter > 0) {
            this.setState((prevState) => {
                prevState.addressCounter = this.state.addressCounter - 1;
                prevState.addresses.pop();
                return prevState;
            })
        }
    }

    render() {
        let addresses = [];
        let user = this.props.user || null
        let other = [
            {
                "id": 1,
                "name": "Other",
                "short_name": "OT",
                "parent": null,
            }]

        for (let i = 0; i <= this.state.addressCounter; i++) {
            // this.props.user && this.props.user.addresses && this.props.user.addresses.length>0 && this.onChangeAddressHandler(i, this.props.user.addresses[i])
            addresses.push(
                <div className="addresses" key={i}>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <h6>Address {this.state.addressCounter >= 1 && i + 1} (Optional)</h6>
                        </div>
                        <s style={{ borderBottom: '1px solid #7a6fbe', width: '100%' }}></s>
                    </div>
                    <div className="form-group row">
                        <TextBox
                            label="Address 1"
                            onChange={(value) => this.onChangeAddressHandler(i, value)}
                            field='address1'
                            placeholder="Address 1"
                            defaultValue={
                                user ? 
                                    user.addresses ? 
                                        user.addresses.length > 0 ? (user.addresses[i] && user.addresses[i].address1)
                                    : ""
                                : "" : ""
                            }
                        />
                        <TextBox
                            label="Address 2"
                            onChange={(value) => this.onChangeAddressHandler(i, value)}
                            field='address2'
                            placeholder="Address 2"
                            defaultValue={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && user.addresses[i].address2)
                                            : ""
                                        : "" : ""
                            }
                        />
                    </div>

                    <div className="form-group row">
                        <SelectBox
                            label="Country"
                            onChange={(value) => this.onChangeAddressHandler(i, value)}
                            field='country'
                            data={this.props.countries}
                            defaultValue={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && user.addresses[i].country)
                                            : ""
                                        : "" : ""
                            }
                        />
                        <SelectBox
                            label="State"
                            onChange={(value) => this.onChangeAddressHandler(i, value)}
                            field='state'
                            data={this.props.geoLocation ? (this.props.geoLocation[i] ? this.props.geoLocation[i].states : other) : other}
                            disabled={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && !user.addresses[i].country)
                                            : !this.state.stateStatus[i]
                                        : !this.state.stateStatus[i] : !this.state.stateStatus[i]
                            }
                            defaultValue={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && user.addresses[i].state)
                                            : ""
                                        : "" : ""
                            }
                        />
                    </div>
                    <div className="form-group row">
                        <SelectBox
                            label="City"
                            onChange={(value) => this.onChangeAddressHandler(i, value)}
                            field='city'
                            data={this.props.geoLocation ? (this.props.geoLocation[i] ? this.props.geoLocation[i].cities : other) : other}
                            disabled={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && !user.addresses[i].state)
                                            : !this.state.cityStatus[i]
                                        : !this.state.cityStatus[i] : !this.state.cityStatus[i]
                            }
                            defaultValue={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && user.addresses[i].city)
                                            : ""
                                        : "" : ""
                            }
                        />
                        <InputBox
                            label="Post/Zip Code"
                            onChange={(value) => this.onChangeAddressHandler(i, value)}
                            field='postal_code'
                            placeholder="post code"
                            defaultValue={
                                user ?
                                    user.addresses ?
                                        user.addresses.length > 0 ? (user.addresses[i] && user.addresses[i].postal_code)
                                            : ""
                                        : "" : ""
                            }
                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="tab-content">
                <div className="tab-pane active p-3" id="home-1" role="tabpanel">
                </div>
                <form >
                    <div className="form-group row">
                        <label className={`col-sm-2 col-form-label`} >asdf</label>

                        <div className={` ${this.props.className ? this.props.className : 'col-sm-4'}`} style={{ position: 'relative' }}>

                            {this.state.msg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.state.msg}</span>}

                            {this.props.errMsg && <span className="text-danger text-small" style={{ fontSize: 12, position: 'absolute', right: 20, top: -10, backgroundColor: '#fff', padding: '0px 10px', zIndex: 2 }}>{this.props.errMsg}</span>}

                            <input
                                className={`form-control`}
                                type={this.props.type ? this.props.type : "text"}
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
                        <InputBox
                            label="First name"
                            onChange={this.onChangeHandler}
                            field='first_name'
                            placeholder="First name"
                            isRequired={true}
                            defaultValue={user ? user.first_name : ""}
                        />
                    </div>
                    <div className="form-group row">
                        <InputBox
                            label="Middle name"
                            onChange={this.onChangeHandler}
                            field='middle_name'
                            placeholder="Middle name"
                            defaultValue={user ? user.middle_name : ""}
                        />
                        <InputBox
                            label="Last name"
                            onChange={this.onChangeHandler}
                            field='last_name'
                            placeholder="Last name"
                            isRequired={true}
                            defaultValue={user ? user.last_name : ""}
                        />
                    </div>

                    <div className="form-group row">
                        <InputBox
                            label="Email"
                            onChange={this.onChangeHandler}
                            field='email'
                            placeholder="Email"
                            isRequired={true}
                            Message={this.state.Messages && this.state.Messages.email}
                            errMsg={this.state.errMsg}
                            defaultValue={user ? user.email : ""}
                        />
                        <SelectBox
                            label="Role"
                            onChange={this.onChangeHandler}
                            field='role'
                            data={this.props.roles}
                            isRequired={true}
                            defaultValue={user ? user.role : ""}
                        />
                    </div>

                    <div className="form-group row">
                        <SelectBox
                            label="Group"
                            onChange={this.onChangeGroupHandler}
                            field='group'
                            data={this.props.groups}
                            isRequired={true}
                            defaultValue={user ? user.group : ""}
                        />
                        <SelectBox
                            label="Organization"
                            onChange={this.onChangeHandler}
                            field='organisation'
                            data={this.props.orgs || ['Loading']}
                            isRequired={true}
                            disabled={!this.props.user.group}
                            onRestFields={this.onChangeEmailDomain}
                            defaultValue={user ? user.organisation : ""}
                        />
                    </div>

                    {/* Address */}
                    {addresses}
                    {/* Address */}

                    <div className="form-group row">
                        <div className="col-sm-12 text-right">
                            <button className="btn btn-primary mr-2" type="button" onClick={this.incrementAddress}>
                                <i className="mdi mdi-plus" style={{ fontSize: 30 }}></i>
                            </button>
                            <button className="btn btn-primary" type="button" onClick={this.decrementAddress}>
                                <i className="mdi mdi-minus" style={{ fontSize: 30 }}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-12">
                            <h6>Additional Information (Optional)</h6>
                        </div>
                        <s style={{ borderBottom: '1px solid #7a6fbe', width: '100%' }}></s>
                    </div>

                    <div className="form-group row">
                        <InputBox
                            label="Orcid ID"
                            onChange={this.onChangeOrcidHandler}
                            field='orcid_id'
                            placeholder="Orcid ID"
                            defaultValue={user ? user.user_meta ? user.user_meta.orcid_id : "" : ""}
                        />
                        <InputBox
                            label="PMC ID"
                            onChange={this.onChangeOrcidHandler}
                            field='pmc_id'
                            placeholder="PMC ID"
                            defaultValue={user ? user.user_meta ? user.user_meta.pmc_id : "" : ""}
                        />
                    </div>

                    <div className="form-group row">
                        <InputBox
                            label="Personal Telephone"
                            onChange={this.onChangeOrcidHandler}
                            field='phone'
                            placeholder="Personal Telephone"
                            defaultValue={user ? user.user_meta ? user.user_meta.phone : "" : ""}
                        />
                        <InputBox
                            label="Alternative Phone"
                            onChange={this.onChangeHandler}
                            field='alt_phone'
                            placeholder="Alternative Phone"
                            defaultValue={user ? user.user_meta ? user.user_meta.alt_phone : "" : ""}
                        />
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-12">
                            <h6>Organizational Details (Optional)</h6>
                        </div>
                        <s style={{ borderBottom: '1px solid #7a6fbe', width: '100%' }}></s>
                    </div>

                    <div className="form-group row">
                        <InputBox
                            label="Title"
                            onChange={this.onChangeDomainHandler}
                            field='title'
                            placeholder="Title"
                            defaultValue={user ? user.domain_meta ? user.domain_meta.title : "" : ""}
                        />
                        <InputBox
                            label="Position"
                            onChange={this.onChangeDomainHandler}
                            field='position'
                            placeholder="Position"
                            defaultValue={user ? user.domain_meta ? user.domain_meta.position : "" : ""}
                            isRequired={true}
                        />
                    </div>
                    <div className="form-group row">
                        <InputBox
                            label="Department"
                            onChange={this.onChangeDomainHandler}
                            field='department'
                            placeholder="Department"
                            defaultValue={user ? user.domain_meta ? user.domain_meta.department : "" : ""}
                            isRequired={true}
                        />
                        <InputBox
                            label="Alternative Phone"
                            onChange={this.onChangeDomainHandler}
                            field='alt_tel'
                            placeholder="Alternative Phone"
                            defaultValue={user ? user.domain_meta ? user.domain_meta.alt_tel : "" : ""}
                            isRequired={true}
                        />
                    </div>

                    {this.props.msg &&
                        <div className="form-group row">
                            <span className="alert alert-success col-sm-12">{this.props.msg}</span>
                        </div>
                    }

                    <div className="text-right m-t-15">
                        <button
                            className="btn btn-primary btn-lg w-25 waves-effect waves-light"
                            onClick={this.onSubmitHandler}
                        >Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export const UserDetail = connect(mapStateToProps, mapDispatchToProps)(User);