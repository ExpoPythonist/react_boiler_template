import React from 'react';
import { connect } from 'react-redux'
import BaseComponent from '../../../core/components/BaseComponent';
import { logoutUserData } from '../../actions/Auth';
import { CHeader } from './Headers';
import { LeftSidebar } from './LeftSidebar';
import { AppSidebar } from '../../data';
import MenuItem from '../partials/dashboard/MenuItem';

export class Header extends BaseComponent {
  logoutUser = (e) => {
    this.props.logoutUser();
  }

  render() {
    // let { group } = this.props;

    let title = '',
      navigation = '';

    title = 'App Content'
    navigation = AppSidebar.map((context, i) => {
      return (
        !context.isHide && (
          <MenuItem
            context={context}
            key={i}
            baseUrl={context.to || ''}
          />
        )
      )
    })

    return (
      <div>
        {
          <CHeader logoutUser={this.logoutUser} title={title} />

        }
        <LeftSidebar navigation={navigation} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // group: state.auth.user && state.auth.group,
  token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUserData())
})

export const AuthHeader = connect(mapStateToProps, mapDispatchToProps)(Header)