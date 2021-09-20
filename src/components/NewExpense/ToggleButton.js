import React from 'react';
import './ToggleButton.css';

const ToggleButton = (props) => {
    return(
                <button onClick={props.onClick}>Add Expense</button>
    )
}

export default ToggleButton;