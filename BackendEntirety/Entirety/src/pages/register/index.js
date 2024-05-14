import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft, FaPlay, FaSearch, FaRegEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";

import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Link from "next/link";
import axiosInstance from "../../components/api";

function Register() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form data
    const formData = new FormData(e.target);
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmpassword");

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      // API call to register user
      const response = await axiosInstance.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response.data); // Log the response from the backend

      // Optionally, redirect to another page or show a success message to the user
    } catch (error) {
      console.error("Error:", error.response.data); // Log any errors from the backend
      setErrorMessage("An error occurred. Please try again later."); // Show an error message to the user
    }
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" />
        <div className="ltn__login-area pb-110">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">Register <br /> Your Account</h1>
                  <p>. <br /> Enter Your Details Below </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                  <form onSubmit={handleSubmit} method="POST" className="ltn__form-box contact-form-box">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                    <input type="text" name="email" placeholder="Email*" />
                    <input type="password" name="password" placeholder="Password*" autoComplete="new-password" />
                    <input type="password" name="confirmpassword" placeholder="Confirm Password*" autoComplete="new-password" />
                    
                    <div className="btn-wrapper">
                      <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                    </div>
                  </form>
                  {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY POLICY</Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
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
    </>
  );
}

export default Register;
