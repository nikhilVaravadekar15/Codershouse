import React from 'react'
import Navigation from '../components/shared/Navigation'

function Profile() {

  return (
    <div className="Profile flex flex-col w-screen h-screen">
      <Navigation />
      <div className="w-full h-full flex justify-center items-center ">
        Profile page
      </div>
    </div>
  )
}

export default Profile
