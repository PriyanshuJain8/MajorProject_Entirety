import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

function AboutUsStyleTwo({ sectionSpace }) {
  const [index, setIndex] = useState(-1);

  const slides = [
    {
      src: "/img/img-slide/11.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/img-slide/12.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/img-slide/13.jpg",
      width: 800,
      height: 570,
    },
  ];

  return (
    <>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Counter, Fullscreen, Download]}
      />

      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title"> Buy Best Properties With Us</h1>
                  <p>
                  Explore our curated selection of premium properties and find your dream home with ease. 
                  Whether you're searching for a cozy apartment, a spacious villa, or a luxurious penthouse, 
                  we have the perfect property to suit your lifestyle.
                  </p>
                </div>
                <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li> Comfortable bedrooms designed for relaxation and rejuvenation</li>
                  <li>Luxurious bathrooms equipped with modern amenities for your convenience</li>
                  <li>Convenient parking facilities available for hassle-free access</li>
                
                </ul>
                <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                  <li>
                    <span>
                      3 <i className="flaticon-bed"></i>
                    </span>
                    Bedrooms
                  </li>
                  <li>
                    <span>
                      2 <i className="flaticon-clean"></i>
                    </span>
                    Bathrooms
                  </li>
                  <li>
                    <span>
                      2 <i className="flaticon-car"></i>
                    </span>
                    Car parking
                  </li>
                  <li>
                    <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span>
                    square Ft
                  </li>
                </ul>

                <div className="ltn__list-item-2 ltn__list-item-2-img mb-50">
                  <PhotoAlbum
                    layout="rows"
                    photos={slides}
                    targetRowHeight={150}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img src="/img/others/9.png" alt="About Us Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleTwo;
