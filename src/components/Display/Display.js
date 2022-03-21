import React from 'react';
import Dial from '../Dial/Dial';


const sty = {
    border: '2px solid green',
    margin: '20px',
    padding: '10px',
}
const Display = (props) => {
    return (
        <div style={sty}>
            <h2>Name: {props.name}</h2>
            <p>Today is : {props.steps}</p>
            <Dial steps={props.steps}></Dial>

        </div>
    );
};

export default Display;