// components/ReviewList.js

const ReviewList = () => {
  const reviews = [
    { id: 1, text: "Great service!" },
    { id: 2, text: "Highly recommended." },
    // Add more reviews data
  ];

  return (
    <ul className="space-y-4">
      {reviews.map((review) => (
        <li key={review.id} className="bg-gray-100 p-4 rounded">
          {review.text}
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
