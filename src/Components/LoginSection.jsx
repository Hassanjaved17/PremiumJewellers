import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

const LoginSection = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={goBack}
        className="underline underline-offset-2 text-sm text-blue-700 px-4 py-2 flex items-center hover:text-blue-900 transition-colors"
        aria-label="Go Back"
      >
        <TiArrowBack className="mr-2 text-lg" />
        Back
      </button>
    </div>
  );
};

export default LoginSection;
