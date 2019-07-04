import React from 'react';
const PubContext = React.createContext();

export class PubProvider extends React.Component{
    render(){
        return (
            <PubContext.Provider>
                {this.props.children}
            </PubContext.Provider>
        )
    }
}

export const PubConsumber = PubContext.Consumer;