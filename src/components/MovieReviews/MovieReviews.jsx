import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "@/services/api";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  const toggleExpand = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={css.reviews}>
      {reviews.length ? (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li className={css.link} key={review.id}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.content}>
                {expandedReviews[review.id] || review.content.length <= 500
                  ? review.content
                  : `${review.content.slice(0, 500)}...`}
              </p>
              {review.content.length > 500 && (
                <button
                  className={css.toggleBtn}
                  onClick={() => toggleExpand(review.id)}
                >
                  {expandedReviews[review.id] ? "Show Less" : "Show More"}
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.info}>No reviews found.</p>
      )}
    </div>
  );
}

export default MovieReviews;
