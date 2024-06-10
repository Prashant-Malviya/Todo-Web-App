import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1000/api/v1/signin', {
        email,
        password,
      });
      console.log('Sign In:', response.data);
    } catch (error) {
      console.error('Sign In Error:', error);
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(error.response.data.message);
      } else if (error.request) {
        // Request was made but no response received
        setError('No response from server. Please try again later.');
      } else {
        // Something else happened while setting up the request
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form onSubmit={handleSubmit} className="bg-white m-2 px-10 py-3 rounded-lg shadow-lg lg:w-96 md:w-96 w-72">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
        <div className="mb-2">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-5">{error}</p>}
        <div className='flex justify-center items-center'>
          <Button type='submit' variant='outline-primary' className='font-bold text-lg my-1'>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
