const router = require("express").Router();
const {CreateEmployee} = require("../controller/AdminCntrlr/AdminCntrlr");
router.post('/CreateEmployee',CreateEmployee);

module.exports= router;