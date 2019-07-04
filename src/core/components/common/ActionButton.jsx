import React from 'react';
import BaseComponent from '..';

class Btn extends BaseComponent {
  render() {
    let { action, text } = this.props;
    let name = "primary"
    switch (text.toLowerCase()) {
      case 'approve': {
        name = 'primary'
        break
      }
      case 'rejected': {
        name = 'danger'
        break
      }
      case 'approved': {
        name = 'success'
        break
      }
      case 'reject': {
        name = 'warning'
        break
      }
      case 'correction_request': {
        name = 'secondary'
        break
      }
      case 'correction_requested': {
        name = 'secondary'
        break
      }
      case 'correction_request_approve': {
        name = 'secondary'
        break
      }
      case 'correction request': {
        name = 'secondary'
        break
      }
      case 'apc fund requested': {
        name = 'info'
        break
      }
      case 'pending': {
        name = 'primary'
        break
      }
      case 'request apc fund': {
        name = 'secondary'
        break
      }
      case 'delete': {
        name = 'danger'
        break
      }
      case 'create': {
        name = 'primary'
        break
      }
      case 'update': {
        name = 'warning'
        break
      }
      case 'upload': {
        name = 'primary'
        break
      }
      case 'download': {
        name = 'primary'
        break
      }
      default: {
        name = action
        break
      }
    }

    return (
      <p className="m-1">
        <button
          type={this.props.type}
          className={`btn btn-${name} btn-sm ${action !== 'no_action' && 'waves-effect'}`}
          onClick={(e) => {
            e.preventDefault();
            this.props.onClickHander && this.props.onClickHander(e)
          }}
          style={{ width: '130px',cursor:'default' }}
        >
          {this.props.text}
        </button>
      </p>

    )
  }
}


export const ActionButton = Btn;