import BaseComponent from '../../components/BaseComponent';

class GroupCtx extends BaseComponent{
    constructor(props) {
        super(props)
        this.state = {
            role_name: ''
        }
    }
    

    addGroup = (e) => {
        e.preventDefault();
        this.apiStatus = "starting"
    }

    onChangeHandler = (value) => {
        this.setState(() => {
            Object.assign(this.state, value)
        })
    }
}

export const GroupContext = GroupCtx;