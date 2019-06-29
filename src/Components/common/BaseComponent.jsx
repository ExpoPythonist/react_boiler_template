import React from "react"


 class BaseComponent extends React.Component{ 
  
  log = (...params) => {
    try {
      if (process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === "development") {
        console.log(...params);
      }
    } catch (error) { }
  }
}

export default BaseComponent ;