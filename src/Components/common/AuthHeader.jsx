import React from 'react';
import { connect } from 'react-redux'
import BaseComponent from '../../../core/components/BaseComponent';
import { logoutUserData } from '../../openaccess/actions';
import { CHeader } from './Headers';
import { LeftSidebar } from './LeftSidebar';
import { AppSidebar } from '../../Routes/data';
import MenuItem from '../partials/dashboard/MenuItem';

export class Header extends BaseComponent {
  logoutUser = (e) => {
    this.props.logoutUser();
  }

  render() {

    let title = '',
      navigation = '';
    // Hub
    title = 'OaMetrix - Hub'
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
  token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUserData())
})

export const AuthHeader = connect(mapStateToProps, mapDispatchToProps)(Header)