import React from "react";
import { Link } from "react-router-dom";
import FireBaseTeacherService from "../../../services/FireBaseTeacherService";

const TeacherTableRow = (props)=>{
    const {_id, name, university, degree} = props.teacher;
    function deleteTeachers() {
        if(window.confirm(`Deseja mesmo excluir o professor correspondente ao ID: ${_id}?`)){
            FireBaseTeacherService.delete(
                props.firestoreDb,
                ()=>{},
                _id
            )
        }
    }
    return(
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td><Link to={`/editTeacher/${_id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger" onClick={deleteTeachers}>Apagar</button></td>
        </tr>
    )
}

export default TeacherTableRow;