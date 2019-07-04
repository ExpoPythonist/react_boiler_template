import BaseComponent from '../../components/BaseComponent';

class RoleCtx extends BaseComponent{
    constructor(props) {
        super(props)
        this.state = {
            role_name: ''
        }
    }
    

    addRole = (e) => {
        e.preventDefault();
        this.apiStatus = "starting"
    }

    onChangeHandler = (value) => {
        this.setState(() => {
            Object.assign(this.state, value)
        })
    }
}

export const RoleContext = RoleCtx;