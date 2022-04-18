import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { students } from "./data";

const EditTeacher = () =>{
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const params = useParams();
    useEffect(
        ()=>{
            const student = students[params.id]
            setName(student.name)
            setCourse(student.course)
            setIra(student.ira)
        }
    )
    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`)
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
                    <input type="submit" value="Editar Professor" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditTeacher;