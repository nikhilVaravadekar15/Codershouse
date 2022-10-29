import React, { useState } from 'react'
import Card from '../../components/shared/Card'
import Button from '../../components/shared/Button'

function StepSetName({ onNext }) {
  const [value, setValue] = useState({ fullname: "" })
  return (
    <div className="setName w-full h-full flex justify-center items-center mb-24">
      <Card
        title={"What's your full name?"}
        icon={"/assets/images/icons/emoji-icon__positive-winking-face.png"}
        alt={"name"}
      >
        <div className="pb-10 flex flex-col justify-center items-center ">
          <div className='w-full h-12 flex justify-center items-center bg-[#323232] rounded-lg'>
            <input type="text" name="fullname"
              placeholder="@your_name"
              value={value.fullname || ""}
              className="text mx-1 h-5/6 bg-transparent focus:border-none focus:outline-none"
              onChange={(e) => {
                  setValue({ fullname: e.target.value })
                }
              }
            />
          </div>
          <div className="flex justify-center items-center mt-4 text-[#959595]">
            <span>Please use real names at codeshouse :)</span>
          </div>
        </div>
        <div className="flex justify-center cursor-pointer mt-8 mb-2">
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
