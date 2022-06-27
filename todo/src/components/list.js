import React, { useContext } from "react";
import FormData from "./formData";
import { PropTypes } from "prop-types";
import { TodoContext } from "./todos";
import { getListType } from "../util";
const List = () => {
  const { todolist, listType } = useContext(TodoContext);

  return (
    <>
      {getListType(todolist, listType).map((val, index) => {
        return <FormData key={index} val={val} />;
      })}
    </>
  );
};
List.propTypes = {
  getListType: PropTypes.array,
  todolist: PropTypes.array,
  listType: PropTypes.string,
};
List.propTypes = {
  getListType: [],
  todolist: [],
  listType: "",
};

export default List;
