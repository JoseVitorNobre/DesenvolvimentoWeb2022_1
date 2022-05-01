import { useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
// import { teachers } from "./data";
import axios from "axios";

const EditTeacher = (props) =>{
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    useEffect(
        ()=>{
            axios.get('http://localhost:3002/crud/teachers/update/' + params.id)
                .then(
                    (res) => {
                        setName(res.data.name)
                        setUniversity(res.data.university)
                        setDegree(res.data.degree)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }
        ,
        [params.id]
    )
    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        event.preventDefault()
        const updatedStudent =
        {
           name,university,degree
        }
        axios.put('http://localhost:3002/crud/teachers/update/' + params.id, updatedStudent)
            .then(
                res => {
                    //console.log(res.data)
                    //props.history.push('/listStudent');
                    console.log(props)
                    alert("Professor editado")
                    navigate("/listTeacher")
                }
            )
            .catch(error => console.log(error))
    }
    return(
        <div>
            <h2>Editar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" 
                           className="form-control"
                           value={(name==null || name===undefined ? "" : name)}
                           name="name"
                           onChange={(event)=>setName(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Universidade</label>
                    <input type="text" 
                           className="form-control"
                           value={(university==null || university===undefined ? "" : university)}
                           name="university"
                           onChange={(event)=>setUniversity(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Titulação</label>
                    <input type="text" 
                           className="form-control"
                           value={(degree==null || degree===undefined ? "" : degree)}
                           name="degree"
                           onChange={(event)=>setDegree(event.target.value)}
                           />
                </div>
                <div className="form-group" style={{paddingTop: 10}}>
                    <input type="submit" value="Editar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditTeacher;