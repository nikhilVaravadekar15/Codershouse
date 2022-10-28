import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'
import Card from '../components/shared/Card'
import Navigation from '../components/shared/Navigation'

import StepPhoneEmail from "../pages/steps/StepPhoneEmail"
import StepOtp from "../pages/steps/StepOtp"
import StepSetName from "../pages/steps/StepSetName"
import StepSetAvatar from "../pages/steps/StepSetAvatar"
import StepUsername from "../pages/steps/StepUsername"
import { useState } from 'react'

const steps = {
        1: StepPhoneEmail,
        2: StepOtp,
        3: StepSetName,
        4: StepSetAvatar,
        5: StepUsername,
    };

function Register() {
  const [step, setStep] = useState(2);
  const Step = steps[step]
  return (
    <div className="Register flex flex-col w-screen h-screen">
      <Navigation />
      <div className="w-full h-full flex justify-center items-center mb-28">
        <Card
          title={"Welcome to Codershouse!"}
          icon={"/assets/images/logo__codershouse-32x32.png"}
          alt={"logo"}
        >
          <Step/>
        </Card>
      </div>
    </div>
  )
}

export default Register
