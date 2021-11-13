import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { Col, Container, Row } from "react-bootstrap";
import { RatingView } from "react-simple-star-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <Container className="reviews">
      <h2 className="text-light py-5">All Reviews</h2>
      <Row style={{ marginLeft: "20px" }}>
        {reviews.map((review) => (
          <Col xs={12} md={3}>
            <div className="wrapper">
              <div className="blog_post  py-4">
                <div className="container_copy">
                  <h3>Reviewed by: {review.name}</h3>
                  <p>{review.review}</p>
                </div>
                <RatingView ratingValue={review.rating} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
