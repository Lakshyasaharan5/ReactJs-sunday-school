import React,{useState , ChangeEvent, useEffect}from "react";
import { deleteArray } from "../../redux/classAssessment"
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { FinalAssessment } from "../assessment/Assesment";


export default function AssessmentStudentList(){
   
    const storeAssessmentArray:[FinalAssessment] = useSelector((state:any)=>state.assessment.assessmentArray);
    const [assessmentArray,setAssessmentArray] = useState(storeAssessmentArray.map(
        s=>({
            "church_class" : s.church_class,
            "date" : s.date,
            "student_id":s.student_id,
            "student_name" : s.student_name,
            "attendance" : s.attendance,
            "songs_4" : s.songs_4,
            "worship_message" : s.worship_message,
            "table_message" : s.table_message,
            "behaviour" : s.behaviour,
            "memory_verses" : s.memory_verses,
            "total" : s.total,
            "remarks" : s.remarks,
        })
    ))
    const [newStudentsArray,setNewStudentsArray] = useState(assessmentArray.map(
        student=>({
            "id":student.student_id, 
            "church_class":student.church_class,
            "student_name":student.student_name,
            "attendance":student.attendance,
            buttonDisabled:true
            })
        ))
    for(let i in newStudentsArray){
        if(newStudentsArray[i].attendance==="present") newStudentsArray[i].buttonDisabled = false;
    }

    const navigate = useNavigate();
    const [isEmpty,setIsEmpty] = useState(true);

    useEffect(()=>{
        if(newStudentsArray.length === 0){
            navigate('/');
        }else{
            setIsEmpty(false)
        }
    },[newStudentsArray,navigate])
    
    const handleChange=(e:ChangeEvent<HTMLSelectElement>,id:number)=>{
        e.preventDefault();
        // console.log(e.target.value)
        if(e.target.value==="present"){
            setNewStudentsArray(newStudentsArray=>newStudentsArray.map(
                obj=>obj.id === id ? Object.assign(obj,{attendance:"present",buttonDisabled:false}) : obj))
        }else if(e.target.value==="absent"){
            setNewStudentsArray(newStudentsArray=>newStudentsArray.map(
                obj=>obj.id === id ? Object.assign(obj,{attendance:"absent",buttonDisabled:true}) : obj))
        }
    }

    

    
    const toAssessmentPage = (id:number) =>{
        navigate("/assessment",{
            state:{
                student_id:id
            }
        })
    }
    const dispatch = useDispatch();
    const submitClassAssessment=(e:any)=>{
        e.preventDefault();
        
        for(let i in newStudentsArray){
            if(newStudentsArray[i].attendance==="absent"){
                setAssessmentArray(assessmentArray=>assessmentArray.map(
                    obj=>obj.student_id===newStudentsArray[i].id ? Object.assign(obj,{attendance:"absent",songs_4:"0",memory_verses:"0",behaviour:"0",worship_message:"0",table_message:"0",remarks:"",total:"0"}) : obj
                ))
            }
        }
        console.log(assessmentArray)
        dispatch(deleteArray())
        navigate("/")
    }

    
    return (
        <>{ isEmpty ? null : 
        <div className="container">
            <ul>
            {newStudentsArray.map(s=>( 
                    <li key={s.id}>
                        <div className="border-bottom py-2">
                            <h3>{s.student_name}</h3>
                            <div className="container">
                                <div className="row" >
                                <label htmlFor="attendance" className="form-label col">Attendance :</label>
                                    <select name="attendance" defaultValue={s.attendance} onChange={(e)=>handleChange(e,s.id)} className="form-select form-select-sm col">
                                        <option value="present">Present</option>
                                        <option value="absent">Absent</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <button className="btn btn-secondary btn-sm" disabled={s.buttonDisabled} onClick={()=>toAssessmentPage(s.id)}>give assessment</button>
                        </div>
                    </li>
            ))}    
            </ul>
            <div className="mb-3">
                <Link to="/"><button className="btn btn-secondary float-start" type="button">Back</button></Link>
                <button className="btn btn-primary float-end" type="button" onClick={(e)=>submitClassAssessment(e)} >Submit</button>
            </div>
            
            <div className="clearfix"></div>
            
        </div>}
        </>
    );
}