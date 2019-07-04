// import React from 'react';
// import { connect } from 'react-redux';
// import { Icon } from 'antd';
// import { ClearStatus,getLicenseList,GetArticleFull,createAuthorApcFund,getArticleRequired,UpdateArticleRequired ,getArticleRequiredField,getArticleApcRequestOrganisation} from '../../../openaccess/actions';
// import BaseComponent from '../../../core/components';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { 
//     SelectBox,  
//     Loading,
//     TextBox,
//     InputBox  
// } from '../../../core/components/common';

// class Popup extends BaseComponent{
//     state={
//         authorApcReq:{},
//         extraField:{},
//         loading:false,
//         extraFieldForm:this.props.extraField || this.props.keyField,
//         article:{},
//         message:false
//     }

//     submit = (msg) => {
//         confirmAlert({
//           title: 'Error message!',
//           message: msg,
//           buttons: [
//             {
//               label: 'Close',
//               onClick: () => {}
//             }
//           ]
//         });
//     };

//     submitSuccess = (msg) => {
//         confirmAlert({
//           title: 'Success message',
//           message: 'Successfully saved',
//           buttons: [
//             {
//               label: 'Close',
//               onClick: () => {}
//             }
//           ]
//         });
//     };

//     onChangeHandler = (value) => {
//         console.log(value,'afds');
//         if(this.state.extraFieldForm){
//             this.setState((prevState) => {
//                 return Object.assign(prevState.extraField, value);
//             })
//         }else{
//             this.setState((prevState) => {
//                 return Object.assign(prevState.authorApcReq, value);
//             })
//         }
//     }

//     onSubmitHandler = async (e) => {
//         e.preventDefault();
//         this.setState({
//           status:true
//         })
//         let id = this.state.article.id || this.props.id;
//         let payload = this.state.extraField;
//         await this.props.UpdateArticleRequired(id,payload);
//         this.props.onCancel ? this.props.onCancel() : this.props.ClearStatus();
//         if(!this.props.article.success){
//            // alert(this.props.article.message);
//             this.submit(this.props.article.message);
//         }else{
//             this.props.onPopupSuccess(payload);
//             this.submitSuccess()
//         }  
//     }

//     submitAuthorApcFund = async (e) =>{
//         e.preventDefault();
//         let data = this.state.authorApcReq;
//         let request_id = this.props.request_to ? this.props.request_to.results[0].id : null;
//         if(!this.state.authorApcReq.article || !this.state.authorApcReq.request_to){
//             let extraData = {article: this.state.authorApcReq.article ? this.state.authorApcReq.article : this.props.article_id, request_to: this.state.authorApcReq.request_to ? this.state.authorApcReq.request_to : request_id }
//             data = Object.assign(this.state.authorApcReq,extraData)
//         }else{
//             data = this.state.authorApcReq;
//         }
//         if(!this.state.authorApcReq.licence){
//             confirmAlert({
//                 title: 'Error message!',
//                 message: 'Licence is required field',
//                 buttons: [
//                   {
//                     label: 'Close',
//                     onClick: () => {}
//                   }
//                 ]
//               });
//         }else{
//             await this.props.createAuthorApcFund(data);
//             if(typeof this.props.author_apc_fund_success.success !== 'undefined'){
//                 confirmAlert({
//                     title: 'Error message!',
//                     message: this.props.author_apc_fund_success.message,
//                     buttons: [
//                       {
//                         label: 'Close',
//                         onClick: () => {}
//                       }
//                     ]
//                 });
//             }else{
//                 this.setState({
//                     loading:true
//                 })
//                 window.location.reload();
//             }
//         }
//     }

//     ExtraFieldForm = (props) => {
//         return(
//             <div>
//                 <div className="form-group row">
//                 <InputBox
//                     label="Extra field1"
//                     onChange={this.onChangeHandler}
//                     lableLeft={true}
//                     field='extra_field1'
//                     placeholder="Extra field one"
//                     labelClass="col-sm-4"
//                     className="col-sm-8"
//                     defaultValue={ this.state.article ? this.state.article.extra_field1 : ''}
//                 />
//                 </div>
//                 <div className="form-group row">
//                 <InputBox
//                     label="Extra field2"
//                     onChange={this.onChangeHandler}
//                     lableLeft={true}
//                     field='extra_field2'
//                     placeholder="Extra field two"
//                     labelClass="col-sm-4"
//                     className="col-sm-8"
//                     defaultValue={ this.state.article ? this.state.article.extra_field2 : ''}
//                 />
//                 </div>
//                 <div className="form-group row">
//                 <InputBox
//                     label="Extra field3"
//                     lableLeft={true}
//                     onChange={this.onChangeHandler}
//                     field='extra_field3'
//                     placeholder="Extra field three"
//                     labelClass="col-sm-4"
//                     className="col-sm-8"
//                     defaultValue={ this.state.article ? this.state.article.extra_field3 : ''}
//                 />
//                 </div>
//                 <div className="form-group row">
//                 <InputBox
//                     label="Extra field4"
//                     onChange={this.onChangeHandler}
//                     lableLeft={true}
//                     field='extra_field4'
//                     placeholder="Extra field four"
//                     labelClass="col-sm-4"
//                     className="col-sm-8"
//                     defaultValue={ this.state.article ? this.state.article.extra_field4 : ''}
//                 />
//                 </div>
//                 <div className="form-group row">
//                 <InputBox
//                     label="Extra field5"
//                     onChange={this.onChangeHandler}
//                     lableLeft={true}
//                     field='extra_field5'
//                     placeholder="Extra field five"
//                     labelClass="col-sm-4"
//                     className="col-sm-8"
//                     defaultValue={ this.state.article ? this.state.article.extra_field5 : ''}
//                 />
//                 </div>
//                 <div 
//                     className="text-center m-t-15"
//                     style={{
//                         width:'45%',
//                         float:'left',
//                         marginTop:16
//                     }}
//                 >
//                 <ul className="nav nav-pills nav-justified" role="tablist"><li className="nav-item waves-effect waves-light"><a className="nav-link active" data-toggle="tab" onClick={this.onSubmitHandler} href="#home-1" role="tab">Update</a></li></ul>
//                 </div>
//             </div>
//         )
//     }

//     toTitleCase = (str) => {
//         return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').substr(1).toLowerCase();
//     }

//     KeyFieldForm = (props) => {
//         return(
//             <div>
//                 <div className="form-group row">
//                     <InputBox
//                         label={this.toTitleCase(props.keyName || '')}
//                         onChange={this.onChangeHandler}
//                         lableLeft={true}
//                         field={props.keyName}
//                         placeholder={this.toTitleCase(props.keyName || '')}
//                         labelClass="col-sm-4"
//                         className="col-sm-8"
//                         defaultValue={ this.state.article ? this.state.article.extra_field1 : ''}
//                     />
//                 </div>
//                 <div 
//                     className="text-center m-t-15"
//                     style={{
//                         width:'45%',
//                         float:'left',
//                         marginTop:16
//                     }}
//                 >
//                 <ul className="nav nav-pills nav-justified" role="tablist"><li className="nav-item waves-effect waves-light"><a className="nav-link active" data-toggle="tab" onClick={this.onSubmitHandler} href="#home-1" role="tab">Update</a></li></ul>
//                 </div>
//             </div>
//         )
//     }

//     ApcForm = (props) => {
//         let articleObj = this.props.article_data;
//         let dataArticle=[];
//         articleObj.map((item)=>{
//             return dataArticle.push({
//                 id:item.id,
//                 name:item.title,
//             });
//         });
//         let default_id = articleObj.find(x => x.id === this.props.article_id).id || null;
//         return(
//             <form>
//                 {this.state.loading && <Loading/>}
//                 <div className="form-group row">
//                    <SelectBox
//                         label="Article"
//                         onChange={this.onChangeHandler}
//                         field='article'
//                         className="col-sm-10"
//                         data={dataArticle} 
//                         defaultValue={default_id} 
//                         isRequired={true}   
//                     />
//                 </div>
//                 <div className="form-group row">
//                     {this.props.request_to && <SelectBox
//                         label="Request to"
//                         onChange={this.onChangeHandler}
//                         field='request_to'
//                         className="col-sm-10"
//                         isRequired={true}
//                         data={this.props.request_to ? this.props.request_to.results : []}
//                         defaultValue={this.props.request_to ? this.props.request_to.results[0].id : null}
//                     />} 
//                 </div>
//                 {this.props.licence_list &&
//                     <div className="form-group row">
//                         <SelectBox
//                             label="Licence"
//                             onChange={this.onChangeHandler}
//                             field='licence'
//                             className="col-sm-10"
//                             data={this.props.licence_list.results} 
//                             defaultValue={this.state.licence} 
//                             isRequired={true}   
//                         />
//                     </div>
//                 }
//                 <div className="form-group row">
//                     <TextBox
//                         label="Note"
//                         onChange={this.onChangeHandler}
//                         field='note'
//                         className="col-sm-10"
//                         placeholder="Note"
//                         defaultValue={this.state.name} 
//                     />    
//                 </div>
//                 {this.props.article_required && this.props.article_required.department_missing && 
//                     <div className="form-group row">
//                         <InputBox
//                             label="Department"
//                             onChange={this.onChangeHandler}
//                             className="col-sm-10"
//                             field='department'
//                             placeholder="Department"
//                             defaultValue={this.state.department}
//                         />
//                     </div>
//                 } 
//                 {this.props.article_required && this.props.article_required.funder_missing &&  <div className="form-group row">
//                     <InputBox
//                         label="Funder name"
//                         onChange={this.onChangeHandler}
//                         className="col-sm-10"
//                         field='funder_name'
//                         placeholder="Funder name"
//                         defaultValue={this.state.funder_name}
//                     />
//                 </div>} 
//                 {this.props.article_required && this.props.article_required.grant_number_missing && <div className="form-group row">
//                     <InputBox
//                         label="Grant number"
//                         onChange={this.onChangeHandler}
//                         className="col-sm-10"
//                         field='grant_number'
//                         placeholder="Grant number"
//                         defaultValue={this.state.grant_number}
//                     />
//                 </div>}
//                 <div className="text-center">
//                     <button onClick={this.submitAuthorApcFund} type="button" className="m-3 col-sm-3 btn btn-lg btn-primary waves-effect waves-light">Submit</button>
//                     {!props.deleting && <button className={`m-3 col-sm-3 btn btn-lg btn-${props.NoBtnType || 'primary'}`} onClick={(e) => {
//                         e.preventDefault();
//                         props.onCancel ? props.onCancel() : props.ClearStatus();
//                     }}>{props.NoText || 'OK'}</button>}
//                     {props.waitingMsg && <p>{props.waitingMsg}</p>}
//                 </div>

//             </form>
//         )
//     }
//     async componentDidMount(){
//         if(this.props.article_id){
//             await this.props.getLicenseList();
//             await this.props.ArticleFull();
//             let article_id = this.props.article_id;
//             await this.props.getArticleRequiredField(article_id);
//             await this.props.getArticleApcRequestOrganisation(article_id);
//         }
//         if(this.props.required_id){
//             await this.props.getArticleRequired(this.props.required_id);
//             this.setState({
//                 article:this.props.article
//             })
//         }

//     }
//     render(){
//        let props = this.props;
//        let className = this.props.className ? this.props.className : 'col-sm-4';
//        let showPopMessage;
//         if(this.props.showpop){
//          showPopMessage = <div className="showmessage" style={{ position: 'fixed', zIndex: 1002, width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
//                             <div className={`${className} showpop-message text-center alert`} style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
//                                 <Icon type="close-circle"  onClick={(e)=>this.props.onClose(e)}/>
//                                 <p>{props.showtitle}</p>
//                             </div>
//                         </div>
//        }else{
//         showPopMessage = <div style={{ position: 'fixed', zIndex: 1002, backgroundColor: 'rgba(0, 0, 0, 0.64)', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
//                 <div className={`${className} text-center bg-white alert`} style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
//                     <h4>{props.title}</h4>
//                     <div>
//                         {props.msg}
//                     </div>
//                     <div>
//                         {props.apcForm && this.ApcForm(props)}
//                     </div>
//                     <div>
//                         {props.extraField && this.ExtraFieldForm(props)}
//                     </div>
//                     <div>
//                         {props.keyField && this.KeyFieldForm(props)}
//                     </div>
//                     <div 
//                         style={this.props.extraField  || this.props.keyField ? {
//                             marginTop:-24,
//                             marginRight:-16
//                         } : {} }
//                         className={this.props.extraField || this.props.keyField  ? '' : 'text-center'}>
//                         {!props.deleting && props.YesText && <button 
//                         className={`m-3 col-sm-${props.btnWidth || '4'} btn btn-${props.btnSize || 'lg'} btn-${props.type || 'primary'}`} onClick={(e) => {
//                                 e.preventDefault();
//                                 props.onPressOK()
//                             }}>{props.YesText || 'Yes'}</button>
//                         }

//                         {!props.apcForm && !props.deleting && <button 
//                              style={this.props.extraField || this.props.keyField  ? {
//                                 float:'right',
//                                 width: '45%',
//                                 height:37,
//                                 fontWeight:500,
//                                 fontSize:14
//                             }:{}}
//                         className={ this.props.extraField || this.props.keyField ? 'm-3 col-sm-6 btn btn-primary' :  `m-3 col-sm-${props.btnWidth || '4'} btn btn-${props.btnSize || 'lg'} btn-${props.NoBtnType || 'primary'}`} 

//                         onClick={(e) => {
//                             e.preventDefault();
//                             props.onCancel ? props.onCancel() : props.ClearStatus();
//                         }}>{props.NoText || 'OK'}</button>}
//                         {props.waitingMsg && <p>{props.waitingMsg}</p>}
//                     </div>
//                 </div>
//             </div>
//        }
//        return(
//            showPopMessage
//        )
//    } 
// }


// const mapStateToProps = (state) =>({
//     article_data: state.articles.article_full || false,
//     licence_list: state.articles.licence_list || false,
//     author_apc_fund_failed:state.articles.author_apc_fund_failed || false,
//     author_apc_fund_success:state.articles.author_apc_fund_success || false,
//     article: state.articles ? state.articles.article_single : false,
//     request_to: state.correction_request ? state.correction_request.article_apc_request_organistion : false,
//     article_required: state.correction_request ? state.correction_request.article_required_field : false
// })
// const mapDispatchToProps = (dispatch) => ({
//     ClearStatus: () => dispatch(ClearStatus()),
//     getLicenseList: () => dispatch(getLicenseList()),
//     ArticleFull: () => dispatch(GetArticleFull()),
//     createAuthorApcFund: (payload) => dispatch(createAuthorApcFund(payload)),
//     getArticleRequired: (id) => dispatch(getArticleRequired(id)),
//     UpdateArticleRequired: (id,payload) => dispatch(UpdateArticleRequired(id,payload)),
//     getArticleRequiredField: (payload) => dispatch(getArticleRequiredField(payload)),
//     getArticleApcRequestOrganisation: (payload) => dispatch(getArticleApcRequestOrganisation(payload)),
// })

// export const PopupBox = connect(mapStateToProps, mapDispatchToProps)(Popup);
