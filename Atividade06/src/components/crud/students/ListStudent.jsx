import React, { useEffect, useState } from "react";
import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import RestrictedPage from "../../../utils/RestrictedPage";
import FireBaseStudentService from "../../../services/FireBaseStudentService";

const ListStudentPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase)=> 
                <RestrictedPage isLogged={firebase.getUser() != null}>
                    <ListStudent firebase={firebase}/>
                </RestrictedPage>
        }
    </FirebaseContext.Consumer>
const ListStudent = (props) =>{
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(
        () => {
            setLoading(true)
            FireBaseStudentService.list_onSnapshot(
                props.firebase.getFirestoreDb(),
                (students)=>{
                    setStudents(students)
                    setLoading(false)
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
        if(loading){
            return (
                <tr>
                    <td colSpan={5}>
                        <div class="text-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        }else{
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