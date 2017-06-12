import React from 'react'

const User = ({viewedUser}) => {
  return (
    <div>
      <h4>{viewedUser && viewedUser.name}</h4>
      <h4>{viewedUser && viewedUser.email}</h4>
    </div>
  )
}

export default User
