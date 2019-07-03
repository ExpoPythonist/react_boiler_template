import React from 'react';

export class ValidationMsg extends React.Component{
    state = {
        errorObject:{},
        validationObject:{},
        msg:this.props.msg
    }
    componentDidMount(){
        console.log(this.props.errorObject,'props object');
    }
    processErrorMessage(errorObject=null,validationObject=null){
        console.log(typeof(errorObject),'type of');
        let referenceObject = validationObject;
        Object.keys(errorObject).forEach(function(key) {
            let field_name = referenceObject[key] ? referenceObject[key] : key;
            console.log( field_name + ': ' + errorObject[key]);
        }); 
        console.log(validationObject);
    }
    render(){
        let errorObject = this.props.errorObject;
        let validationObject = this.props.validationObject;
        this.processErrorMessage(errorObject,validationObject);
        return(
            <div>
                {this.props.msg}    
            </div>
        )
    }
}


