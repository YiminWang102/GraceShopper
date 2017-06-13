import React from 'react';
import {Link} from 'react-router';

const allUsers = ({users, deleteUser, currentUser, promoteUser, resetPassword}) => {
  return (
    <div>
    {
      users && currentUser.isAdmin &&
      users.map(user => {
        return (
          <div className="UserCard" key = {user.id}>
            <Link to = {`/users/${user.id}`} >
              <h4>{user.name}</h4>
              <h4>{user.email}</h4>

              <div>
                { user.id !== currentUser.id ?
                     <button type="button" onClick={(e) => deleteUser(e, user.id)}>Delete</button> : ''
                }
                { !user.isAdmin ?
                  <button type="button" onClick={(e) => promoteUser(e, user.id)}>Make Admin</button> : ''
                }
                { !user.resetPassword ? <button type="button" onClick={(e) => resetPassword(e, user.id)}>Reset Password</button> : '' }
              </div> 
            </Link>
          </div>
        )
      })
    }
    </div>
  )
}

export default allUsers
