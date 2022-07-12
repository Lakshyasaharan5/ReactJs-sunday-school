import React,{useEffect, useState} from "react";
import { initiateArray } from "../../redux/classAssessment"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./dashboard.css"
import "./calender.css"


const studentsArray = [
    {
        "id":1,
        "church_class" : "beersheba|junior|B",
        "student_name" : "Naruto Uzumaki"
        
    },
    {
        "id":2,
        "church_class" : "beersheba|junior|B",
        "student_name" : "joy"
    }
]

export default function Dashboard(){
    const [date,setDate] = useState(new Date());
    const [showAttendence, setShowAttendence] = useState(false);

    useEffect(()=>{
        if(date.toDateString()?.slice(0,3)==="Sun"){
            setShowAttendence(true);
        }else{
            setShowAttendence(false)
        }
    },[date])

    const today = new Date()
    const dd = String(today.getDate()).padStart(2,'0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    const currDate = yyyy+"-"+mm+"-"+dd;
    
    const assessmentArray = studentsArray.map(s=>({
        "church_class" : s.church_class,
        "date" : currDate,
        "student_id":s.id,
        "student_name" : s.student_name,
        "attendance" : "absent",
        "songs_4" : "0",
        "worship_message" : "0",
        "table_message" : "0",
        "behaviour" : "0",
        "memory_verses" : "0",
        "total" : "0",
        "remarks" : "",
    }))

    // console.log(assessmentArray)
    const dispatch = useDispatch();

    // useEffect(()=>{
        
    // },[])
    const navigate = useNavigate();
    const toStudentList = (e:any) =>{
        e.preventDefault();
        dispatch(initiateArray(assessmentArray));
        navigate("/assessment-studentlist")
    }

    return (
        <div className="container">
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="container">
                {/* <div >
                    {showAttendence ? <Link to="/assessment-studentlist"><div className="container rounded">
                            <h3>Take Assesment</h3>
                    </div></Link> : null}
                    
                </div> */}
                {showAttendence ? <button type="button" className="btn btn-secondary btn-lg" onClick={(e)=>toStudentList(e)}>Take class Assessment</button> : null}
                
            </div>
        </div>
    );
}