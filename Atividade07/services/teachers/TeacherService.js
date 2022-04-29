const TeacherModel = require('../../models/teachers/TeacherModel')

let teachers = [
    {_id:0,name:'Jefferson',university:'UFC - Quixada',degree:'Doutorado'},
    {_id:1,name:'Aragão',university:'UFC - Quixada',degree:'Mestrado'},
    {_id:2,name:'Carla',university:'UFC - Quixada',degree:'Doutorado'},
    {_id:3,name:'Diana',university:'UFC - Quixada',degree:'Mestrado'}
]
let _id = 4

class TeacherService{
    static register(data){
        let teacher = new TeacherModel(
        _id++,
        data.name,
        data.university,
        data.degree);
        teachers.push(teacher);
        return teacher;
    }
    static list(){
        return teachers;
    }
    static update(_id,data){
        for(let s of teachers){
            if(s._id == _id){
                s.name = data.name
                s.university = data.university
                s.degree = data.degree
                return s;
            }
        }
        return null;
    }
    static delete(_id){
        for( let i = 0; i < teachers.length; i++){
            if(teachers[i]._id == _id){
                teachers.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        for( let i = 0; i < teachers.length; i++){
            if(teachers[i]._id == _id){
                return teachers[i];
            }
        }
        return {};
    }
}

module.exports = TeacherService;