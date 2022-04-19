import React from "react";
import { teachers } from "./data";
import TeacherTableRow from "./TeacherTableRow";
const ListTeacher = () =>{
    function generateTable(){
    if(!teachers) return
        return teachers.map(
            (teacher,i)=>{
                return <TeacherTableRow teacher={teacher} key={i}/>
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