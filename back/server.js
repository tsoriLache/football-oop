const express = require('express')
const bodyParser = require('body-parser')
const {Player, GoalKeeper} = require('./classes') 
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');
const cors = require('cors')
const { json } = require('body-parser')
const { plainToClass } = require('class-transformer') ;
require('reflect-metadata');
app.use('/',cors())
app.use('/',bodyParser.json())

// let pl1 = new Player('lionel',200,'messi',39,234,'left','CF','siiii');
// console.log(pl1);

app.post('/player', (req, res) => {
  fs.writeFileSync(`./players/${req.body[0]} ${req.body[1]}`,JSON.stringify(new Player(...req.body)))
  res.json(new Player(...req.body))
})
app.get('/player/:name', (req, res) => {
  const { name } = req.params;
  res.send(fs.readFileSync(`./players/${name}`))
})

app.get('/celebration/', (req, res) => {
  const {name} = req.query;
  const player1 = plainToClass(Player,JSON.parse(fs.readFileSync(`./players/${name}`)))
  const celebration = (player1.goalClebration());
  fs.writeFileSync(`./players/${name}`,JSON.stringify(player1))
  res.send(celebration)
})

app.put('/player/salary', (req, res) => {
  const {name} = req.query;
  const salary = req.query.salary; 
  console.log(name,salary);
  const player1 = plainToClass(Player,JSON.parse(fs.readFileSync(`./players/${name}`)))
  player1.salary = salary
  res.send(player1.salary);
})


// app.post('/goalKeeper', (req, res) => {
//     res.send(new GoalKeeper(req.body))
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})