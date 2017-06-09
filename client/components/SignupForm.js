import React from 'react';

export default props => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name"><small>Name</small></label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <a href="/auth/google"> Sign Up with Google</a>
    </div>
  );

}
