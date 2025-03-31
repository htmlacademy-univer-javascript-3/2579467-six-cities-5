type RatingProps = {
  rating: number;
  className: string;
  starsClassName: string;
};

export const Rating = ({ rating, className, starsClassName}: RatingProps) => (
  <div className={`rating ${className}`}>
    <div className={`rating__stars ${starsClassName}`}>
      <span style={{ width: `${rating * 20}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
