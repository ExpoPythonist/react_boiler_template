import React from 'react';
import { Link } from 'react-router-dom'

export class Resources extends React.Component {
    render() {
        return (
            <header className="header-area" style={{ backgroundImage: "url('/images/header-bg-2.png')", backgroundPosition: "right top" }}>
                <div className="container">
                    <div className="row equal-height">
                        <div className="col-xs-12 col-sm-12 col-md-5">
                            <div className="space-50"></div>
                            <h1 className="head-title wow fadeInLeft" data-wow-delay="0.6s">Resources</h1>
                            <div className="desc wow fadeInLeft" data-wow-delay="0.8s">
                                <p>OaMetrix simplifies the administrative processes among Institutions, Researchers, Funders and Publishers to manage and track OA and APC</p>
                            </div>
                            <Link to="/" className="bttn-1 bttn-ppl">Go Home</Link>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7">
                            <div className="hidden visible-xs visible-sm space-60"></div>
                            <figure className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="images/illustration-3.png" alt="illustration" />
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Resources