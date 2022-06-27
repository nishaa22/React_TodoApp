import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import TodoState from "../context/todoState";

const Icons = () => {
  const { handleEdit } = useContext(TodoState);
  const {type,val:{id=""}={} } = useContext(TodoState);

  return (
    <>
      <i
        className={`fas mx-2  ${type === "edit" ? "fa-edit" : "fa-trash-alt"} `}
        onClick={() => {
          handleEdit(id);
        }}
      ></i>
    </>
  );
};
Icons.protoTypes = {
  handleEdit: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.number,
};
Icons.defaultProp = {
  handleEdit: () => {},
  type: "",
  id: 0,
};
export default Icons;
