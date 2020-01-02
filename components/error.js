import React from "react";
import PropTypes from "prop-types";
const Error = ({ message }) => (
  <div className="error">
    <p className="error-message">{message}</p>
    <style jsx>{`
      .error {
        width: 100%;
        color: white;
        padding: 20px;
        background: red;
        &-message {
          font-size: 1.2em;
          font-weight: bold;
        }
      }
    `}</style>
  </div>
);

Error.propTypes = {
  message: PropTypes.string
};
Error.defaultProps = {
  message: "Opps! Bir sorun oluştu..."
};

export default Error;
