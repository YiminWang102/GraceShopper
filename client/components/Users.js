import React from 'react';
import {Link} from 'react-router';

const allUsers = ({users, deleteUser, currentUser}) => {
  return (
    <div>
    {
      users &&
      users.map(user => {
        return (
          <div className="UserCard" key = {user.id}>
            <Link to = {`/users/${user.id}`} >
              <h4>{user.name}</h4>
              <h4>{user.email}</h4>
              { user.id !== currentUser.id ? <button type="button" onClick={(e) => deleteUser(e, user.id)}>Delete</button> : ''}
            </Link>
          </div>
        )
      })
    }
    </div>
  )
}

export default allUsers
