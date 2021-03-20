import React from "react";

function Spacer(props){
    const height = props.height || 100;

    return <div style={{ height: height }} />;
}

export default Spacer;