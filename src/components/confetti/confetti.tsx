import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
import Confetti from "react-confetti";

interface Props {
  isConfettiRunning: boolean;
  setIsConfettiRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfettiComponent = ({
  isConfettiRunning,
  setIsConfettiRunning,
}: Props): JSX.Element | null => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!setIsConfettiRunning) return;

    setTimeout(() => {
      setIsConfettiRunning(false);
    }, 5000);
  }, [isConfettiRunning]);

  if (!windowDimensions) return null;
  if (!isConfettiRunning) return null;

  return (
    <div>
      <Confetti
        initialVelocityY={-50}
        numberOfPieces={500}
        run={true}
        recycle={false}
        width={windowDimensions.width}
        height={windowDimensions.height}
      />
    </div>
  );
};

export default ConfettiComponent;
