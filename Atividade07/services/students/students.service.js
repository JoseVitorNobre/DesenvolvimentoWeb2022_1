const StudentModel = require('../../models/students/students.model');

class StudentService {

    //retorna um objeto que representa um Student
    static create(req,res){
        StudentModel.create(req.body).then(
            (student)=>{
                res.status(201).json(student);
            }   
        );
    }
    //retorna um vetor de students
    static list(req,res){
        StudentModel.find().then(
            (students)=>{
                res.status(200).json(students);
            }
        );
    }

    //retorna um student atualizado
    static update(req,res){
        StudentModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
        (student)=>{
            res.status(200).json(student);
        }
    );
    }
    //retorna o student deletado
    static delete(req,res){
        StudentModel.findByIdAndRemove(req.params.id).then(
            (student)=>{
                res.status(200).json(student);
            }
        );
    }
    //retorna um student
    static retrieve(req,res){
        StudentModel.findById(req.params.id).then(
            (student)=>{
                res.status(200).json(student);
            }
        );
    }
    
}

module.exports = StudentService;