import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(10);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Steps Count</button>
            <Display name='Lenovo' steps={steps}></Display>
        </div>
    );
};

export default Watch;





/* import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    return (
        <div>
            <h1>This is my samrt Watch</h1>
            <h3>My current step: {steps}</h3>
            <button onClick={increaseSteps}>Step</button>
        </div>
    );
};

export default Watch; */