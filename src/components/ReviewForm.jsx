const ReviewForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Create Review</legend>
        <textarea id="review_body" placeholder="Review" required></textarea>
        <button type="submit">Submit Review</button>
      </fieldset>
    </form>
  )
}

export default ReviewForm
