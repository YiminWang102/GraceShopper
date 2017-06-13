import { RECEIVE_REVIEWS, SUBMIT_REVIEW } from '../reducer/constants';
import axios from 'axios';

export const receiveReviews = reviews => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const submitReview = reviewId => {
  return ({
    type: SUBMIT_REVIEW,
    reviewId
  })
}

export const getReviewsByProductId = productId => dispatch => {
  axios.get(`/api/reviews/products/${productId}`)
    .then(responses => responses.data)
    .then(reviews => {
      dispatch(receiveReviews(reviews));
    })
    .catch(err => {console.error(err);});
};

export const addNewReview = (userId, productId, rating, text)  => dispatch => {
  //console.log('ADD REV USERID: ', userId, 'PROD ID: ', productId, 'RATING: ', rating, text);
  axios.post(`/api/reviews/`, {userId, productId, rating, text})
    .then( res => res.data )
    .catch(err => {console.error(err);});
};
