const express = require("express");
const router = express.Router();

const controller = require("../user/controller");

router.get("/", controller.findAll);
router.get("/:id", controller.findUser);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
