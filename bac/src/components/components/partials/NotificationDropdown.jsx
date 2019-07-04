/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom'
import { Icon } from 'antd';
import { PUBLISHER, INSTITUTION, FUNDER } from '../../data';

export const NotificationDropdown = ({ group }) => {
    const data = {
        pubnotification: [{
            icon: 'check-circle',
            name: 'Account approval'
        },
        {
            icon: 'dollar',
            name: 'Deposit funds'
        },
        {
            icon: 'fund',
            name: 'Fund threshold'
        },
        {
            icon: 'diff',
            name: 'Correction request'
        }],
        uninotification: [{
            icon: 'check-circle',
            name: 'Author request'
        },
        {
            icon: 'dollar',
            name: 'OA Account'
        },
        {
            icon: 'fund',
            name: 'Tokens/Offset fund'
        },
        {
            icon: 'diff',
            name: 'Fund threshold'
        },
        {
            icon: "check-square",
            name: 'Correction approval'
        }]
    }
    return (
        <li className="dropdown notification-list">
            <Link to="/dashboard" className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="ti-bell noti-icon"></i>
                <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                {/* <!-- item--> */}
                <div className="slimscroll notification-item-list">
                    {/* <!-- item--> */}
                    {group === PUBLISHER ?
                        data.pubnotification.map((item, i) => (
                            <Link to="#" className="dropdown-item notify-item active" key={i}>
                                <div className="notify-icon"><Icon type={item.icon} /></div>
                                <p className="notify-details">{item.name}</p>
                            </Link>
                        )) : group === INSTITUTION || group === FUNDER ? data.uninotification.map((item, i) => (
                            <Link to="#" className="dropdown-item notify-item active" key={i}>
                                <div className="notify-icon"><Icon type={item.icon} /></div>
                                <p className="notify-details">{item.name}</p>
                            </Link>
                        )) : null
                    }
                </div>
                {/* <!-- All--> */}
            </div>
        </li>
    )
}

export default NotificationDropdown;