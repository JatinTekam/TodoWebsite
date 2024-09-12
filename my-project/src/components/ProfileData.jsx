import React from 'react'

function ProfileData(props) {
    const {name,age,hobby,children}=props;
  return (
    <>
    <h1>Name:-{name}</h1>
    <h1>age:-{age}</h1>
    <p>Hobby:-{hobby}</p>
    <p>{children}</p>
    </>
  )
}

export default ProfileData