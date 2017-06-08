import React from 'react'

const User = ({currentUser}) => {
  return (
    <div>
      <h4>{currentUser.name}</h4>
      <h4>{currentUser.email}</h4>
    </div>
  )
}

export default User
