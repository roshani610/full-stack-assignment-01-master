var express = require('express');
var router = express.Router();
const employee = require("../controller/employee.controller.js");
const cors = require('cors')
/* GET users listing. */


router.get("/", cors(), employee.findAll);
router.get("/search", cors(), employee.findSearch);
router.post("/create", cors() ,employee.create);
router.put("/:id", cors(), employee.update);
router.delete("/:id", cors(), employee.delete);
module.exports = router;
