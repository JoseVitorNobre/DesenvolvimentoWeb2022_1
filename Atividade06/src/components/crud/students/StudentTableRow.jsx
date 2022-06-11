import React from "react";
import { Link } from "react-router-dom";

import FireBaseStudentService from "../../../services/FireBaseStudentService";

const StudentTableRow = (props)=>{
    const {_id, name, course, ira} = props.student;
    function deleteStudent() {
        if(window.confirm(`Deseja mesmo excluir o aluno correspondente ao ID: ${_id}?`)){
            FireBaseStudentService.delete(
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
            <td>{course}</td>
            <td>{ira}</td>
            <td><Link to={`/editStudent/${_id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger" onClick={deleteStudent}>Apagar</button></td>
        </tr>
    )
}

export default StudentTableRow;