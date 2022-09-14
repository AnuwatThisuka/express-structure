const express = require("express");
const router = express.Router();
const AssemblyController = require("../controller/Assembly.controller");

router.get("/cdd", AssemblyController.getMultiple);

module.exports = router;
