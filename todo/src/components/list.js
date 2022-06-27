import React, { useContext } from "react";
import FormData from "./formData";
import { PropTypes } from "prop-types";
import {TodoContext} from "./todos";
import {getListType} from "../util"
const List = () => {
  const {
    todolist,
    listType,

    editId,
  
  } = useContext(TodoContext);

console.log(todolist,{listType},{editId},'SSSSS')
  return (
    <>
      {getListType(todolist, listType).map((val, index) => {
        return (
          <FormData
            // handleCheck
            key={index}
            val={val}
            // editId={editId}
            // setIsEdit
            // handleEdit
            // handleDelete
            // handleEditList
          />
        );
      })}
    </>
  );
};
// List.propTypes = {
//   getListType: PropTypes.array,
//   todolist: PropTypes.array,
//   listType: PropTypes.string,
//   handleCheck: PropTypes.func,
//   editId: PropTypes.number,
//   setIsEdit: PropTypes.number,
//   handleDelete: PropTypes.func,
//   handleEdit: PropTypes.func,
//   handleEditList: PropTypes.func,
// };
// List.propTypes = {
//   getListType: [],
//   todolist: [],
//   listType: "",
//   handleCheck: () => {},
//   editId: 0,
//   setIsEdit: 0,
//   handleDelete: () => {},
//   handleEdit: () => {},
//   handleEditList: () => {},
// };

export default List;
