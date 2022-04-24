import React, { useEffect, useState } from "react";
// import { students } from "./data";
import axios from "axios";

import StudentTableRow from "./StudentTableRow";
const ListStudent = () =>{
    const [students, setStudents] = useState([])
    useEffect(
        () => {
            axios.get("http://localhost:3001/students")
                .then(
                    (res) => {
                        setStudents(res.data)
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
    function generateTable() {
        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow student={student} key={i} />
            }
        )
    }
    return(
        <div>
            <h2>Listar Estudante</h2>
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>IRA</th>
                    <th colSpan="2"></th>
                </thead>
                <tbody>
                    {generateTable()}
                </tbody>
                
            </table>
        </div>
    )
}
export default ListStudent;