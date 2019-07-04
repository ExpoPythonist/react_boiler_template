import React from 'react';

class DashBoardContent extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className={"content-page "}>
                <div className={"content " + props.className}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="page-title-box">
                                    {props.title && <h4 className="page-title">{props.title}</h4>}
                                    {props.subtitle && <p>{props.subtitle}</p>}
                                </div>
                            </div>

                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoardContent