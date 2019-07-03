import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = (props) => {
    if (props.type === 'flat') {
        return <div style={styles.flat}>
            <Loader
                type="Oval"
                color="#7a6fbe"
                height="50"
                width="50"
            />
        </div>
    } else {
        return (
            <div style={{ position: 'fixed', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.64)', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0 }}>
                <div className="text-center text-white" style={{ position: "absolute", top: '50%', left: '50%', zIndex: 999999, transform: 'translate(-50%, -50%)' }}>
                    <Loader
                        type="Bars"
                        color="#fff"
                        height="50"
                        width="50"
                    />
                    <h4>{props.msg}</h4>
                    {props.onCancel && <button className="btn btn-danger" onClick={(e) => {
                        e.preventDefault();
                        this.onCancel(false)
                    }}>Cancel</button>}
                </div>
            </div>
        )
    }
}

const styles = {
    flat: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        padding: '50px'
    }
}