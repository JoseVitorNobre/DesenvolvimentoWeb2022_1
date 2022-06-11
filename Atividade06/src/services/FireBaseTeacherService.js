import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";

export default class FirebaseTeacherService {

    static list = (firestore,callback)=>{
        const coll = collection(firestore,'teacher')
        getDocs(coll)
        .then(
            (querySnapshot)=>{
                let teachers = []
                querySnapshot.forEach(
                    (document)=>{
                        //console.log(document.data());
                        teachers.push(
                            {
                                _id:document.id,
                                name:document.data().name,
                                degree:document.data().degree,
                                university:document.data().university   
                            }
                        )
                    }
                )//forEach
                callback(teachers) //mensagem para o pai ListTeacher
            }//querySnapshot
        )
        .catch(error=>console.log(error))
    }

    static list_onSnapshot = (firestore,callback)=>{
        const coll = collection(firestore,'teacher')
        const q = query(coll,orderBy('name'))
        onSnapshot(
            q,
            (querySnapshot)=>{
                let teachers = []
                querySnapshot.forEach(
                    (document)=>{
                        //console.log(document.data());
                        teachers.push(
                            {
                                _id:document.id,
                                name:document.data().name,
                                degree:document.data().degree,
                                university:document.data().university     
                            }
                        )
                    }
                )//forEach
                callback(teachers) //mensagem para o pai ListTeacher
            }
        )
    }

    static retrieve = (firestore,callback,_id)=>{
        const docRef = doc(firestore,'teacher',_id)
        getDoc(docRef)
        .then(
            (docSnapshot)=>{
                if (docSnapshot.exists()) callback(docSnapshot.data())
            }
        )
        .catch(error=>console.log(error))
    }

    static update = (firestore,callback,_id,teacher)=>{
        const docRef = doc(firestore,'teacher',_id)
        updateDoc(docRef,teacher)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))

    }

    static create = (firestore,callback,teacher)=>{
        const coll = collection(firestore,'teacher')
        addDoc(coll,teacher)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
        console.log('ok, terminei')
    }

    static delete = (firestore,callback,_id) => {
        const docRef = doc(firestore,'teacher',_id)
        deleteDoc(docRef)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
    }
}