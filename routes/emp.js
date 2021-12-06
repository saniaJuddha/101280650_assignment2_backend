const router = require("express").Router();
const { Employee } = require("../models/Employee");

//GET
router.get("/api/v1/employees", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  Employee.find().exec((err, employees) => {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, employees: employees });
  });
});

//GET BY ID
router.get("/api/v1/employees/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  id = req.params.id;
  Employee.findById(id, function (err, employee) {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, employee });
  });
});

//POST
router.post("/api/v1/employees", (req, res) => {
  const newEmployee = new Employee(req.body);
  newEmployee.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json("New Employee Resource is Created");
  });
});

//EDIT
router.put("/api/v1/employees/:id", (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

//DELETE
router.delete("/api/v1/employees/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json("Employee Resource is Deleted");
  });
});

module.exports = router;