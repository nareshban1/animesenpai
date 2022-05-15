import React from "react";
import { SpinnerCircular } from "spinners-react";
import { LoadingContainer } from "./LoadingSpinner.css";
const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <SpinnerCircular />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
