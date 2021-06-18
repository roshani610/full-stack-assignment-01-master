const Employee = require("../models/mongoose/employee.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  console.log('on create');
  console.log(req.body);
   // Create a Employee
   const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    type: req.body.type,
    dob: req.body.dob,
    hobbies: req.body.hobbies,
    picture: req.body.picture
  });
   // Save Employee in the database
   employee
   .save(employee)
   .then(data => {
     res.send({'data': data});
   })
   .catch(err => {
     console.log(err)
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Employee."
     });
   });
};

// Retrieve all Employee from the database.
exports.findAll = (req, res) => {
  Employee.find()
    .then(data => {
      console.log('data:', data);
      res.send({'data': data});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee."
      });
    });
};

// Retrieve all Employee from the database.
exports.findSearch = (req, res) => {
  console.log(req.query);
  const searchData = req.query.searchValue;
  var fCond = searchData ? { firstName: { $regex: new RegExp(searchData), $options: "i" } } : {};
  var lCond = searchData ? { lastName: { $regex: new RegExp(searchData), $options: "i" } } : {};
  var eCond = searchData ? { email: { $regex: new RegExp(searchData), $options: "i" } } : {};
  Employee.find({where: {
    firstName: fCond,
    lastName: lCond,
    email:eCond
  }})
    .then(data => {
      console.log('data searcg:', data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee."
      });
    });
};
// Update a Employee by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found!`
        });
      } else res.send({ message: "Employee was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
  
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      } else {
        res.send({
          message: "Employee was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
};
