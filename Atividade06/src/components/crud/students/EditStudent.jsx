import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FireBaseStudentService";
import RestrictedPage from "../../../utils/RestrictedPage";

const EditStudentPage = (props) =>
    <FirebaseContext.Consumer>
        {
            (firebase) =>
                <RestrictedPage 
                    isLogged={firebase.getUser() != null}
                    isEmailVerified={(firebase.getUser() != null)?firebase.getUser().emailVerified:false}>
                    <EditStudent 
                        firebase={firebase} 
                        setToast={props.setToast}
                        setShowToast={props.setShowToast}
                        />
                </RestrictedPage>

        }
    </FirebaseContext.Consumer>

const EditStudent = (props) =>{
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const [loading, setLoading] = useState(false)
    const params = useParams();
    const [validate, setValidate] = useState({name:'',course:'',ira:''})

    const navigate = useNavigate();

    const validateFields = ()=> {
        let res = true
        setValidate({name:'',course:'',ira:''})
        if(name === '' || course === '' || ira === ''){
            props.setToast({header:'Erro!',body:'Preencha todos os campos.'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {name:'',course:'',ira:''}
            if (name === '') validateObj.name = 'is-invalid'
            if (course === '') validateObj.course = 'is-invalid'
            if (ira === '') validateObj.ira = 'is-invalid'
            setValidate(validateObj)
        }

        if(ira !== '' && (ira < 0 || ira > 10)){
            props.setToast({header:'Erro!',body:'O IRA deve ser um valor entre 0 e 10!'})
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = {name:'',course:'',ira:''}
            validateObj.ira = 'is-invalid'
            setValidate(validateObj)
        }
        return res
    }
    useEffect(
        ()=>{
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

    const handleSubmit = (event) =>{
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        const updatedStudent =
        {
           name,course,ira
        }
        FirebaseStudentService.update(
            props.firebase.getFirestoreDb(),
            ()=>{
                props.setToast({header:'Sucesso!',body:`Aluno ${name} editado com sucesso.`})
                props.setShowToast(true)
                navigate("/listStudent")
            },
            params.id,
            updatedStudent)
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
                        <input type="submit" value="Editar Estudante" className="btn btn-primary" />
                    </div>
                </div>
            )
        }
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
                           className={`form-control ${validate.name}`}
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
                           className={`form-control ${validate.course}`}
                           value={(course==null || course===undefined ? "" : course)}
                           name="course"
                           onChange={(event)=>setCourse(event.target.value)}
                           />
                </div>
                <div className="form-group">
                    <label>IRA</label>
                    <input type="text" 
                           className={`form-control ${validate.ira}`}
                           value={(ira==null || ira===undefined ? 0 : ira)}
                           name="ira"
                           onChange={(event)=>setIra(event.target.value)}
                           />
                </div>
                {renderSubmitButton()}
            </form>
        </div>
    )
}

export default EditStudentPage;