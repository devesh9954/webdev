import React from 'react';
import './loader.css';

interface LoaderProps {
  fullscreen?: boolean;
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ fullscreen = true, message = "Loading..." }) => {
  return (
    <div className={`loader-container ${fullscreen ? "fullscreen" : ""}`}>
      <span className="loader">{message}</span>
    </div>
  );
};

export default Loader;
