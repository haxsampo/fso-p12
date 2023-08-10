const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
//const { MONGO_URL } = require('../util/config')
const {getAsync, setAsync} = require('../redis/index')

/* GET todos listing. */
router.get('/', async (_, res) => {
  console.log("router get")
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  console.log("router.post")
  const todosn = await getAsync("added_todos")
  if (todosn) {
    await setAsync("added_todos", 1+parseInt(todosn))
  } else {
    await setAsync("added_todos", 1)
  }
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
  console.log("singlerouter delete")
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  console.log("singleRouter get")
  //console.log("request.params.id",req.params.id)
  //console.log("req.params", req.params)
  //console.log("req.todo", req.todo)
  res.send(req.todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  console.log("singlerouter put")
  const {text, done} = req.body
  const upTodo = await Todo.findOneAndUpdate(req.todo.id, {text, done})
  res.send(upTodo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
