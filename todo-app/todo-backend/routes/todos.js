const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  console.log("router.post")
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  console.log("findbyidmiddleware params: ", req.params)
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  console.log("request.params.id",req.params.id)
  console.log("req.params", req.params)
  console.log("req.todo", req.todo)
  //const todo = await Todo.findById(req.params.id)
  res.send(req.todo)
  //res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  //res.sendStatus(405); // Implement this
  const {text, done} = req.body
  //console.log(req.todo.id)
  //const updatedTodo = await Todo.findByIdAndUpdate(req.todo.id, {text, done}, {new: true})
  const upTodo = await Todo.findOneAndUpdate(req.todo.id, {text, done})
  //console.log(upTodo)
  res.send(upTodo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
