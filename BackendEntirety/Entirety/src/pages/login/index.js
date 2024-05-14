// Login.js

import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import LoginForm from "@/components/LoginForm"; // Import the LoginForm component
import Link from "next/link";


function Login() { 
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Login" />

        {/* LOGIN AREA START */}
        <div className="ltn__login-area pb-65">
          <div className="container">
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">Sign In <br />To  Your Account</h1>
                  <p>Login with your registered details below</p>
                </div>
              </Col>
            </Row>
            <Row> 
              <Col xs={12} lg={6}>
                <LoginForm /> {/* Render the LoginForm component */}
              </Col>
              <Col xs={12} lg={6}>
                <div className="account-create text-center pt-50">
                  <h4>{`DON'T HAVE AN ACCOUNT?`}</h4>
                  <p>Add items to your wishlistget personalised recommendations <br />
                    check out more quickly track your orders register</p>
                  <div className="btn-wrapper">
                    <Link href="/register" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* LOGIN AREA END */}

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
    </>
  );
}

export default Login;
