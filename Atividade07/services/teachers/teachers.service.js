const TeacherModel = require('../../models/teachers/teachers.model');

class TeacherService {

    //retorna um objeto que representa um Teacher
    static create(req,res){
        TeacherModel.create(req.body).then(
            (teacher)=>{
                res.status(201).json(teacher);
            }   
        );
    }
    //retorna um vetor de teachers
    static list(req,res){
        TeacherModel.find().then(
            (teachers)=>{
                res.status(200).json(teachers);
            }
        );
    }

    //retorna um teacher atualizado
    static update(req,res){
        TeacherModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
        (teacher)=>{
            res.status(200).json(teacher);
        }
    );
    }
    //retorna o teacher deletado
    static delete(req,res){
        TeacherModel.findByIdAndRemove(req.params.id).then(
            (teacher)=>{
                res.status(200).json(teacher);
            }
        );
    }
    //retorna um teacher
    static retrieve(req,res){
        TeacherModel.findById(req.params.id).then(
            (teacher)=>{
                res.status(200).json(teacher);
            }
        );
    }
    
}

module.exports = TeacherService;