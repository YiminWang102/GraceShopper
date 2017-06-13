import React from 'react';

export default function Reviews (props) {

  const reviews = props.reviews;
  console.log(reviews);
  return (
    <div>
      {
        reviews && reviews.map(review => (
          <div key={review.id} className="review">
            <div>
              <h3>Rating: { review.rating }</h3>
              <h5> { review.text } </h5>
            </div>
          </div>
        ))
      }
    </div>
  )
}
