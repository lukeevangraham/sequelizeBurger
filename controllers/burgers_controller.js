var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({
    order: [
      ['burger_name']
    ],
    include: [db.Customer]
  }).then(function(data) {
    let newData = [];
    data.forEach(burger => {
      newData.push(burger.dataValues);
    });
    var hbsObject = {
      burgers: newData
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("INSERTING: ", req.body.burger_name);
  // console.log('devoured', req.body.devoured)
  // burger.insertOne([
  //   "burger_name", "devoured"
  // ], [
  //   req.body.burger_name, req.body.devoured
  // ], function(result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });

  // console.log('devoured', req.body.devoured)
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: 0
  }).then(function(result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  let devouredStatus = { devoured: "1" };

  db.Burger.update(devouredStatus, {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });
});

router.post("/api/customers/", function(req, res) {
  console.log("inserting", req.body.name)
  db.Customer.create({
    name: req.body.name,
    BurgerId: req.body.BurgerId
  }).then(function(result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
