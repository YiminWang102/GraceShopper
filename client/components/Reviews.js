import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
var Rating = require('react-rating');

export default function Reviews (props) {

  const reviews = props.reviews;
  console.log('rev props: ', props);
  return (
    <div>
      {
        reviews && props.currentUser.isAdmin && reviews.map(review => (
          <div key={review.id} className="review">
            <div>
              <h3>Name: { props.currentUser.name && props.currentUser.name }</h3>
              <h3>Rating: { review.rating }</h3>
              <h5> { review.text } </h5>
              ________________________
            </div>
          </div>
        ))
      }
    <form name="Submit" onSubmit={props.handleSubmit}>
      <Rating
        onChange={rate => {props.handleRatingChange(rate)}}
      />
      <br />
      <TextField
        hintText=" ++++ Add your review here  ++++ "
        multiLine={true}
        rows={6}
        rowsMax={10}
        name="text"
        style={{
          border: '1px solid #d8ad02',
          backgroundColor: '#ffe88c'
        }}
        onChange={props.handleTextFieldChange}
      />
      <br />
      <RaisedButton value={{userId: props.userId, prodId: props.prodId}} name="button" label="Submit Review" type="submit" />
    </form>
    </div>
  )
}
