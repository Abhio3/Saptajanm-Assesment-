import React from 'react'
import { Button, TextField } from '@mui/material';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    // Function to handle Google Authentication
    const handleGoogleLogin = () => {
      // Replace this with your Google Authentication logic
      console.log('Google login triggered');
    };
    const handleLogin = (e) => {
        e.preventDefault();
        // Add logic to handle form login
        console.log('Login form submitted');
        navigate('/dashboard');
      };

  return (
    <div className="h-[80vh] flex items-center justify-center bg-white">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-[400px] space-y-6">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-secondary text-center">Login to Your Account</h1>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleLogin}>
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
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ backgroundColor: '#0284c7', color: 'white' }}
          className="hover:scale-105 duration-200"
        >
          Login
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="text-gray-500">OR</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>

      {/* Google Authentication */}
      <Button
        fullWidth
        variant="outlined"
        startIcon={<FaGoogle />}
        onClick={handleGoogleLogin}
        className="hover:scale-105 duration-200"
        style={{ borderColor: '#0284c7', color: '#0284c7' }}
      >
        Sign in with Google
      </Button>

      {/* Signup Link */}
      <p className="text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <span
          className="text-secondary cursor-pointer hover:underline"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </span>
      </p>
    </div>
  </div>

  )
}

export default LoginPage