import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "./todos";

const Checkbox = (props) => {
  const { handleCheck } = useContext(TodoContext);
  const { isCompleted, id } = props;
  return (
    <>
      <input
        className="form-check-input ms-2 me-2"
        type="checkbox"
        value=""
        checked={isCompleted}
        onChange={() => handleCheck(id)}
      />
    </>
  );
};
Checkbox.propTypes = {
  handleCheck: PropTypes.func,
  isCompleted: PropTypes.bool,
  id: PropTypes.number,
};
Checkbox.defaultProps = {
  handleCheck: () => {},
  isCompleted: false,
  id: 0,
};
export default Checkbox;
