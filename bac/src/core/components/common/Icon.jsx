import React from 'react';
import BaseComponent from '..';

class IconImg extends BaseComponent {
    render() {
        return (
            <div className="icon">
             <img src="/assets/images/info.png" alt="" width="100" />
            </div>
        )
    }
}


export const Icon = IconImg;