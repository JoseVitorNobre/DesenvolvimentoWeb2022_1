import React, { useEffect, useState } from "react";
import TeacherTableRow from "./TeacherTableRow";
import RestrictedPage from "../../../utils/RestrictedPage";
import FirebaseContext from "../../../utils/FirebaseContext";
import FireBaseTeacherService from "../../../services/FireBaseTeacherService";

const ListTeacherPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase)=> 
                <RestrictedPage isLogged={firebase.getUser() != null}>
                    <ListTeacher firebase={firebase}/>
                </RestrictedPage>
        }
    </FirebaseContext.Consumer>
const ListTeacher = (props) =>{
    const [teachers, setTeachers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(
        () => {
            setLoading(true)
            FireBaseTeacherService.list_onSnapshot(
                props.firebase.getFirestoreDb(),
                (teachers)=>{
                    setTeachers(teachers)
                    setLoading(false)
                }
            )
        }
        ,
        [props]
    )
    function deleteTeacherById(_id){
        let teachersTemp = teachers
        for(let i = 0; i < teachersTemp.length;i++)
            if(teachersTemp[i]._id === _id)
                teachersTemp.splice(i,1)
        setTeachers([...teachersTemp])
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
            if (!teachers) return
            return teachers.map(
                (teacher, i) => {
                    return <TeacherTableRow 
                                teacher={teacher} 
                                key={i} 
                                deleteTeacherById={deleteTeacherById}
                                firestoreDb = {props.firebase.getFirestoreDb()}
                                />
                }
            )
        }
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
export default ListTeacherPage;