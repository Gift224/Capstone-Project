

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-confetti";

import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success">
      {showConfetti && <Confetti />} 

      <div>
        <FontAwesomeIcon icon={faCircleCheck} size="3x" color="rgb(244 206 20 / var(--tw-text-opacity, 1))" />
      </div>

      <div>
        <h2>Your table has been reserved!</h2>
      </div>

      <div>
        <h3>An email has been sent confirming this reservation.</h3>
      </div>

      <div style={{margin: "50px 0px 0px 0px"}}>
        <Link to="/booking">
        <button>
        Make another reservation
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;