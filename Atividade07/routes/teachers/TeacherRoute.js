var express = require('express');
var router = express.Router();
var TeacherService = require('../../services/teachers/TeacherService');

router.get(
    '/list',
    function(req, res, next){
        return res.json(TeacherService.list())
    }
)
router.post(
    '/create', 
    function (req, res, next) {
        const teacher = TeacherService.register(req.body);
        return res.json(teacher);
   }
)
router.put(
    '/update/:id', 
    function (req, res, next) {
        const teacher = TeacherService.update(req.params.id, req.body);
        return res.json(teacher);
   }
)
router.delete(
    '/delete/:id', 
    function (req, res, next) {
        const ok = TeacherService.delete(req.params.id);
        if (ok) return res.json({ "sucess": true });
        else return res.json({ "sucess": false });
   }
)
router.get(
    '/retrieve/:id', 
    function (req, res, next) {
        const teacher = TeacherService.retrieve(req.params.id);
        return res.json(teacher);
   }
)
module.exports = router