import React, { useState } from 'react'
import Card from '../../components/shared/Card'
import Button from '../../components/shared/Button'


function StepSetName({ onNext }) {
  const [value, setValue] = useState({ username: "" })
  return (
    <div className="setName w-full h-full flex justify-center items-center mb-28">
      <Card
        title={"Pick a username"}
        icon={"/assets/images/icons/emoji-icon__grinning-squinting-face.png"}
        alt={"username"}
      >
        <div className="pb-10">
          {/* <div className="flex justify-center items-center pb-2">
            <input type="text" name="fullname" className='text-black' placeholder='@elon_Musk' />
          </div> */}

          <div className='w-full h-12 flex justify-center items-center bg-[#323232] rounded-lg'>
            <input type="text" name="fullname"
              placeholder="@username"
              value={value.username || ""}
              className="text mx-1 h-5/6 bg-transparent focus:border-none focus:outline-none"
              onChange={(e) => {
                  setValue({ username: e.target.value })
                }
              }
            />
          </div>

          <div className="flex justify-center items-center gap-2 mt-4 text-[#959595] ">
            <span>Username can be used for the login!</span>
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
