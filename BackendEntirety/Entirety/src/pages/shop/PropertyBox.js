// Import necessary dependencies
import React from "react";
import { Card, Button } from "react-bootstrap";

// Define PropertyBox component
const PropertyBox = ({ property }) => {
  const { title, description, imageUrl, price } = property;

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default PropertyBox;
