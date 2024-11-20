const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Trang thời trang");
});

module.exports = router;