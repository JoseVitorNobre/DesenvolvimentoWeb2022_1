import React, { useEffect, useState } from "react";
// import { teachers } from "./data";
import TeacherTableRow from "./TeacherTableRow";
import axios from "axios";

const ListTeacher = () =>{
    const [teachers, setTeachers] = useState([])
    useEffect(
        () => {
            axios.get("http://localhost:3002/crud/teachers/list")
                .then(
                    (res) => {
                        setTeachers(res.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }
        ,
        []
    )
    function deleteTeacherById(_id){
        let teachersTemp = teachers
        for(let i = 0; i < teachersTemp.length;i++)
            if(teachersTemp[i]._id === _id)
                teachersTemp.splice(i,1)
        setTeachers([...teachersTemp])
    }
    function generateTable(){
        if(!teachers) return
            return teachers.map(
                (teacher,i)=>{
                    return <TeacherTableRow teacher={teacher} key={i} deleteTeacherById={deleteTeacherById}/>
                }
            );
    }
    return(
        <div>
            <h2>Listar Professor</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Universidade</th>
                    <th>Titulação</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
                
            </table>
        </div>
    )
}
export default ListTeacher;