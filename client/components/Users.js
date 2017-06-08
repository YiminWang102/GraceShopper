import React from 'react';
import {Link} from 'react-router';

const allUsers = ({users}) => {
  return (
    <div>
    {
      users &&
      users.map(user => {
        return (
          <Link key = {user.id} to = {`/users/${user.id}`}>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
          </Link>
        )
      })
    }
    </div>
  )
}

export default allUsers
