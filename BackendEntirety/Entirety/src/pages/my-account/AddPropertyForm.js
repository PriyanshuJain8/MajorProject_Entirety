/////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

function AddPropertyForm() {
  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    price: '',
    address: '',
    country: '',
    city: '',
    amenities: [],
    utilities: [],
    features: [],
    image: null
  });

  const handleInputChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;

    // Copy the existing array
    let updatedCheckboxes = [...propertyData[name]];

    if (checked) {
      // Add the value to the array
      updatedCheckboxes = updatedCheckboxes.concat(value);
    } else {
      // Remove the value from the array
      updatedCheckboxes = updatedCheckboxes.filter(item => item !== value);
    }

    // Update the state
    setPropertyData({ ...propertyData, [name]: updatedCheckboxes });
  };

  const handleImageChange = (e) => {
    setPropertyData({ ...propertyData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("statement reached");
    const formData = new FormData();
    formData.append('title', propertyData.title);
    formData.append('description', propertyData.description);
    formData.append('price', propertyData.price);
    formData.append('address', propertyData.address);
    formData.append('country', propertyData.country);
    formData.append('city', propertyData.city);
    formData.append('amenities', JSON.stringify(propertyData.amenities)); // Convert array to string before sending
    formData.append('utilities', JSON.stringify(propertyData.utilities)); // Convert array to string before sending
    formData.append('features', JSON.stringify(propertyData.features)); // Convert array to string before sending
   // formData.append('image', propertyData.image); // Append the image file

    if(propertyData.image){
      formData.append('image', propertyData.image, propertyData.image.name);
    }
    
    try {
      const response = await axios.post('http://localhost:3003/my-account', formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data); // Log success message
      
    } catch (error) {
      console.error('Error:', error.response.data); // Log error message
      // Optionally, display an error message to the user
    }
  };
  

  return (
    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
      {/* Property Description */}
      <h6>Property Description</h6>
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input
          type="text"
          name="title"
          placeholder="*Title (mandatory)"
          value={propertyData.title}
          onChange={handleInputChange}
        />
        <span className="inline-icon">
          <FaPencilAlt />
        </span>
      </div>
      <div className="input-item input-item-textarea ltn__custom-icon">
        <textarea
          name="description"
          placeholder="Description"
          value={propertyData.description}
          onChange={handleInputChange}
        ></textarea>
        <span className="inline-icon">
          <FaPencilAlt />
        </span>
      </div>
      {/* Property Price */}
      <h6>Property Price</h6>
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input
          type="text"
          name="price"
          placeholder="Price in $ (only numbers)"
          value={propertyData.price}
          onChange={handleInputChange}
        />
        <span className="inline-icon">
          <FaPencilAlt />
        </span>
      </div>
      {/* Listing Media */}
      <input
        type="file"
        id="image"
        name="image"
        className="btn theme-btn-3 mb-10"
        onChange={handleImageChange}
      />
      <br />
      <p>
        <small>* At least 1 image is required for a valid submission. Minimum size is 500/500px.</small>
        <br />
        <small>* Images might take longer to be processed.</small>
      </p>
      {/* Listing Location */}
      {/* Address */}
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input
          type="text"
          name="address"
          placeholder="*Address"
          value={propertyData.address}
          onChange={handleInputChange}
        />
        <span className="inline-icon">
          <FaPencilAlt />
        </span>
      </div>
      {/* Country */}
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={propertyData.country}
          onChange={handleInputChange}
        />
        <span className="inline-icon">
          <FaPencilAlt />
        </span>
      </div>
      {/* City */}
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={propertyData.city}
          onChange={handleInputChange}
        />
        <span className="inline-icon">
          <FaPencilAlt />
        </span>
      </div>
           {/* Amenities and Features */}
           <h6>Amenities and Features</h6>
      <h6>Interior Details</h6>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Equipped Kitchen
            <input
              type="checkbox"
              name="amenities"
              value="Equipped Kitchen"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Gym
            <input
              type="checkbox"
              name="amenities"
              value="Gym"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Laundry
            <input
              type="checkbox"
              name="amenities"
              value="Laundry"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Media Room
            <input
              type="checkbox"
              name="amenities"
              value="Media Room"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
      </Row>
      

      <h6>Outdoor Details</h6>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Back yard
            <input
              type="checkbox"
              name="amenities"
              value="Back yard"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Basketball court
            <input
              type="checkbox"
              name="amenities"
              value="Basketball court"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Front yard
            <input
              type="checkbox"
              name="amenities"
              value="Front yard"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Garage Attached
            <input
              type="checkbox"
              name="amenities"
              value="Garage Attached"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Hot Bath
            <input
              type="checkbox"
              name="amenities"
              value="Hot Bath"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <label className="checkbox-item">
            Pool
            <input
              type="checkbox"
              name="amenities"
              value="Pool"
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
        </Col>
      </Row>

      <h6>Utilities</h6>
<Row>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Central Air
      <input
        type="checkbox"
        name="utilities"
        value="Central Air"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Electricity
      <input
        type="checkbox"
        name="utilities"
        value="Electricity"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Heating
      <input
        type="checkbox"
        name="utilities"
        value="Heating"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Natural Gas
      <input
        type="checkbox"
        name="utilities"
        value="Natural Gas"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Ventilation
      <input
        type="checkbox"
        name="utilities"
        value="Ventilation"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Water
      <input
        type="checkbox"
        name="utilities"
        value="Water"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
</Row>

<h6>Other Features</h6>
<Row>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Chair Accessible
      <input
        type="checkbox"
        name="features"
        value="Chair Accessible"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Elevator
      <input
        type="checkbox"
        name="features"
        value="Elevator"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Fireplace
      <input
        type="checkbox"
        name="features"
        value="Fireplace"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Smoke detector
      <input
        type="checkbox"
        name="features"
        value="Smoke detector"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      Washer and dryer
      <input
        type="checkbox"
        name="features"
        value="Washer and dryer"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
  <Col xs={12} md={6} lg={4}>
    <label className="checkbox-item">
      WiFi
      <input
        type="checkbox"
        name="features"
        value="WiFi"
        onChange={handleCheckboxChange}
      />
      <span className="checkmark"></span>
    </label>
  </Col>
</Row>


      {/* Submit button */}
      <div className="btn-wrapper text-center--- mt-30">
        <button
          className="btn theme-btn-1 btn-effect-1 text-uppercase"
          type="submit"
        >
          Submit Property
        </button>
      </div>
    </form>
  );
}

export default AddPropertyForm;
