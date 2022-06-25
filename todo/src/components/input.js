import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import TodoState from "../context/todoState";

const Input = () => {
  const {
    value,
    handleInputChange,
    handleBlurChange = () => {},
  } = useContext(TodoState);
  return (
    <>
      <input
        type="text"
        id="edit"
        autoFocus
        aria-label="task"
        className="form-control"
        value={value}
        required
        onChange={(e) => {
          handleInputChange(e);
        }}
        onBlur={() => {
          handleBlurChange();
        }}
      />
    </>
  );
};
Input.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleBlurChange: PropTypes.func,
};
Input.defaultProp = {
  value: "",
  handleInputChange: () => {},
  handleBlurChange: () => {},
};
export default Input;
