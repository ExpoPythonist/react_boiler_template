// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import BaseComponent from '../../../../core/components/BaseComponent';
// import { requestSignUpUser, getPublicOrgSignup } from '../../../actions';
// import { SelectBox, InputBox } from '../../../../core/components/common';
// import { history } from '../../../route';

// export class Auth extends BaseComponent {
//     state = {
//         isPassMatched: null,
//         isRegistering: false,
//         user: {},
//         errMsg: null
//     }

//     componentDidMount() {
//         this.props.getPublicOrgSignup();
//     }

//     onChangeHandler = (value) => {
//         this.setState((prevState) => {
//             if (value.email_domain && prevState.user.email && !prevState.user.email.includes(value.email_domain)) {
//                 prevState.errMsg = "Email mismatched"
//             } else {
//                 prevState.errMsg = null
//             }
//             Object.assign(prevState.user, value);
//             return prevState;
//         })

//         this.state.email_domain && this.onChangeEmailDomain(this.state.email_domain)

//     }

//     onSubmit = async (e) => {
//         e.preventDefault();
//         const { salute, first_name, middle_name, last_name, email, organisation, password, username = email } = this.state.user;
//         if (first_name && last_name && email && username && organisation && password) {
//             this.setState({
//                 isRegistering: true
//             })
//             const data = {
//                 salute, first_name, middle_name, last_name, email, username, organisation, password
//             };
//             await this.props.requestSignUpUser(data);
//             this.setState({
//                 isRegistering: false
//             })
//         } else {
//             alert('Field cannot be empty')
//         }
//     }


//     onChangeEmailDomain = (value) => {
//         const email_domain = value.substring((value.indexOf('@') + 1), value.length);
//         // console.log(email_domain)
//         this.setState((prevState) => {
//             prevState.email_domain = value;
//             if (prevState.user.email && !prevState.user.email.includes(email_domain)) {
//                 prevState.errMsg = "Email domain mismatch"
//             } else {
//                 prevState.errMsg = ""
//             }
//             return prevState;
//         })
//     }



//     checkPassword = (e) => {
//         let cpass = e.target.value;
//         if (cpass === '') {
//             this.setState({
//                 isPassMatched: null
//             })
//         }
//         else if (this.state.user.init_password === cpass) {
//             this.setState((prevState) => {
//                 prevState.isPassMatched = true;
//                 prevState.user.password = cpass;
//                 return prevState;
//             })
//         } else {
//             this.setState((prevState) => {
//                 prevState.isPassMatched = false;
//                 prevState.user.password = '';
//                 return prevState;
//             })
//         }
//     }

//     onCancelPopup = () => {
//         alert('wait')
//     }

//     render() {
//         return (
//             <div className="wrapper-page pt-5">


//                 {/* End of Registration Complete Message */}
//                 <div className="card m-b-20">
//                     <div className="card-body">
//                         <h3 className="text-center m-0">
//                             <Link to="/" className="logo logo-admin">
//                                 <img src="/assets/images/logo-sm.png" style={{ height: "30px" }} alt="logo" />
//                             </Link>
//                         </h3>

//                         <div className="p-3">
//                             {/* <h4 className="text-muted font-18 m-b-5"></h4> */}
//                             <form className="form-horizontal" action="" onSubmit={this.onSubmit}>
//                                 <SelectBox
//                                     label="Select your Organization"
//                                     onChange={this.onChangeHandler}
//                                     field='organisation'
//                                     isRequired={true}
//                                     isPublic={true}
//                                     data={this.props.orgs}
//                                 />

//                                 <div className="form-group row m-t-20">
//                                     <div className="col-6">
//                                         <InputBox
//                                             label="Salutation"
//                                             onChange={this.onChangeHandler}
//                                             field='salute'
//                                             placeholder="Salutation"
//                                             isPublic={true}
//                                         />
//                                     </div>
//                                     <div className="col-6">
//                                         <InputBox
//                                             label="First name"
//                                             onChange={this.onChangeHandler}
//                                             field='first_name'
//                                             placeholder="First name"
//                                             isRequired={true}
//                                             isPublic={true}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="form-group row m-t-20">
//                                     <div className="col-6">
//                                         <InputBox
//                                             label="Middle name"
//                                             onChange={this.onChangeHandler}
//                                             field='middle_name'
//                                             placeholder="Middle name"
//                                             isPublic={true}
//                                         />
//                                     </div>
//                                     <div className="col-6">

//                                         <InputBox
//                                             label="Last name"
//                                             onChange={this.onChangeHandler}
//                                             field='last_name'
//                                             placeholder="Last name"
//                                             isRequired={true}
//                                             isPublic={true}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-group row m-t-20">
//                                     <div className="col-12">
//                                         <InputBox
//                                             label="Email"
//                                             onChange={this.onChangeHandler}
//                                             field='email'
//                                             placeholder="Email"
//                                             isRequired={true}
//                                             errMsg={this.state.errMsg}
//                                             isPublic={true}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="form-group">
//                                     <InputBox
//                                         label="Password"
//                                         onChange={this.onChangeHandler}
//                                         field='init_password'
//                                         placeholder="Password"
//                                         isRequired={true}
//                                         isPublic={true}
//                                         type="password"
//                                     />
//                                 </div>
//                                 <div className="form-group">

//                                     {(this.state.isPassMatched !== null) && (this.state.isPassMatched ? <span className="text-primary float-right">Password Matched</span> : <span className="text-danger float-right">Password Not Matched</span>)}

//                                     <InputBox
//                                         label="Retype Password"
//                                         onChange={this.onChangeHandler}
//                                         placeholder="Password"
//                                         isRequired={true}
//                                         Message={this.state.Messages && this.state.Messages.email}
//                                         isPublic={true}
//                                         type="password"
//                                         onKeyUp={this.checkPassword}
//                                     />
//                                 </div>


//                                 <div className="form-group row m-t-20">
//                                     <div className="col-6">
//                                         <Link to="/signin" className="text-primary"><i className="ti-arrow-left"></i>Skip page</Link>
//                                     </div>
//                                     <div className="col-6 text-right">
//                                         <button onClick={this.onSubmit} className="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
//                                     </div>
//                                 </div>

//                                 {this.state.isRegistering &&
//                                     <p className="text-primary text-center">Registering</p>
//                                 }

//                                 <div className="form-group m-t-10 mb-0 row">
//                                     <div className="col-12 m-t-20">
//                                         <p className="font-14 text-muted mb-0"><i className="mdi mdi-hand-pointing-right"></i> By clicking Register, you agree to the OaMetrix user agreement, privacy policy, cookie policy.<Link to="#" className="text-primary">Terms of Use</Link></p>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>

//                     </div>
//                 </div>

//                 <div className="m-t-40 text-center">
//                     <p>Already have an account ? <Link to="/signin" className="text-primary">Sign in </Link> </p>
//                     <p>© 2018 OaMetrix</p>
//                 </div>

//             </div>

//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     orgs: state.app.organizations
// })

// const mapDispatchToProps = (dispatch) => ({
//     requestSignUpUser: (payload) => dispatch(requestSignUpUser(payload)),
//     getPublicOrgSignup: () => dispatch(getPublicOrgSignup())
// })

// export const SignUp = connect(mapStateToProps, mapDispatchToProps)(Auth);