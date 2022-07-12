import React,{useState , ChangeEvent, useEffect}from "react";
import { deleteArray } from "../../redux/classAssessment"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FinalAssessment } from "../assessment/Assesment";


export default function AssessmentStudentList(){
   
    const assessmentArray:[FinalAssessment] = useSelector((state:any)=>state.assessment.assessmentArray);
    
    const [newStudentsArray,setNewStudentsArray] = useState(assessmentArray.map(
        student=>({
            "id":student.student_id, 
            "church_class":student.church_class,
            "student_name":student.student_name,
            "attendance":student.attendance,
            buttonDisabled:true
            })
        ))
        
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
        console.log(assessmentArray)
        dispatch(deleteArray())
    }

    
    return (
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

                { isEmpty ? null : <button className="btn btn-primary float-end" type="button" onClick={(e)=>submitClassAssessment(e)} >Submit</button>}
            </div>
            
            <div className="clearfix"></div>
            
        </div>
    );
}