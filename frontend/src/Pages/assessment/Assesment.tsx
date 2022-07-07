import React, { useState, useRef } from "react";
import "./assessment.css"

export default function Assessment(){
    let attendenceValues = [{
        "id":1,
        "attendance":"present"
    },
    {
        "id":2,
        "attendance":"absent"
    }
    ]
    
    
    const [initialValue] = useState({
        attendance : "absent",
        songs:false,
        worship_message:"DEFAULT",
        table_message:"DEFAULT",
        behaviour:"DEFAULT",
        memory_verses:"DEFAULT",
        total_marks:0
    })
    // const [assessmentvars,setAssessmentVars] = useState(initialValue)
    const [assessmentValues] = useState<{
        attendance:React.MutableRefObject<HTMLInputElement | null>;
        songs:React.MutableRefObject<HTMLInputElement | null>;
        worship_message:React.MutableRefObject<HTMLSelectElement | null>;
        table_message:React.MutableRefObject<HTMLSelectElement | null>;
        behaviour:React.MutableRefObject<HTMLSelectElement | null>;
        memory_verses:React.MutableRefObject<HTMLSelectElement | null>;
        total_marks:React.MutableRefObject<HTMLInputElement | null>}>
        
        ({
        attendance  : useRef<HTMLInputElement | null>(null),
        songs:useRef<HTMLInputElement | null>(null),
        worship_message:useRef<HTMLSelectElement | null>(null),
        table_message:useRef<HTMLSelectElement | null>(null),
        behaviour:useRef<HTMLSelectElement | null>(null),
        memory_verses:useRef<HTMLSelectElement | null>(null),
        total_marks:useRef<HTMLInputElement | null>(null),
    })
    const HandleChange=()=>{
        // e:React.ChangeEvent<HTMLInputElement>
        // const {name,value} = e.target;
        // initialValue[name] = value

        
        let Attendance_marks:number = 0;
        let songs_marks:number = 0;
        let worship_message_marks:number = 0;
        let table_message_marks:number = 0;
        let behaviour_marks:number = 0;
        let memory_verses_marks:number = 0;

        if(assessmentValues.attendance.current?.checked===false){
            Attendance_marks = 2;
        }else{
            Attendance_marks = 0;
        }
        if(assessmentValues.songs.current?.checked){
            songs_marks = 1;
        }else{
            songs_marks = 0;
        }
        if(assessmentValues.worship_message.current!==null) worship_message_marks = (isNaN(parseInt(assessmentValues.worship_message.current.value,10))? 0: parseInt(assessmentValues.worship_message.current.value,10));
        if(assessmentValues.table_message.current!==null) table_message_marks = (isNaN(parseInt(assessmentValues.table_message.current.value,10))? 0:parseInt(assessmentValues.table_message.current.value,10));
        if(assessmentValues.behaviour.current!==null) behaviour_marks = (isNaN(parseInt(assessmentValues.behaviour.current.value,10))? 0:parseInt(assessmentValues.behaviour.current.value,10));
        if(assessmentValues.memory_verses.current!==null) memory_verses_marks = (isNaN(parseInt(assessmentValues.memory_verses.current.value,10))? 0:parseInt(assessmentValues.memory_verses.current.value,10));

        
        
        if(assessmentValues.total_marks.current!==null) assessmentValues.total_marks.current.value = (Attendance_marks+songs_marks+worship_message_marks+table_message_marks+behaviour_marks+memory_verses_marks).toString();
    }
    return (
        <div className="container assessment-container shadow my-5">
            <form className="container-fluid py-3">
                <div className="mb-3">
                    <label htmlFor="attendance" className="form-label">Attendance</label>
                    <div className="container" >
                        <div className="row">
                        {attendenceValues.map(result=>{ 
                            const {id,attendance} = result;
                            return(
                                <div className="form-check col-6" key={id}>
                                    <input type="radio" className="form-check-input " ref={assessmentValues.attendance} defaultValue={initialValue.attendance} name="attendance" onChange={HandleChange} defaultChecked={initialValue.attendance===attendance} />
                                    <label className="form-check-label ">{attendance}</label>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    
                    <div className="form-text">2 Marks</div>
                </div>
                <div className="mb-3" >
                    <label htmlFor="songs" className="form-label">4 Songs</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="songs" ref={assessmentValues.songs} onChange={HandleChange} defaultChecked={initialValue.songs}/></div>
                    <div className="form-text">1 mark</div>
                </div>   
                <div className="mb-3">
                    <label htmlFor="worship_message" className="form-label">Worship Message</label>
                    <select ref={assessmentValues.worship_message} name="worship_message" defaultValue={initialValue.worship_message} onChange={HandleChange} className="form-select form-select-sm">
                        <option value="DEFAULT" disabled>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="form-text">5 Marks</div>
                </div>  
                <div className="mb-3">
                    <label htmlFor="table_message" className="form-label">Table Message</label>
                    <select ref={assessmentValues.table_message} name="table_message" defaultValue={initialValue.table_message} onChange={HandleChange} className="form-select form-select-sm">
                        <option value="DEFAULT" disabled>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="form-text">5 Marks</div>
                </div>  
                <div className="mb-3">
                    <label htmlFor="behaviour" className="form-label">Behaviour</label>
                    <select ref={assessmentValues.behaviour} name="behaviour" defaultValue={initialValue.behaviour} onChange={HandleChange} className="form-select form-select-sm">
                        <option value="DEFAULT" disabled>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div className="form-text">3 Marks</div>
                </div>  
                <div className="mb-3">
                    <label htmlFor="memory_verses" className="form-label">Memory Verses</label>
                    <select ref={assessmentValues.memory_verses} name="memory_verses" defaultValue={initialValue.memory_verses} onChange={HandleChange} className="form-select form-select-sm">
                        <option value="DEFAULT" disabled>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>
                    <div className="form-text">14 Marks</div>
                </div>  
                <div className="mb-3" >
                    <label htmlFor="total_marks" className="form-label">Total Marks</label>
                    <input ref={assessmentValues.total_marks} name="total_marks" defaultValue={initialValue.total_marks} type="text" onChange={HandleChange} className="form-control"  placeholder="0" disabled/>
                </div>
                
            </form>
           
            
            
        </div>
    );
}