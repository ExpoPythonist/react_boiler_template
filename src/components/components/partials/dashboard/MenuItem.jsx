import React from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../../route/Settings';

class MenuItem extends React.Component {
    render() {
        const { context, baseUrl } = this.props;
        const content = context.content;
        return (
            <li className={history.location.pathname.includes(context.to) ? 'active' : ''}>
                <NavLink exact={context.exact} activeClassName="active" to={context.to ? context.to : "#"} className="waves-effect">
                    <i className={`mdi ${context && context.icon}`}></i>
                    <span>{context && context.label}
                        {context.content &&
                            <span className="float-right menu-arrow">
                                <i className={'mdi mdi-chevron-right'}></i>
                            </span>
                        }
                    </span>
                </NavLink>

                {/* Dropdown Menu */}
                {content &&
                    <ul
                        className={history.location.pathname.includes(context.to) ? "submenu collapse in" : "submenu collapse"}
                    >
                        {content.map((item, i) => {
                            const submenu = !item.isHide && <li key={item.label} className={history.location.pathname.includes(item.to) ? 'active' : ''} >
                                <NavLink
                                    onClick={() => {
                                        this.setState({ isActive: true })
                                    }}
                                    activeClassName="active"
                                    to={baseUrl + item.to || '#'}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                            return submenu;
                        })}
                    </ul>
                }
            </li>
        )
    }
}


export default MenuItem;