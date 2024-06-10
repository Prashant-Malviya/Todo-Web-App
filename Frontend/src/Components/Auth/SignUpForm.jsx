import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios'; // Import axios for making HTTP requests

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:1000/api/v1/register', {
        firstName,
        lastName,
        email,
        password
      });
      console.log('Sign Up:', response.data);
    } catch (error) {
      console.error('Sign Up Error:', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form className="bg-white px-10 py-3 m-2  rounded-lg shadow-lg lg:w-96 md:w-96 w-72" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        <div className="mb-2">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            className="w-full p-1.5 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full p-1.5 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-1.5 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-1.5 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full p-1.5 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-5">{error}</p>}
        <div className='flex justify-center items-center '>
        <Button type='submit' variant='outline-primary' className='font-bold text-lg my-1'>
          Sign Up
        </Button>
        </div>
       
      </form>
    </div>
  );
};

export default SignUpForm;
