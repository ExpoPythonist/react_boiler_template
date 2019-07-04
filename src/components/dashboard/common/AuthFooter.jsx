import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" style={{ position: 'fixed' }}>
                © 2018 OaMetrix
            </footer>
        )
    }
}

export const AuthFooter = Footer
