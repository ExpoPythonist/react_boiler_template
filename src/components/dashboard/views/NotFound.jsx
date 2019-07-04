import React from 'react';

export class NotFound extends React.Component {
    render() {
        return (
            <header className="header-area" style={{ height: '' }}>
                <div className="container">
                    <div className="row equal-height" style={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '100px'
                    }}>
                        <div className="col-md-4">
                            <div className="hidden visible-xs visible-sm space-60"></div>
                            <figure className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="/assets/images/notfound.jpg" alt="illustration" />
                            </figure>
                        </div>
                        <div className="col-md-4">
                            <div className="space-50"></div>
                            <h1 className="head-title wow fadeInLeft text-danger" style={{ fontSize: 80, fontWeight: 900, }} data-wow-delay="0.6s">404!</h1>
                            <h2 className="head-title wow fadeInLeft">Page Not Initialized</h2>
                            <div className="desc wow fadeInLeft" data-wow-delay="0.8s">
                                <p>OaMetrix simplifies the administrative processes among Institutions, Researchers, Funders and Publishers to manage and track OA and APC</p>
                            </div>
                            <button
                                onClick={() => this.props.history.goBack()}
                                className="bttn-1 bttn-ppl btn-primary btn"
                            >Go Back</button>
                            <button
                                onClick={() => this.props.history.push('/')}
                                className="ml-2 bttn-1 bttn-ppl btn-primary btn"
                            >Home</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}



export default NotFound