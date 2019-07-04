import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import BaseComponent from '../../../core/components/BaseComponent';
import '../../../static/styles/index.scss'

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar mainmenu-area fixed-top navbar-expand-md" data-spy="affix" data-offset-top="200">
        <div className="container">
          <div className="equal-height w-100">
            <div className="site-branding">
              <Link to=""><img src="/images/oametrix_logo.png" width="100" alt="OaMetrix" /></Link>
            </div>
            <div className="primary-menu">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/resources" activeClassName="is-active" exact={true} className="nav-link">Resources</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" activeClassName="is-active" exact={true} className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" activeClassName="is-active" exact={true} className="nav-link">Contact us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signin" activeClassName="is-active" exact={true} className="nav-link">Sign in</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" activeClassName="is-active" exact={true} className="nav-link">Sign up</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  newState: 'Hello'
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header)