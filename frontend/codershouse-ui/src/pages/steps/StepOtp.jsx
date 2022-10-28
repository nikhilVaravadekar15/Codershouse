import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button'
import Card from '../../components/shared/Card'

function StepOtp({ onNext }) {
  return (
    <div className="w-full h-full flex justify-center items-center mb-28">
      <Card
        title={"Enter the code we texted you"}
        icon={"/assets/images/icons/icon__lock.png"}
        alt={"code"}
      >
        <div className="pb-10">
          <div className="flex justify-center items-center gap-2 pb-2">
            <div className="w-14 h-14 flex justify-center items-center rounded-lg bg-slate-500">
              <input type="number" minLength="1" maxLength="1" min="0" max="9" className="w-12 h-12 text-black text-center rounded-lg" />
            </div>
            <div className="w-14 h-14 flex justify-center items-center rounded-lg bg-slate-500">
              <input type="number" minLength="1" maxLength="1" min="0" max="9" className="w-12 h-12 text-black text-center rounded-lg" />
            </div>
            <div className="w-14 h-14 flex justify-center items-center rounded-lg bg-slate-500">
              <input type="number" minLength="1" maxLength="1" min="0" max="9" className="w-12 h-12 text-black text-center rounded-lg" />
            </div>
            <div className="w-14 h-14 flex justify-center items-center rounded-lg bg-slate-500">
              <input type="number" minLength="1" maxLength="1" min="0" max="9" className="w-12 h-12 text-black text-center rounded-lg" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#959595] ">
            <span>Didn't receive?</span>
            <Link to="/" >Tap to resend</Link>
          </div>
        </div>

        <div className="flex justify-center cursor-pointer my-4">
          <Button
            classname={"py-3 px-8"}
            title={"Next"}
            icon={"/assets/images/icons/icon__arrow_forward.png"}
            alt={"arrow"}
            onClick={onNext}>
          </Button>
        </div>
      </Card>
    </div>
  )
}


export default StepOtp

