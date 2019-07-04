import React from "react"


export default class Base extends React.Component {

    log = (...params) => {
        try {
            if (process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === "development") {
                console.log(...params);
            }
        } catch (error) { }
    }
}

export const BaseComponent = Base;