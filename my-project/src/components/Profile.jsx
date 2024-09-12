import React from 'react'
import ProfileData from './ProfileData'
function Profile() {
  return (
    <>
    <ProfileData
    name="Jatin Tekam"
    age={20}
    hobby={
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum v</div>
    }>
        <h1>This Is My Frist React Program</h1>
        <button className='border-2 p-2 rounded-lg text-white'>Contact Me</button>
    </ProfileData>

    <ProfileData
    name="Kunal Joshi"
    age={20}
    hobby={
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum v</div>
    }>
        <h1>This Is My Frist React Program</h1>
        <button className='border-2 p-2 rounded-lg text-white'>Contact Me</button>
    </ProfileData>
    </>
  )
}

export default Profile