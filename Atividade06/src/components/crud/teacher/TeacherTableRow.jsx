import React from "react";
import { Link } from "react-router-dom";
const TeacherTableRow = (props)=>{
    const {id, name, university, degree} = props.teacher;
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td><Link to={`/editTeacher/${id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger">Apagar</button></td>
        </tr>
    )
}

export default TeacherTableRow;