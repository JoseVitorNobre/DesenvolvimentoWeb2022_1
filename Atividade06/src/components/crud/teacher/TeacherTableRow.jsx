import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const TeacherTableRow = (props)=>{
    const {id, name, university, degree} = props.teacher;
    function deleteTeachers() {
        axios.delete(`http://localhost:3001/teachers/${id}`)
        .then(
            response=>{
                console.log(`Registro ${id} apagado`)
            }
        )
        .catch(error=>console.log(error))
    }
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td><Link to={`/editTeacher/${id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger" onClick={deleteTeachers}>Apagar</button></td>
        </tr>
    )
}

export default TeacherTableRow;