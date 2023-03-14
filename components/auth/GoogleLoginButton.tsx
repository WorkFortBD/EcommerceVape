import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleSuccess = (response) => {
    const token = response.tokenId;
    onSuccess(token);
  };

  const handleFailure = (response) => {
    onFailure(response.error);
  };

  return (
    <GoogleLogin
      clientId='780685125249-66b413040g0okik5du7kfp26vhs0vkdc.apps.googleusercontent.com'
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
      buttonText="Sign in with Google"
      className='shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline'
    />
  );
};

export default GoogleLoginButton;
