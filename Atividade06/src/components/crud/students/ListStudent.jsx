import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import FireBaseStudentService from "../../../services/FireBaseStudentService";

const ListStudentPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase)=><ListStudent firebase={firebase}/>
        }
    </FirebaseContext.Consumer>
const ListStudent = (props) =>{
    const [students, setStudents] = useState([])
    useEffect(
        () => {
            // axios.get("http://localhost:3002/crud/students/list")   
            //     .then(
            //         (res) => {
            //             setStudents(res.data)
            //         }
            //     )
            //     .catch(
            //         (error) => {
            //             console.log(error)
            //         }
            //     )
            FireBaseStudentService.list_onSnapshot(
                props.firebase.getFirestoreDb(),
                (students)=>{
                    setStudents(students)
                }
            )
        }
        ,
        [props]
    )
    function deleteStudentById(_id){
        let studentsTemp = students
        for(let i = 0; i < studentsTemp.length;i++)
            if(studentsTemp[i]._id === _id)
                studentsTemp.splice(i,1)
        setStudents([...studentsTemp])
    }
    function generateTable() {
        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow 
                            student={student} 
                            key={i} 
                            deleteStudentById={deleteStudentById}
                            firestoreDb = {props.firebase.getFirestoreDb()}
                            />
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
export default ListStudentPage;