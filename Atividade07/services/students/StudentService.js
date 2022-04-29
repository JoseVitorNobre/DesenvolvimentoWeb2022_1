const StudentModel = require('../../models/students/StudentModel')

let students = [
    {_id:0,name:'Vitor',course:'Engenharia de Software',ira:7.5},
    {_id:1,name:'Higor',course:'Engenharia de Software',ira:7.5},
    {_id:2,name:'Alexson',course:'Engenharia de Software',ira:7.5},
    {_id:3,name:'Daniel',course:'Engenharia de Software',ira:7.5}
]
let _id = 4

class StudentService{
    static register(data){
        let student = new StudentModel(
        _id++,
        data.name,
        data.course,
        data.ira);
        students.push(student);
        return student;
    }
    static list(){
        return students;
    }
    static update(_id,data){
        for(let s of students){
            if(s._id == _id){
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s;
            }
        }
        return null;
    }
    static delete(_id){
        for( let i = 0; i < students.length; i++){
            if(students[i]._id == _id){
                students.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for( let i = 0; i < students.length; i++){
            if(students[i]._id == _id){
                return students[i];
            }
        }
        return {};
    }
}

module.exports = StudentService;