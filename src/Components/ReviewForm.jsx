// src/components/ReviewForm.jsx
import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../store/reviewSlice';

const reviewFormReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, isSubmitting: true };
    case 'SUCCESS':
      return { ...state, isSubmitting: false, success: true };
    default:
      return state;
  }
};

const ReviewForm = ({ productId }) => {
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reviewFormReducer, {
    isSubmitting: false,
    success: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localDispatch({ type: 'SUBMIT' });
    const review = e.target.review.value;

    setTimeout(() => {
      dispatch(addReview({ productId, review }));
      localDispatch({ type: 'SUCCESS' });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="review" required />
      <button type="submit" disabled={state.isSubmitting}>
        {state.isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {state.success && <p>Review submitted successfully!</p>}
    </form>
  );
};

export default ReviewForm;
