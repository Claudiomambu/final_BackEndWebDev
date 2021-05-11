import React from "react";
import "../../../App.css";

const Button = ({ text, onSubmit }) => {
  return (
    <div>
      <button type="button" className="form-control warna" onClick={onSubmit}>
        {text}
      </button>
    </div>
  );
};

export default Button;
