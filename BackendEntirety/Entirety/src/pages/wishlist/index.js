// src/pages/wishlist/index.js

import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishlist } from "@/store/slices/wishlist-slice";
import { productSlug } from "@/lib/product";
import Link from "next/link";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <LayoutOne topbar={true}>
      {/* BREADCRUMB AREA START */}
      <ShopBreadCrumb title="Wishlist" sectionPace="" currentSlug="wishlist" />
      {/* BREADCRUMB AREA END */}

      {/* WISHLIST AREA START */}
      <Container>
        <Row>
          <Col>
            <h2>Wishlist</h2>
          </Col>
        </Row>
        <Row>
          {wishlistItems.map((property, index) => (
            <Col key={index} md={4} sm={6} xs={12}>
              <div>
                <Link href={`/shop/${productSlug(property.title)}`}>
                  <div>
                    <img src={property.image_url} alt={property.title} />
                    <h4>{property.title}</h4>
                    {/* Render other property details here */}
                    <p>Price: {property.price}</p>
                    <p>Description: {property.description}</p>
                    <button onClick={() => dispatch(deleteFromWishlist(property.id))}>
                      Remove from Wishlist
                    </button>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* WISHLIST AREA END */}
    </LayoutOne>
  );
};

export default Wishlist;
