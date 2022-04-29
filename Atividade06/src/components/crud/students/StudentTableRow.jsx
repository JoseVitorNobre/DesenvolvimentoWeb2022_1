import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const StudentTableRow = (props)=>{
    const {_id, name, course, ira} = props.student;
    function deleteStudent() {
        if(window.confirm(`Deseja mesmo excluir o elemento correspondente ao ID: ${_id}?`)){
            axios.delete(`http://localhost:3002/crud/students/delete/${_id}`)
            .then(response=>{
                    props.deleteStudentById(_id)
                }
            )
            .catch(error=>console.log(error))
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