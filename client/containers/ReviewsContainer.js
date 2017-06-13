import Reviews from '../components/Reviews';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewReview } from '../action-creators/reviews'

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchToAddNewReview: (userId, prodId, rating, text) => {
      dispatch(addNewReview(userId, prodId, rating, text));
    }
  };
};

class ReviewsContainer extends Component {

  constructor (props) {
    super(props);
    this.state = { text: '', rating: 3 };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleTextFieldChange (event) {
    this.setState({
      text: event.target.value,
    });
  }
  handleRatingChange (value) {
    this.setState({
      rating: value
    });
    return value;
  }
  handleSubmit (event) {
    event.preventDefault();
    // console.log('this.props is: ', this.props, 'state: ', this.state)
    const userId = this.props.userId;
    const prodId = this.props.prodId;
    const rating = this.state.rating;

    const text = this.state.text;
    this.props.dispatchToAddNewReview(userId, prodId, rating, text)
  }

  render() {


    return (
      <Reviews
        {...this.props}
        handleSubmit={this.handleSubmit}
        handleTextFieldChange={this.handleTextFieldChange}
        handleRatingChange={this.handleRatingChange}
      />
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ReviewsContainer);
