import React, { useState } from 'react'
import Navigation from '../components/shared/Navigation'
import StepSetName from './steps/StepSetName'
import StepSetAvatar from './steps/StepSetAvatar'
import StepUsername from './steps/StepUsername'

const steps = {
    3: StepSetName,
    4: StepSetAvatar,
    5: StepUsername
};

function Activate() {

    const [step, setStep] = useState(3);
    const Step = steps[step]

    function onNext() {
        setStep((prevState) => {
            return prevState + 1
        })
    }
    return (
        <div className="Activate flex flex-col w-screen h-screen">
            <Navigation />
            <div>
                <Step onNext={onNext} />
            </div>
        </div>
    )
}


export default Activate
