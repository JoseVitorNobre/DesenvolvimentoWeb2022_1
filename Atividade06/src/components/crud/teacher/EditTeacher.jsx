import { useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";

import FirebaseContext from "../../../utils/FirebaseContext";
import RestrictedPage from "../../../utils/RestrictedPage";
import FirebaseTeacherService from "../../../services/FireBaseTeacherService";

const EditTeacherPage = () =>
    <FirebaseContext.Consumer>
        {
            (firebase)=> 
                <RestrictedPage isLogged={firebase.getUser() != null}>
                    <EditTeacher firebase={firebase} />
                </RestrictedPage>
        }
    </FirebaseContext.Consumer>

const EditTeacher = (props) =>{
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const params = useParams();
    useEffect(
        ()=>{
            FirebaseTeacherService.retrieve(
                props.firebase.getFirestoreDb(),
                (teacher)=>{
                    setName(teacher.name)
                    setUniversity(teacher.university)
                    setDegree(teacher.degree)
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
        setLoading(true)
        const updatedTeacher =
        {
           name,university,degree
        }
        FirebaseTeacherService.update(
            props.firebase.getFirestoreDb(),
            ()=>{
                navigate("/listTeacher")
            },
            params.id,
            updatedTeacher)
    }
    const renderSubmitButton = () =>{
        if(loading){
            return(
                <div style={{paddingTop: 20}}>
                    <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="sr-only" style={{paddingLeft: 10 }}>Carregando...</span>
                    </button>
                </div>
            )
        }else{
            return(
                <div>
                    <div className="form-group" style={{ paddingTop: 10 }}>
                        <input type="submit" value="Editar Professor" className="btn btn-primary" />
                    </div>
                </div>
            )
        }
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
                {renderSubmitButton()}
            </form>
        </div>
    )
}

export default EditTeacherPage;