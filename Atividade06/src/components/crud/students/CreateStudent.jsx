import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FireBaseStudentService";

const CreateStudentPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                //if(firebase.getAuthenticatedUser()!=null)
                if(localStorage.getItem('user')!='null')
                    return <CreateStudent firebase={firebase} />
                return
            }
        }
    </FirebaseContext.Consumer>
    
function CreateStudent(props){
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);
    const navigate = useNavigate();
    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        event.preventDefault()

        const newStudent = { name, course, ira }
        // axios.post('http://localhost:3002/crud/students/create', newStudent)
        //     .then(
        //         (res) => {
        //             console.log(res.data._id)
        //             alert("Aluno criado")
        //             navigate("/listStudent")
        //         }
        //     )
        //     .catch(
        //         (error) => {
        //             console.log(error)
        //         }
        //     )
        // alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`)
        FirebaseStudentService.create(
            props.firebase.getFirestoreDb(),
            () => {
                navigate("/listStudent")
            },
            newStudent)

        console.log(name)
        console.log(course)
        console.log(ira)
    }
    return(
        <div>
            <h2>Criar Estudante</h2>
            {/* Formulario para criar um estudante */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" 
                           className="form-control"
                        // Se o valor do input for nulo ou indefinido o nome é == "" se não ele 
                        // fica com o valor do input
                           value={(name==null || name===undefined ? "" : name)}
                           name="name"
                           onChange={(event)=>setName(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Curso</label>
                    <input type="text" 
                           className="form-control"
                           value={(course==null || course===undefined ? "" : course)}
                           name="course"
                           onChange={(event)=>setCourse(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>IRA</label>
                    <input type="text" 
                           className="form-control"
                           value={(ira==null || ira===undefined ? 0 : ira)}
                           name="ira"
                           onChange={(event)=>setIra(event.target.value)}
                           />
                </div>
                <div className="form-group" style={{paddingTop: 10}}>
                    <input type="submit" value="Criar Estudante" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateStudentPage;