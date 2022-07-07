import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./dashboard.css"
import "./calender.css"

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


    return (
        <div className="container">
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="container">
                <div >
                    {showAttendence ? <Link to="/assessment-studentlist"><div className="container rounded">
                            <h3>Take Assesment</h3>
                    </div></Link> : null}
                    
                </div>
            </div>
        </div>
    );
}