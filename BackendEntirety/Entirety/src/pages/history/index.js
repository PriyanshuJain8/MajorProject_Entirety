import Link from "next/link";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import TitleSection from "@/components/titleSection";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { productSlug } from "@/lib/product";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import {
    FaTrophy,
    FaAward,
    FaMedal,
} from "react-icons/fa";


function HistoryPage() {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <FaArrowLeft />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <FaArrowRight />
        </button>
    );

    const blogSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <LayoutOne topbar={true}>
            <ShopBreadCrumb title="Our History" sectionPace="" currentSlug="History" />

            <div className="ltn__our-history-area pb-100">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Tab.Container defaultActiveKey="first">
                                <div className="ltn__our-history-inner">
                                    <div className="ltn__tab-menu text-uppercase">
                                        <Nav>
                                            <Nav.Link eventKey="first">2024</Nav.Link>
                                            <Nav.Link eventKey="second">2027</Nav.Link>
                                            <Nav.Link eventKey="third">2030</Nav.Link>
                                           
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                       <Tab.Pane eventKey="first">
    <div className="ltn__product-tab-content-inner">
        <Row>
            <Col xs={12} lg={6} className="align-self-center">
                <div className="about-us-img-wrap about-img-left">
                    <img src="/img/img-slide/12.jpg" alt="Image" />
                   
                </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
                <div className="about-us-info-wrap">
                    <div className="section-title-area">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our History</h6>
                        <h1 className="section-title">We Started Our Journey</h1>
                        <p>2024: In 2024, our company was founded with a vision to revolutionize the real estate industry. With dedication and hard work, we embarked on our journey to provide exceptional services to our clients.</p>
                    </div>
                    <p>In the first year of our operation, we focused on building a strong foundation and establishing our presence in the market. We aimed to create value for our customers by offering innovative solutions and personalized experiences.</p>
                </div>
            </Col>
        </Row>
    </div>
</Tab.Pane>
<Tab.Pane eventKey="second">
    <div className="ltn__product-tab-content-inner">
        <Row>
            <Col xs={12} lg={6} className="align-self-center">
                <div className="about-us-img-wrap about-img-left">
                    <img src="/img/img-slide/11.jpg" alt="Image" />
                    
                </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
                <div className="about-us-info-wrap">
                    <div className="section-title-area">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                        <h1 className="section-title">It Was An Sweet Journey Time</h1>
                        <p>2027: As we progressed into 2027, our dedication to excellence and customer satisfaction propelled us to new heights. We expanded our services and reached more clients, establishing ourselves as a trusted name in the industry.</p>
                    </div>
                    <p>In the year 2027, we celebrated numerous achievements and milestones. Our commitment to delivering outstanding results and exceeding expectations remained unwavering, driving our success and growth.</p>
                </div>
            </Col>
        </Row>
    </div>
</Tab.Pane>
<Tab.Pane eventKey="third">
    <div className="ltn__product-tab-content-inner">
        <Row>
            <Col xs={12} lg={6} className="align-self-center">
                <div className="about-us-img-wrap about-img-left">
                    <img src="/img/img-slide/13.jpg" alt="Image" />
                    
                </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
                <div className="about-us-info-wrap">
                    <div className="section-title-area">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                        <h1 className="section-title">It Was An Sweet Journey Time</h1>
                        <p>2030: Looking ahead to 2030, we remain committed to our mission of excellence and innovation. With a focus on sustainability and community engagement, we strive to create lasting value for our clients and society.</p>
                    </div>
                    <p>In the coming years, we envision continued growth and success as we embrace new technologies and trends. Our journey is fueled by passion and driven by our desire to make a positive impact in the world.</p>
                </div>
            </Col>
        </Row>
    </div>
</Tab.Pane>
                                        <Tab.Pane eventKey="five">
                                            <div className="ltn__product-tab-content-inner">
                                                <Row>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-img-wrap about-img-left">
                                                            <img src="/img/img-slide/11.jpg" alt="Image" />
                                                            <div className="ltn__history-icon">
                                                                <FaTrophy />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6} className="align-self-center">
                                                        <div className="about-us-info-wrap">
                                                            <div className="section-title-area">
                                                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                                <h1 className="section-title">It Was An Sweet
                                                                    Journey Time</h1>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                            </div>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            





            <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <CallToAction />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutOne>
    );
}

export default HistoryPage;