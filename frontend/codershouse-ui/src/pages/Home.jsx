import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'
import Card from '../components/shared/Card'
import Navigation from '../components/shared/Navigation'

function Home() {

  return (
    <div className="Home flex flex-col w-screen h-screen">
      <Navigation />
      <div className="w-full h-full flex justify-center items-center mb-28">
        <Card
          title={"Welcome to Codershouse!"}
          icon={"/assets/images/logo__codershouse-32x32.png"}
          alt={"logo"}
        >
          <div className="pb-10">
            <p className="text-lg font-normal leading-8	">
              We’re working hard to get Codershouse ready for everyone!
              While we wrap up the finishing youches, we’re adding people
              gradually to make sure nothing breaks :)
            </p>
          </div>
          <div className="flex justify-center cursor-pointer my-4">
            <Button
              title={"Get your username"}
              icon={"/assets/images/icon__arrow_forward.png"}
              alt={"arrow"}>
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#0077ff] cursor-pointer ">
            <span>Have an invite text?</span>
            <Link to="/" className="font-bold text-lg">Sign in</Link>
          </div>
        </Card>
      </div>
    </div>
  )
}


export default Home
