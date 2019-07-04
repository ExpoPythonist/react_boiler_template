import React from 'react';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area" style={{ backgroundImage: 'url(/images/footer-shape.png)', backgroundPosition: 'left top' }}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row start-height">
                            <div className="col-6 col-md-6 col-lg-4 xs-full">
                                <h4 className="footer-title">Company</h4>
                                <ul className="footer-list">
                                    <li><Link to="#">About</Link>
                                    </li>
                                    <li><Link to="#">Terms</Link>
                                    </li>
                                    <li><Link to="#">Privacy</Link>
                                    </li>
                                    <li><Link to="#">Cookies</Link>
                                    </li>
                                    <li><Link to="#">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-6 col-lg-4 xs-full">
                                <h4 className="footer-title">Address</h4>
                                <ul className="footer-list">9 Merritt Road
                                <br />Didcot, OX11 7DF
                                <br />United Kingdom
                                <br />Tel: +44 (0) 1235 811 351
                                <br />email: info@escienta.com
                                <br />
                                    <li><Link to="#">www.oametrix.io</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                                <img src="/images/logo-sm.png" style={{ filter: 'brightness(100)', width: '100px' }} alt="Footer Logo" />
                                <div className="space-30"></div>
                                <p>Please contact us if you would like see a live demo of OaMetrix or have
                            any suggestion.</p>
                                <div className="space-20"></div> <Link to="#" className="bttn-1 bttn-ppl">Request A Demo</Link>
                                <div className="hidden d-block d-sm-none d-none d-sm-block d-md-none space-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-bottom">
                    <div className="container">
                        <div className="row start-height">
                            <div className="col-12 col-md-5 mx-auto">
                                <h4 className="text-white">OaMetrix</h4>
                                <p>Copyright &#xA9; 2018 - All Rights Reserved - www.oametrix.io</p>
                                <div className="hidden d-block d-sm-none space-30"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>
        )
    }
}

export default Footer
