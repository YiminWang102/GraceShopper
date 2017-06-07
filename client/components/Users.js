import React from 'react';

const dummyUsers = [
        {name: "Andrew", email: 'andrew@andrew.com'},
        {name: "Matt", email: 'matt@matt.com'},
        {name: "David", email: 'david@david.com'},
        {name: "Jason", email: 'jason@jason.com'},
        {name: "Eli", email: 'eli@eli.com'},
        {name: "Emily", email: 'emily@emily.com'},
    ]

const allUsers = () => {
  return (
    <div>
    {
      dummyUsers &&
      dummyUsers.map(user => {
        return (
          <div key = {user.id}>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
          </div>
        )
      })
    }
    </div>
  )
}

export default allUsers
