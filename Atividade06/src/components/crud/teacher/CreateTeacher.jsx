import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import FirebaseContext from "../../../utils/FirebaseContext";
import RestrictedPage from "../../../utils/RestrictedPage";
import FirebaseTeacherService from "../../../services/FireBaseTeacherService";

const CreateTeacherPage = (props) =>
    <FirebaseContext.Consumer>
        {
            (firebase)=>
                <RestrictedPage 
                    isLogged={firebase.getUser()!=null}
                    isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false} >
                    <CreateTeacher 
                        firebase={firebase}
                        setToast={props.setToast}
                        setShowToast={props.setShowToast}/>
                </RestrictedPage>
        
        }
    </FirebaseContext.Consumer>
const CreateTeacher = (props) =>{
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [validate, setValidate] = useState({name:'',university:'',degree:''})

    const validateFields = ()=> {
        let res = true
        setValidate({name:'',university:'',degree:''})
        if(name === '' || university === '' || degree === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {name:'',university:'',degree:''}
            if (name === '') validateObj.name = 'is-invalid'
            if (university === '') validateObj.university = 'is-invalid'
            if (degree === '') validateObj.degree = 'is-invalid'
            setValidate(validateObj)
        }

        return res
    }
    //Aqui so serve para exibir os dados que foram submetidos no form
    const handleSubmit = (event) =>{
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        const newTeacher = { name, university, degree }
        FirebaseTeacherService.create(
            props.firebase.getFirestoreDb(),
            (_id) => {
                if (_id != null) {
                    props.setToast({header:'Sucesso!',body:`Professor ${name} criado com sucesso com id ${_id}.`})
                    props.setShowToast(true)
                    setLoading(false)
                    navigate("/listTeacher")
                }else{
                    props.setToast({header:'Erro!',body:`Não foi possível criar o professor ${name}!`})
                    props.setShowToast(true)
                    setLoading(false)
                }
            },
            newTeacher
        )
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
                        <input type="submit" value="Criar Professor" className="btn btn-primary" />
                    </div>
                </div>
            )
        }
    }
    return(
        <div>
            <h2>Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" 
                           className={`form-control ${validate.name}`}
                           value={(name==null || name===undefined ? "" : name)}
                           name="name"
                           onChange={(event)=>setName(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Universidade</label>
                    <input type="text" 
                           className={`form-control ${validate.university}`}
                           value={(university==null || university===undefined ? "" : university)}
                           name="university"
                           onChange={(event)=>setUniversity(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>Titulação</label>
                    <input type="text" 
                           className={`form-control ${validate.degree}`}
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

export default CreateTeacherPage;