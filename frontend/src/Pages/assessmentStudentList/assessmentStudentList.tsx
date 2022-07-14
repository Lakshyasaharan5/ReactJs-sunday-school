import React,{useState , ChangeEvent, useEffect}from "react";
import { deleteArray } from "../../redux/classAssessment"
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { FinalAssessment } from "../InterfacesAndTypes"
import { Modal} from '@mantine/core';
import StudentCard from "./studentCard";


const AssessmentStudentList=()=>{


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isEmpty,setIsEmpty] = useState(true); // component at default has nothing to show
    const [submitModalOpened,setSubmitModalOpened] = useState(false);
    const storeAssessmentArray:[FinalAssessment] = useSelector((state:any)=>state.assessment.assessmentArray);

    const [assessmentArray,setAssessmentArray] = useState(storeAssessmentArray.map(
        s=>({
            "church" : s.church,
            "class":s.class,
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
            "church":student.church,
            "class":student.class,
            "student_name":student.student_name,
            "attendance":student.attendance,
            buttonDisabled:true
        })
    ))

    // checks if the student is present and enables the button and viceversa
    for(let i in newStudentsArray){
        if(newStudentsArray[i].attendance==="present") newStudentsArray[i].buttonDisabled = false;
        if(newStudentsArray[i].attendance==="absent") newStudentsArray[i].buttonDisabled = true;
    }

    // if the component has nothing to show it redirects to dashboard 
    useEffect(()=>{
        if(newStudentsArray.length === 0){
            navigate('/');
        }else{
            setIsEmpty(false)
        }
    },[newStudentsArray,navigate])
    

    const handleChange=(e:ChangeEvent<HTMLSelectElement>,id:string)=>{
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

    const toAssessmentPage = (id:string) =>{
        navigate("/assessment",{
            state:{
                student_id:id
            }
        })
    }
    
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
        setSubmitModalOpened(true)
    }

    const confirmClassAssessment = (e:any)=>{
        e.preventDefault();
        dispatch(deleteArray())
        navigate("/")
    }

    
    return (

        <div className="flex flex-col ">
            <Modal
                opened={submitModalOpened}
                onClose={() => setSubmitModalOpened(false)}
                title="Class Assessment Marks"
                
            >
            {assessmentArray.map(a=>(
                <div key={a.student_id}>
                    <div className="inline-flex justify-start ">
                        <p className="pr-1 font-bold ">{a.student_name}:</p><p className="px-1 ml-3">{a.total}</p>
                    </div>
                </div>

            ))}
                <div className="flex justify-end">
                        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button" onClick={(e)=>confirmClassAssessment(e)} >Confirm</button>
                </div>
            </Modal>


        { isEmpty ? null : 
        <div className="flex justify-center">
            <form className="bg-white shadow-2xl px-8 py-5 mx-3  rounded-2xl grid gap-3 font-serif w-[20.2rem]">
                <div className="flex justify-center ">
                    <h1 className="  text-xl">BEERSHEBA JUNIOR BOYS </h1>
                </div>
                <ul className="divide-y-2  ">
                    {newStudentsArray.map(s=>( 
                        <li key={s.id}>
                            <StudentCard
                                id={s.id}
                                student_name={s.student_name}
                                attendance={s.attendance}
                                buttonDisabled = {s.buttonDisabled}
                                handleChange = {handleChange}
                                toAssessmentPage = {toAssessmentPage} 
                                />
                        </li>
                    ))}    
                </ul>
                <div className="flex justify-between">
                    <Link to="/"><button className=" bg-gray-500 hover:bg-gray-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button">Back</button></Link>
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button" onClick={(e)=>submitClassAssessment(e)} >Submit</button>
                </div>
                
                <div className="clearfix"></div>
            </form>
        </div>
        }
        
        </div>
    );
}

export default AssessmentStudentList;