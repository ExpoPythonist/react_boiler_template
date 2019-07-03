import React from 'react';
import { connect } from 'react-redux'

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="home-page"></div>

                <header className="header-area" style={{ backgroundImage: "url('/images/header-bg-2.png')", backgroundPosition: "right top" }}>
                    <div className="container">
                        <div className="row equal-height">
                            <div className="col-xs-12 col-sm-12 col-md-5">
                                <div className="space-50"></div>
                                <h2 className="head-title wow fadeInLeft" data-wow-delay="0.6s">Manage, track and analyse your institution’s OA publications and APC funds. </h2>
                                <div className="desc wow fadeInLeft" data-wow-delay="0.8s">
                                    <p>OaMetrix simplifies the administrative processes among Institutions, Researchers, Funders and Publishers to manage and track OA and APC</p>
                                </div>
                                {/* <div className="space-20"></div>
                        <a href="" className="bttn-1 bttn-ppl wow fadeInLeft" data-wow-delay="1s">Ask for demo</a>
                        <a href="https://www.youtube.com/watch?v=HuyWI5SELds" className="bttn-play-icon-text video-popup wow fadeInLeft" data-wow-delay="1.2s"><i className="fas fa-play"></i>Watch Intro</a>
                        <div className="space-50"></div>
                        <div className="clients dots-none">
                            <div className="item">
                                <img src="images/client-1.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-2.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-3.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-4.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-5.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-6.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-7.png" alt="">
                            </div>
                            <div className="item">
                                <img src="images/client-8.png" alt="">
                            </div>
                        </div> */}
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-7">
                                <div className="hidden visible-xs visible-sm space-60"></div>
                                <figure className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="images/header-shape-2.png" alt="illustration" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="page-title">
                                    <h3 className="title">OaMetrix</h3>
                                    <div className="desc">OaMetrix aggregates accepted articles from a multitude of publishers to save time, money and simplify the management of OA publishing.</div>
                                    <div className="space-60"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row equal-height">
                            <div className="col-xs-12 col-sm-5 text-center">
                                <figure className="text-left">
                                    <img src="images/illustration-3.png" alt="" />
                                </figure>
                                <div className="space-30 hidden visible-xs"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="single-service-two">
                                    <h5 className="icon-title">
                                        <span className="icon"><i className="fa fa-th"></i></span>Dashboard
                                </h5>
                                    <div className="space-10"></div>
                                    <h3 className="title">View accepted manuscripts</h3>
                                    <p>With OaMetrix, OA administrators can easily keep up-to-date with the latest articles accepted for publication with several publishers from authors affiliated with your institution.</p>

                                </div>
                            </div>
                        </div>
                        <div className="space-50"></div>
                        <div className="row equal-height revers">
                            <div className="col-xs-12 col-sm-5 text-center">
                                <figure className="text-right xs-left">
                                    <img src="images/illustration-2.png" alt="" />
                                </figure>
                                <div className="space-30 hidden visible-xs"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="single-service-two">
                                    <h5 className="icon-title">
                                        <span className="icon"><i className="far fa-lightbulb"></i></span>OA agreements
                                </h5>
                                    <div className="space-10"></div>
                                    <h3 className="title">Manage OA agreements with multiple publishers and universities.</h3>
                                    <p>A single online platform to create and manage the entirety of open access prepayment deals between publishers, univrsities and funders.</p>

                                </div>
                            </div>
                        </div>
                        <div className="space-50"></div>
                        <div className="row equal-height">
                            <div className="col-xs-12 col-sm-5 text-center">
                                <figure className="text-left">
                                    <img src="images/illustration-1.png" alt="" />
                                </figure>
                                <div className="space-30 hidden visible-xs"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="single-service-two">
                                    <h5 className="icon-title">
                                        <span className="icon"><i className="fa fa-object-group"></i></span>Funding request
                                </h5>
                                    <div className="space-10"></div>
                                    <h3 className="title">OaMetrix simplify authors' funding requests.</h3>
                                    <p>OaMetrix has been designed to make the Open Access funding request process easier and quicker for authors.</p>

                                </div>
                            </div>
                        </div>
                        <div className="space-50"></div>
                        <div className="row equal-height revers">
                            <div className="col-xs-12 col-sm-5 text-center">
                                <figure className="text-right xs-left">
                                    <img src="images/illustration-3.png" alt="" />
                                </figure>
                                <div className="space-30 hidden visible-xs"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="single-service-two">
                                    <h5 className="icon-title">
                                        <span className="icon"><i className="fa fa-sticky-note"></i></span>Report
                                </h5>
                                    <div className="space-10"></div>
                                    <h3 className="title">One click reports.</h3>
                                    <p>OaMetrix provides readymade and comprehensive downloadable reports and visual charts for Publishers, Institutions and funders.</p>

                                </div>
                            </div>
                        </div>
                        <div className="space-50"></div>
                        <div className="row equal-height">
                            <div className="col-xs-12 col-sm-5 text-center">
                                <figure className="text-left">
                                    <img src="images/illustration-2.png" alt="" />
                                </figure>
                                <div className="space-30 hidden visible-xs"></div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="single-service-two">
                                    <h5 className="icon-title">
                                        <span className="icon"><i className="fa fa-certificate"></i></span>
                                        Secure and scallable
                                </h5>
                                    <div className="space-10"></div>
                                    <h3 className="title">OaMetrix, a secured and user friendly platform</h3>
                                    <p>OaMetrix has been designed to highly scallable sccure application that publishers, universities and funders can confidently manage their open access prepayment deals.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="service-area gray-bg section-padding" id="service-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="page-title">
                                    <h3 className="title">Who is OaMetrix for?</h3>
                                    <div className="desc"></div>
                                    <div className="space-60"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-delay="0.7s">
                                <div className="single-service two">
                                    <div className="service-icon"><i className="fa fa-university"></i></div>
                                    <h3 className="title">Institutions</h3>
                                    <p>OaMetrix gives Institutional users an overview of the accepted manuscripts and effectively manage Open access publications and APC funding.</p>
                                    <a href="mailto:info@escienta.com" className="bttn-more ppl">Contact us</a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-delay="0.5s">
                                <div className="single-service two">
                                    <div className="service-icon"><i className="fa fa-book"></i></div>
                                    <h3 className="title">Publishers</h3>
                                    <p>Publishers easily can overview the accepted manuscripts from different Institutions, eScienta partner with publishers to sell and APC agreement.</p>
                                    <a href="mailto:info@escienta.com" className="bttn-more ppl">Contact us</a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="single-service two">
                                    <div className="service-icon"><i className="fa fa-graduation-cap"></i></div>
                                    <h3 className="title">Researchers</h3>
                                    <p>Researchers can request APC fund to their institution or pay direct from their department fund or share the APC with co-authors.</p>
                                    <br />
                                    <a href="mailto:info@escienta.com" className="bttn-more ppl">Contact us</a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="single-service two">
                                    <div className="service-icon"><i className="fa fa-building"></i></div>
                                    <h3 className="title">Funders</h3>
                                    <p>OaMetrix gives funders an overview of all funded research papers have been access with multitude of journals.</p>
                                    <br /><br />
                                    <a href="mailto:info@escienta.com" className="bttn-more ppl">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    test: 'asdf'
})

export default connect(mapStateToProps)(Home);