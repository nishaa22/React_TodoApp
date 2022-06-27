import React,{useContext} from "react";
import Button from "./button";
import Form from "./form";
import List from "./list";
import { BUTTON_NAME } from "../constant/index";
import { getListType } from "../util";
// import TodoState from "../context/todoState";
import TodoContext from '../context/todoState'

const Todos = (props) => {
  const dada=useContext(TodoContext)
  // const {value,val:{name=""}={}} =props

  // const [task, setTask] = useState('')
  // const [listType, setListType] = useState('')
  // const [todoList, setTodoList] = useState({
  //     taskList: [],
  //     completedList: [],
  //     incompletedList: [],
  // })
  // const [isEdit, setIsEdit] = useState('')

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     setTodoList((prev) => {
  //         return {
  //             ...prev,
  //             taskList: [
  //                 ...prev.taskList,
  //                 { id: Math.random(), name: task, isCompleted: false },
  //             ],
  //         }
  //     })
  //     setTask('')
  //     setListType('')
  // }
  // const handleDelete = (id) => {
  //     const afterDeleteList = todoList.taskList
  //         .filter((val) => val.id !== id)
  //         .map((val) => {
  //             return val
  //         })
  //     setTodoList((prev) => {
  //         return {
  //             ...prev,
  //             taskList: afterDeleteList,
  //         }
  //     })
  //     setListType('')
  // }
  // const handleEdit = (id) => {
  //     setIsEdit(id)
  // }
  // const handleEditList = (e) => {
  //     const updatedList = todoList.taskList.map((val) => {
  //         if (val.id === isEdit) {
  //             return {
  //                 ...val,
  //                 name: e.target.value,
  //             }
  //         } else return val
  //     })

  //     setTodoList((prev) => {
  //         return {
  //             ...prev,
  //             taskList: updatedList,
  //         }
  //     })
  // }
  // const handleCheck = (id) => {
  //     const updatedList = todoList.taskList.map((val) => {
  //         if (val.id === id) {
  //             return {
  //                 ...val,
  //                 isCompleted: !val.isCompleted,
  //             }
  //         } else return val
  //     })
  //     setTodoList((prev) => {
  //         return {
  //             ...prev,
  //             taskList: updatedList,
  //         }
  //     })
  //     setListType('')
  // }
  // const handleShowList = ({ type }) => {
  //     if (type === 'Completed' || 'Incompleted') {
  //         const completedList = todoList.taskList
  //             .filter((val) =>
  //                 type === 'Completed' ? val.isCompleted : !val.isCompleted
  //             )
  //             .map((val) => {
  //                 return val
  //             })
  //         let update =
  //             type === 'Completed' ? 'completedList' : 'incompletedList'
  //         setTodoList((prev) => {
  //             return {
  //                 ...prev,
  //                 [update]: completedList,
  //             }
  //         })
  //         setListType(type)
  //         return
  //     } else {
  //         setTodoList((prev) => {
  //             return {
  //                 ...prev,
  //             }
  //         })
  //         setListType('')
  //     }
  // }
  console.log(dada,'XXXXX')
  return (
    <>
      <div className="container my-5">
        <h1>Todo App</h1>
        <hr className="mb-5" />

        {/* <Form
          handleSubmit
          task
          setTask
        /> */}

        <hr className="ms-4" />
{/* 
        <List
          setIsEdit
          handleDelete
          handleEdit
          editId
          handleCheck
          todolist
          listType
          getListType
          handleEditList
        /> */}

        {/* <div className="filterTask my-3">
          {BUTTON_NAME.map((value, index) => {
            return (
              <Button
                key={index}
                name={value.name}
                handleShowList
              />
            );
          })}
        </div> */}
      </div>
    </>
  );
};
export default Todos;
