import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import axiosInstance from './api';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Use useRouter to get the router object

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API call to login user
      const response = await axiosInstance.post('/login', formData);
      
      if (response && response.data) {
        // Login successful
        console.log(response.data);
        // Redirect the user to another page
        router.push('/'); // Use router.push to redirect
      }
    } catch (error) {
      if (error.response) {
        // Login failed, handle error response
        console.error('Error:', error.response.data);
        setErrorMessage('Invalid email or password.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="account-login-inner ltn__form-box contact-form-box">
      <form onSubmit={handleSubmit}>
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
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      
    </div>
  );
}

export default LoginForm;
