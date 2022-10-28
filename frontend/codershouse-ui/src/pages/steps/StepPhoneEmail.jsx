import React, { useState } from 'react'
import Button from '../../components/shared/Button'
import Card from '../../components/shared/Card';

function StepPhoneEmail({ onNext }) {
  const [authMethod, setAuthMethod] = useState("otp");
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3 mb-28">
      <div className="w-2/5 flex justify-end ">
        <div className="flex justify-center items-center gap-3 ">
          <div className={`w-14 h-14 rounded-lg p-1 flex justify-center items-center cursor-pointer ${authMethod == "otp" ? "bg-[#0077ff]" : "bg-[#1d1d1d]"}`}
            onClick={() => setAuthMethod("otp")}
          >
            <img src="/assets/images/icons/icon__smartphone.png"
              alt="smartphone" draggable="false"
              className="w-4/5"
            />
          </div>
          <div className={`w-14 h-14 rounded-lg p-1 flex justify-center items-center cursor-pointer ${authMethod == "mail" ? "bg-[#0077ff]" : "bg-[#1d1d1d]"}`}
            onClick={() => setAuthMethod("mail")}
          >
            <img src="/assets/images/icons/icon__mail.png"
              alt="smartphone" draggable="false"
              className="w-4/5"
            />
          </div>
        </div>
      </div>
      {
        authMethod == "otp" ?
          <Card
            title={"Enter your phone number"}
            icon={"/assets/images/icons/icon__phone.png"}
            alt={"phone"}>
            <SetPhone onNext={onNext} />
          </Card>
          :
          <Card
            title={"Enter your email id"}
            icon={"/assets/images/icons/icon__envelope.png"}
            alt={"phone"}>
            <SetEmail onNext={onNext} />
          </Card>
      }
    </div>
  )
}


function SetPhone({ onNext }) {
  return (
    <div>
      <div className="pb-10">
        <div className="flex justify-center items-center">
          <div className="w-14 h-14 rounded-lg p-1 flex justify-center items-center cursor-pointer bg-[#1d1d1d]">
            <img src="/assets/images/flags/india.png" alt="india" draggable="false" className="w-4/5" />
          </div>
          <div>
            <input type="text" name="phonenumber" className='text-black' />
          </div>
        </div>
      </div>
      <div className="flex justify-center cursor-pointer my-4">
        <Button
          classname={"py-3 px-16"}
          title={"Next"}
          icon={"/assets/images/icons/icon__arrow_forward.png"}
          alt={"arrow"}
          onClick={onNext}>
        </Button>
      </div>
      <div className="flex justify-center ">
        <p className="text-sm font-light leading-2 w-2/3 text-center text-gray-400">
          By entering your number, you're agreeing to our
          <span className="text-[#0077ff] mx-1 cursor-pointer ">Terms and Service</span>
          and
          <span className="text-[#0077ff] mx-1 cursor-pointer ">Privacy Policy</span>
          .<br /> Thanks!
        </p>
      </div>
    </div>
  )
}

function SetEmail({ onNext }) {

  return (
    <div>
      <div className="pb-10">
        <div className="flex justify-center items-center">
          <div>
            <input type="email" name="email" className='text-black' />
          </div>
        </div>
      </div>
      <div className="flex justify-center cursor-pointer my-4">
        <Button
          classname={"py-3 px-16"}
          title={"Next"}
          icon={"/assets/images/icons/icon__arrow_forward.png"}
          alt={"arrow"}
          onClick={onNext}>
        </Button>
      </div>
      <div className="flex justify-center ">
        <p className="text-sm font-light leading-2 w-2/3 text-center text-gray-400">
          By entering your email id, you're agreeing to our
          <span className="text-[#0077ff] mx-1 cursor-pointer ">Terms and Service</span>
          and
          <span className="text-[#0077ff] mx-1 cursor-pointer ">Privacy Policy</span>
          .<br /> Thanks!
        </p>
      </div>
    </div>
  )
}


export default StepPhoneEmail
