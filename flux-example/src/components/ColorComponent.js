import React from "react";

export default class ColorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "lightgrey"
        }
    }
    
    render() {
        return (
            <div className="color-container" style={{backgroundColor: this.state.color}}/>
        );
    }
}
