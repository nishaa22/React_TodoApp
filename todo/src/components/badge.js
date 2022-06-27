import React from "react";
import PropTypes from "prop-types";
// import TodoState from "../context/todoState";

const Badge = (props) => {
  const { val:{isCompleted = false}={} } = props;
  return (
    <>
      <span className="mx-5">{isCompleted ? "" : ""}</span>
      {isCompleted && (
        <div id="badge" className="float-end">
          <span className="badge bg-secondary">Completed</span>
        </div>
      )}
    </>
  );
};
Badge.propTypes = {
  isCompleted: PropTypes.bool,
};
Badge.defaultProp = {
  isCompleted: false,
};
export default Badge;
