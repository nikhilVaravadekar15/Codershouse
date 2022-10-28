import React from 'react'
import Navigation from '../components/shared/Navigation'

import StepPhoneEmail from "../pages/steps/StepPhoneEmail"
import StepOtp from "../pages/steps/StepOtp"
import { useState } from 'react'

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
};

function Authenticate() {
    const [step, setStep] = useState(1);
    const Step = steps[step]

    function onNext() {
        setStep((prevState) => {
            return prevState + 1
        })
    }

    return (
        <div className="Authenticate flex flex-col w-screen h-screen ">
            <Navigation />
            <div>
                <Step onNext={onNext} />
            </div>
        </div>
    )
}

export default Authenticate
