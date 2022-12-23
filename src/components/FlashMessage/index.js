import React, { useState } from "react";
import "./flash-message.scss";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";

const FlashMessage = ({ message, error, success, warning }) => {
  const [displayFlash, setFlash] = useState(true);

  setTimeout(() => {
    setFlash(null);
  }, 5000);

  const getIcon = () => {
    if (error) {
      return (
        <AiFillWarning color="#FF605C" className="flash-icon" size="18px" />
      );
    } else if (success) {
      return (
        <FaCheckCircle color="#00CA4E" className="flash-icon" size="18px" />
      );
    } else if (warning) {
      return (
        <FaExclamationCircle
          color="#FFBD44"
          className="flash-icon"
          size="18px"
        />
      );
    }
  };

  if (displayFlash) {
    return (
      <div className="flsh-message">
        {getIcon()}
        <p>{message}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default FlashMessage;
