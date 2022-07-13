import React,{useEffect, useState} from "react";
import { initiateArray } from "../../redux/classAssessment"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import studentsArray from '../students.json'
import 'react-calendar/dist/Calendar.css';
import "./dashboard.css"
import { dashboardProps } from "../InterfacesAndTypes";


export default function Dashboard(props:dashboardProps){
    const date = props.date;
    const [showAttendence, setShowAttendence] = useState(false);

    useEffect(()=>{
        if(date?.toDateString()?.slice(0,3)==="Sun"){
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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toStudentList = (e:any) =>{
        e.preventDefault();
        dispatch(initiateArray(assessmentArray));
        navigate("/assessment-studentlist")
    }

    return (
        <div className=" grid grid-cols-1">
            
            <div className=" flex justify-center my-3">
                
                {showAttendence ? <button type="button" className=" bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={(e)=>toStudentList(e)}>Take class Assessment</button> : null}
                
            </div>
        </div>
    );
}