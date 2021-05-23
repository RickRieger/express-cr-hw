const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;
console.log(uuidv4);
let todos = [
  {
  id: "haf24jd",
  todo: "do laundry",
  done: false
  },
  {
  id: "jp2nkl2",
  todo: "wash dishes",
  done: true
  }
  ]
router.get("/get-all-todos", function (req, res) {
  res.json({todos});
});
router.get("/get-todo-by-id/:id", function (req, res) {
  const id = req.params.id;
  let foundTodo;
  todos.forEach(function (element) {
    if (element.id === id) {
      foundTodo = element;
    }
  });
  if (!foundTodo) {
    res.json({ message: "The Todo ID you are looking for does not exists, please check ID" });
  } else {
    res.json({ foundTodo });
  }
});
router.get("/get-todos-by-done/:boolean", function (req, res) {
  const boolean = req.params.boolean;
  let newDoneArray = [];
  todos.forEach(function (element) {
    if (element.done === boolean) {
      newDoneArray.push(element);
    }
  });
  res.json(newDoneArray);
});
router.post("/create-new-todo", function (req, res) {
  let newToDo = {
    id: uuidv4(),
    todo: req.body.todo,
    done: false
  };
  let isTrue = true;
  todos.forEach((element)=>{ 
    if (element.todo === newToDo.todo){
      res.json({ message: "This todo already exists!"});
      isTrue = false;
    }
  });
  if(isTrue){
    todos.push(newToDo);
    res.json({ todos });
   }
});


module.exports = router;