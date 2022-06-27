import React, { useContext } from "react";
import PropTypes from "prop-types";
import {TodoContext} from "./todos";
const Button = (props) => {
  const { handleShowList } = useContext(TodoContext);
  const { val:{name=""}={} } = props
  return (
    <button
      type="submit"
      className="btn btn-outline-dark btn-light me-2 dataButton"
      onClick={() => handleShowList({ type: name })}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.oneOf(["All", "Completed", "Incompleted"]),
  handleShowList: PropTypes.func,
};
Button.defaultProp = {
  name: "",
  handleShowList: () => {},
};
export default Button;
