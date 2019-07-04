import React from 'react';
import BaseComponent from '../../../core/components/BaseComponent';

export class Footer extends BaseComponent {
    render() {
        return (
            <footer className="footer" style={{position: 'fixed'}}>
                © 2018 OaMetrix
            </footer>
        )
    }
}

export const AuthFooter = Footer
