import React from 'react'
import Card from '../../components/shared/Card'
import Button from '../../components/shared/Button'

function StepSetAvatar({ onNext }) {

  return (
    <div className="w-full h-full flex justify-center items-center mb-28">
      <Card
        title={"Okay, Elon musk!"}
        icon={"/assets/images/icons/emoji-icon__beaming-monkey.png"}
        alt={"avatar"}
      >
        <div className="flex justify-center items-center gap-2 -mt-4 text-[#959595] ">
          <span>How's this photo?</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 py-8 cursor-pointer">
          <div className="mt-2">
            <div className="w-44 h-44 border rounded-full flex items-center justify-center bg-[#0077ff]"
              style={{
                width: "166px",
                height: "166px"
              }}
            >
              <img src="/assets/images/icons/icon__avatar.png" alt="avatar"
                draggable="false" className="rounded-full"
                style={{
                  width: "154px",
                  height: "154px"
                }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-[#0077ff] cursor-pointer ">Choose a different photo</span>
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


export default StepSetAvatar
