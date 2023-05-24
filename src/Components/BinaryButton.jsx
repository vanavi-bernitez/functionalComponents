import React from "react";

const BinaryButton = (props) => {
    return <button onClick={props.onClick}>{`${props.content} umbrella`}</button>
}

export {BinaryButton}