import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const StudentTableRow = ({student})=>{
    const {id, name, course, ira} = student;
    function deleteStudent() {
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(
            response=>{
                console.log(`Registro ${id} apagado`)
                deleteStudentById(id)
            }
        )
        .catch(error=>console.log(error))
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{ira}</td>
            <td><Link to={`/editStudent/${id}`} className="btn btn-warning">Editar</Link></td>
            <td><button className="btn btn-danger">Apagar</button></td>
        </tr>
    )
}

export default StudentTableRow;