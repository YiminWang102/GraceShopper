import React from 'react';

const fakeReviews = [{
  text: 'review 1',
  rating: 5,
  id: 1,
},{
  text: 'review 2',
  rating: 4,
  id: 2
}
];

export default function Reviews (props) {

  const reviews = fakeReviews;

  return (
    <div>
      {
        reviews.map(review => (
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
