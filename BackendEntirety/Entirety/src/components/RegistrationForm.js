import React, { useState } from 'react';
import axiosInstance from './api';
import { useRouter } from 'next/router';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const { firstName, lastName, email, password } = formData;

      // API call to register user
      const response = await axiosInstance.post('/register', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response.data); // Log the response from the backend


      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
console.log(formData);

      // Redirect to login page after successful registration
      router.push('/login');
    } catch (error) {
      console.error('Error:', error.response.data); // Log any errors from the backend
      setErrorMessage('An error occurred. Please try again later.'); // Show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Register</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default RegistrationForm;
