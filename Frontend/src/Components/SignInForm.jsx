import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here, e.g., call API
    console.log('Sign In:', { email, password });
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
        <div className='flex justify-center items-center '>
        <Button type='submit' variant='outline-primary' className='font-bold text-lg my-1'>
          Sign In
        </Button>
        </div>
       
      </form>
    </div>
  );
};

export default SignInForm;
