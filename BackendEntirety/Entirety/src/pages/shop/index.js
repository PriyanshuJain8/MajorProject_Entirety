import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from 'axios';
import styled from "styled-components"; // Import styled-components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToWishlist } from "@/store/slices/wishlist-slice";

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
  margin-bottom: 20px; /* Add margin to create space between cards */
  position: relative; /* Ensure proper positioning */
`;

const StyledImage = styled(Card.Img)`
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
  &:hover {
    transform: scale(1.1); /* Enlarge the image on hover */
  }
`;

const Title = styled(Card.Title)`
  font-size: 25px; /* Increase title font size */
  font-weight: bold; /* Make the title bold */
  font-family: 'Pacifico'; /* Use Pacifico font style */
  margin-bottom: 10px; /* Add space between title and description */
`;

const Description = styled(Card.Text)`
  display: none; /* Initially hide additional details */
  opacity: 0; /* Initially hide additional details */
  transition: opacity 0.3s ease; /* Add smooth transition for opacity */
  margin-top: 10px; /* Add margin between title and additional details */
  display: none; /* Initially hide additional details */
  opacity: 0; /* Initially hide additional details */
  transition: opacity 0.3s ease; /* Add smooth transition for opacity */
  margin-top: 10px; /* Add margin between title and additional details */
  font-size: 16px; /* Set font size */
  color: #666; /* Set text color */
  line-height: 1.6; /* Set line height for readability */
  font-style: italic; /* Make the text italic */
  padding: 10px; /* Add padding for better spacing */
  border: 1px solid #ccc; /* Add border for better separation */
  border-radius: 5px; /* Add border radius for rounded corners */
  
`;

const Price = styled.span`
  font-size: 20px; /* Set the font size of the price */
  font-weight: bold; /* Make the price bold if needed */
`;

const StyledCardBody = styled(Card.Body)`
  position: relative; /* Set position to relative */
  z-index: 1; /* Ensure card body appears above other elements */
  &:hover {
    ${Description} {
      display: block; /* Display additional details on hover */
      opacity: 1; /* Make additional details visible */
      display: block; /* Display additional details on hover */
      opacity: 1; /* Make additional details visible */
      
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative; /* Set position to relative */
  overflow: hidden; /* Hide overflow of image */
`;

const ZoomedImage = styled.img`
  position: absolute; /* Set position to absolute */
  top: 0; /* Align image to top */
  left: 0; /* Align image to left */
  width: 100%; /* Set width to 100% */
  height: 100%; /* Set height to 100% */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
  transform-origin: center; /* Set transform origin to center */
  &:hover {
    transform: scale(1.1); /* Zoom in on hover */
  }
  cursor: pointer; /* Change cursor to pointer on hover */
`;




const WishlistButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

function Shop() {
  const { products } = useSelector((state) => state.product);
  const [properties, setProperties] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Function to search products
  const keys = ["title"];
  const searchProduct = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  // Fetch properties from the server
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:3003/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  // Search and set properties to display
  useEffect(() => {
    const searchedProperties = searchProduct(properties);
    setProperties(searchedProperties);
  }, [query]);

  // Function to open image in full screen
  const openFullScreen = (imageUrl) => {
    const fullScreenWindow = window.open(imageUrl, "_blank");
    if (fullScreenWindow) {
      fullScreenWindow.focus();
    }
  };

  return (
    <LayoutOne topbar={true}>
      {/* BREADCRUMB AREA START */}
      <ShopBreadCrumb title="Property" sectionPace="" currentSlug="Property" />
      {/* BREADCRUMB AREA END */}
      {/* Property Listing */}
      <Container>
        <Row>
          <Col>
            <h2>Properties</h2>
          </Col>
        </Row>
        <Row className="property-cards">
          {Array.isArray(properties) &&
            properties.map((property, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <StyledCard>
                  <StyledCardBody>
                    <ImageWrapper>
                      <StyledImage
                        variant="top"
                        src={property.image_url}
                        alt={property.title}
                      />
                      <ZoomedImage
                        src={property.image_url}
                        alt={property.title}
                        onClick={() => openFullScreen(property.image_url)}
                      />
                    </ImageWrapper>
                    <WishlistButton onClick={() => dispatch(addToWishlist(property))}>
                      <FontAwesomeIcon icon={faHeart} color="red" />
                    </WishlistButton>
                    <Title>{property.title}</Title>
                    <Price>€{property.price}</Price>
                    <Description>
                      Description: {property.description}
                      <br />
                      address: {property.address}
                      <br />
                      country: {property.country}
                      <br />
                      city: {property.city}
                      <br />
                      Facilities: {property.amenities}
                      <br />
                      image: {property.image}
                      <br />
                      {/* Include other details you want to display */}
                    </Description>
                  </StyledCardBody>
                </StyledCard>
              </Col>
            ))}
        </Row>
      </Container>
    </LayoutOne>
  );
}

export default Shop;
