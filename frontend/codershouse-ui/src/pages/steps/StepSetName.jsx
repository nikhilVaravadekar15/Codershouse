import React from 'react'
import Card from '../../components/shared/Card'
import Button from '../../components/shared/Button'

function StepSetName({ onNext }) {

  return (
    <div className="setName w-full h-full flex justify-center items-center mb-28">
      <Card
        title={"What's your full name?"}
        icon={"/assets/images/icons/emoji-icon__positive-winking-face.png"}
        alt={"name"}
      >
        <div className="pb-10">
          <div className="flex justify-center items-center pb-2">
            <input type="text" name="fullname" className='text-black' />
          </div>
          <div className="flex justify-center items-center gap-2 mt-4 text-[#959595] ">
            <span>Please use real names at codeshouse :)</span>
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

export default StepSetName
