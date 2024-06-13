import "./Radio.css";

import PropTypes from "prop-types";
import React from "react";

/**
 * @deprecated Use ./RadioGroupItem_Shadcn_ and ./RadioGroup_Shadcn_ instead
 */
const Radio = ({ className = "", label = "", containerClassName = "", children, ...props }) => {
  return (
    <label className={`inline-flex items-center ${containerClassName}`}>
      <input type="radio" className={`form-radio border-solid h-4 w-4 ${className}`} {...props} />
      <span className="ml-2">{label}</span>
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Radio;
