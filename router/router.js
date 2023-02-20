const express = require('express')
const { getAllUser, addNewUser, upDateUser, deleteUser, getUserId } = require('../controller/User-controller')
const router = express.Router()

router.get("/", getAllUser)
router.post("/", addNewUser)
router.put("/:id", upDateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUserId)

module.exports = router