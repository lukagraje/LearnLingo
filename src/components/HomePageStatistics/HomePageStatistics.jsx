import React from "react";
import {
  Number,
  ReviewsTitle,
  Stats,
  ReviewsList,
} from "./HomePageStatistics.styled";

const statistics = [
  {
    number: "32,000 +",
    title: "Experienced tutors",
  },
  {
    number: "300,000 +",
    title: "5-star tutor reviews",
  },
  {
    number: "120 +",
    title: "Subject taught",
  },
  {
    number: "200 +",
    title: "Tutor nationalities",
  },
];

export const HomePageStatistics = () => {
  return (
    <ReviewsList>
          {statistics.map(({ number, title }, index) => (
        <Stats key={index}>
          <Number>{number}</Number>
          <ReviewsTitle>{title}</ReviewsTitle>
        </Stats>
      ))}
    </ReviewsList>
  );
};
