import React from 'react';
import {TextField, RaisedButton} from 'material-ui';

export default function Password(props) {
  return (
    <div>
      <h3>Reset your password</h3>
      <form name="Submit" onSubmit={(e) => {props.handleSubmit(e, props.currentUser.id)}} >
        <TextField
          hintText=" New Password Here"
          name="passwordField"
        />
        <RaisedButton name="button" label="Submit Password" type="submit" />
      </form>
    </div>
  )
}