import React, { useState } from "react";
import { getListType } from "../util";
import TodoContext from "../components/todos";

const TodoState = (props) => {
  const [task, setTask] = useState("");
  const [listType, setListType] = useState("");
  const [todoList, setTodoList] = useState({
    taskList: [],
    completedList: [],
    incompletedList: [],
  });
  const [isEdit, setIsEdit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prev) => {
      return {
        ...prev,
        taskList: [
          ...prev.taskList,
          { id: Math.random(), name: task, isCompleted: false },
        ],
      };
    });
    setTask("");
    setListType("");
  };
  const handleDelete = (id) => {
    const afterDeleteList = todoList.taskList
      .filter((val) => val.id !== id)
      .map((val) => {
        return val;
      });
    setTodoList((prev) => {
      return {
        ...prev,
        taskList: afterDeleteList,
      };
    });
    setListType("");
  };
  const handleEdit = (id) => {
    setIsEdit(id);
  };
  const handleEditList = (e) => {
    const updatedList = todoList.taskList.map((val) => {
      if (val.id === isEdit) {
        return {
          ...val,
          name: e.target.value,
        };
      } else return val;
    });

    setTodoList((prev) => {
      return {
        ...prev,
        taskList: updatedList,
      };
    });
  };
  const handleCheck = (id) => {
    const updatedList = todoList.taskList.map((val) => {
      if (val.id === id) {
        return {
          ...val,
          isCompleted: !val.isCompleted,
        };
      } else return val;
    });
    setTodoList((prev) => {
      return {
        ...prev,
        taskList: updatedList,
      };
    });
    setListType("");
  };
  const handleShowList = ({ type }) => {
    if (type === "Completed" || "Incompleted") {
      const completedList = todoList.taskList
        .filter((val) =>
          type === "Completed" ? val.isCompleted : !val.isCompleted
        )
        .map((val) => {
          return val;
        });
      let update = type === "Completed" ? "completedList" : "incompletedList";
      setTodoList((prev) => {
        return {
          ...prev,
          [update]: completedList,
        };
      });
      setListType(type);
      return;
    } else {
      setTodoList((prev) => {
        return {
          ...prev,
        };
      });
      setListType("");
    }
  };
  const state = {
    setIsEdit,
    handleDelete,
    handleEdit,
    editId: isEdit,
    handleCheck,
    todolist: todoList,
    listType,
    getListType,
    handleEditList,
    handleSubmit,
    task,
    setTask: (e) => setTask(e.target.value),
    key: index,
    name: value.name,
    handleShowList,
  };
  return (
    <TodoContext.Provider value={state}>{props.children}</TodoContext.Provider>
  );
};

export default TodoState;
