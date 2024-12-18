import React from 'react';
import { Button, TextField } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  // Function to handle Google Authentication
  const handleGoogleSignUp = () => {
    console.log('Google Sign-Up triggered');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign-Up form submitted');
    navigate('/dashboard');
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-white">
      <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-8 w-full sm:w-[400px] space-y-6">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-secondary text-center">
          Create an Account
        </h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSignUp}>
          <TextField
            label="Full Name"
            type="text"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ backgroundColor: '#0284c7', color: 'white' }}
            className="hover:scale-105 duration-200"
          >
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="text-gray-500">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Google Sign-Up */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FaGoogle />}
          onClick={handleGoogleSignUp}
          className="hover:scale-105 duration-200"
          style={{ borderColor: '#0284c7', color: '#0284c7' }}
        >
          Sign up with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <span
            className="text-secondary cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
