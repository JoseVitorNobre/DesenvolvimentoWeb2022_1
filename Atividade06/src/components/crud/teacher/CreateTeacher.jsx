import React, {useState} from "react";
import axios from "axios";

const CreateTeacher = () =>{
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");

    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        event.preventDefault()

        const newTeacher = { name, university, degree }
        axios.post('http://localhost:3001/teachers', newTeacher)
            .then(
                (res) => {
                    console.log(res.data.id)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        alert(`Nome: ${name} \nUniversidade: ${university}\nTitulacao: ${degree}`)
    }
    return(
        <div>
            <h2>Criar Professor</h2>
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
                    <input type="submit" value="Criar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateTeacher;