import {
  ExperienceParagraph,
  ReviewName,
  ReviewRating,
  ReviewWrapper,
  ReviewsItem,
  ReviewsList,
} from "./ReadMoreMarkup.styled";
import { FaStar } from "react-icons/fa";

export const ReadMoreMarkup = ({ experience, reviews }) => {
  return (
    <div>
      <ExperienceParagraph>{experience}</ExperienceParagraph>
      <ReviewsList>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <ReviewsItem key={index}>
            <ReviewWrapper>
              <ReviewName>{reviewer_name}</ReviewName>
              <ReviewRating>
                <span>
                  <FaStar />
                </span>
                {reviewer_rating}
              </ReviewRating>
            </ReviewWrapper>
            <p>{comment}</p>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </div>
  );
};
