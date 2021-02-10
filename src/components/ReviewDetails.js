import { StarRating } from './StarRating'

const ReviewDetails=({ rating, body, createdAt, id, reviewerName, deleteReview })=> {
  /** This way of destructuring props gives the same result as in Product Details */
  return (
    <div>
      <h3 className='header'>
        <StarRating max={5} currentNumber={rating} />
      </h3>
      <p>body: {body}</p>
      <p>Reviewed by: {reviewerName}</p>
      <p>createdAt: {createdAt}</p>{' '}
      <button onClick={()=>deleteReview(id)}>Delete</button>
    </div>
  )
}
export default ReviewDetails