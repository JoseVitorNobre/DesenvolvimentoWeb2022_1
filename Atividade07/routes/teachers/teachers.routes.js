var express = require("express");
var router = express.Router();
var teacherService = require("../../services/teachers/teachers.service");

router.get("/list",
    function (req, res, next) {
        teacherService.list(req, res);
    }
);

router.post("/create",
    function (req, res, next) {
        teacherService.create(req, res);
    }
);
router.put("/update/:id",
    function (req, res, next) {
        teacherService.update(req, res);
    }
);
router.delete("/delete/:id",
    function (req, res, next) {
        teacherService.delete(req, res);
    }
);
router.get("/retrieve/:id",
    function (req, res, next) {
        teacherService.retrieve(req, res);
    }
);

module.exports = router;
