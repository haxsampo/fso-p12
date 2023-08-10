const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')
const {getAsync, setAsync} = require('../redis/index')
let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  console.log("routes/index.js STATISTICS")
  const todosn = await getAsync("added_todos")
  if(todosn) {
    res.send(todosn)
  } else {
    res.send({"added_todos":0})
  } 
});

module.exports = router;
