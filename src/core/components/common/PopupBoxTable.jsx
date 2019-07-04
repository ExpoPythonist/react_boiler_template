import React from 'react';
import { connect } from 'react-redux';
import { ClearStatus } from '../../../openaccess/actions';
import { AccordionRow } from '../../../openaccess/components/common';


export const Popup = (props) => (
    <div style={{ position: 'fixed', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.64)', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
        <div className={`col-sm-12 text-center bg-white alert`} style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
            <h4>{props.title}</h4>
            <div className="tab-content">                
                <div className="tab-pane active  p-3" id="main-info-1" role="tabpanel">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav  nav-tabs-customs nav-justified">
                                <li className="nav-item">
                                    <span className="nav-link">Price GBP</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" role="tab">Price USD</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" role="tab">Price EUR</span>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div style={{width:'33.3333%',float:"left"}} className="tab-pane active  p-3" id={"price-gbp-1"} role="tabpanel">
                                    <table className="table ">
                                        <tbody>
                                            <AccordionRow
                                                name="APC GBP"
                                                sign="£"
                                                price={props.prices[0].pub_fee_gbp}
                                            />
                                            <AccordionRow
                                                name="Submission Fee GBP"
                                                sign="£"
                                                price={props.prices[0].submission_fee_gbp}
                                            />
                                            <AccordionRow
                                                name="Colour charge GBP"
                                                sign="£"
                                                price={props.prices[0].colour_charge_gbp}
                                            />
                                            <AccordionRow
                                                name="Page charge GBP"
                                                sign="£"
                                                price={props.prices[0].page_charge_gbp}
                                            />
                                            <AccordionRow
                                                name="Other charge GBP"
                                                sign="£"
                                                price={props.prices[0].other_charge_gbp}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{width:'33.3333%',float:"left"}} className="tab-pane active p-3" id={"price-usd-1"} role="tabpanel">
                                    <table className="table ">
                                        <tbody>
                                            <AccordionRow
                                                name="APC USD"
                                                sign="$"
                                                price={props.prices[0].pub_fee_usd}
                                            />
                                            <AccordionRow
                                                name="Submission Fee USD"
                                                sign="$"
                                                price={props.prices[0].submission_fee_usd}
                                            />
                                            <AccordionRow
                                                name="Colour charge USD"
                                                sign="$"
                                                price={props.prices[0].colour_charge_usd}
                                            />
                                            <AccordionRow
                                                name="Page charge USD"
                                                sign="$"
                                                price={props.prices[0].page_charge_usd}
                                            />
                                            <AccordionRow
                                                name="Other charge USD"
                                                sign="$"
                                                price={props.prices[0].other_charge_usd}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{width:'33.3333%',float:"left"}} className="tab-pane active p-3" id={"price-eur-1"} role="tabpanel">
                                    <table className="table ">
                                        <tbody>
                                            <AccordionRow
                                                name="APC EUR"
                                                sign="€"
                                                price={props.prices[0].pub_fee_eur}
                                            />
                                            <AccordionRow
                                                name="Submission Fee EUR"
                                                sign="€"
                                                price={props.prices[0].submission_fee_eur}
                                            />
                                            <AccordionRow
                                                name="Colour charge EUR"
                                                sign="€"
                                                price={props.prices[0].colour_charge_eur}
                                            />
                                            <AccordionRow
                                                name="Page charge EUR"
                                                sign="€"
                                                price={props.prices[0].page_charge_eur}
                                            />
                                            <AccordionRow
                                                name="Other charge EUR"
                                                sign="€"
                                                price={props.prices[0].other_charge_eur}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
            {!props.deleting && props.YesText && <button className={`m-3 col-sm-4 btn btn-lg btn-${props.type || 'primary'}`} onClick={(e) => {
                    e.preventDefault();
                    props.onPressOK()
                }}>{props.YesText || 'Yes'}</button>
            }

            {!props.deleting && <button className={`m-3 col-sm-4 btn btn-lg btn-${props.NoBtnType || 'primary'}`} onClick={(e) => {
                e.preventDefault();
                props.onCancel ? props.onCancel() : props.ClearStatus();
            }}>{props.NoText || 'Cancel'}</button>}
            {props.waitingMsg && <p>{props.waitingMsg}</p>}
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    ClearStatus: () => dispatch(ClearStatus())
})

export const PopupBoxTable = connect(undefined, mapDispatchToProps)(Popup);
