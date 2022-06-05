import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { students } from "./data";
import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FireBaseStudentService";

const EditStudentPage = () =>
    <FirebaseContext.Consumer>
        {(firebase)=><EditStudent firebase={firebase} />}
    </FirebaseContext.Consumer>

const EditStudent = (props) =>{
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const params = useParams();
    const navigate = useNavigate();
    useEffect(
        ()=>{
            // axios.get('http://localhost:3002/crud/students/update/' + params.id)
            //     .then(
            //         (res) => {
            //             setName(res.data.name)
            //             setCourse(res.data.course)
            //             setIra(res.data.ira)
            //         }
            //     )
            //     .catch(
            //         (error) => {
            //             console.log(error)
            //         }
            //     )
            FirebaseStudentService.retrieve(
                props.firebase.getFirestoreDb(),
                (student)=>{
                    setName(student.name)
                    setCourse(student.course)
                    setIra(student.ira)
                },
                params.id
            )
        }
        ,
        [params.id,props]
    )
    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        event.preventDefault()
        const updatedStudent =
        {
           name,course,ira
        }
        // axios.put('http://localhost:3002/crud/students/update/' + params.id, updatedStudent)
        //     .then(
        //         res => {
        //             //console.log(res.data)
        //             //props.history.push('/listStudent');
        //             console.log(props)
        //             alert("Aluno editado")
        //             navigate("/listStudent")
        //         }
        //     )
        //     .catch(error => console.log(error))
        // alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`)
        FirebaseStudentService.update(
            props.firebase.getFirestoreDb(),
            ()=>{
                navigate("/listStudent")
            },
            params.id,
            updatedStudent)
    }
    return(
        <div>
            {/* Ctrl C + Ctrl v do CreateStudent */}
            {/* Aqui ele redireciona para os inputs com os os valores da tabela, só n da pra editar */}
            <h2>Editar Estudante</h2>
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
                    <input type="submit" value="Editar Estudante" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditStudentPage;