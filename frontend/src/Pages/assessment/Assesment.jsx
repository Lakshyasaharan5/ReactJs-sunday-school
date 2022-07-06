import React, { createRef, useState } from "react";
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
    const [assessmentValues] = useState({
        attendance : createRef(),
        songs:createRef(),
        worship_message:createRef(),
        table_message:createRef(),
        behaviour:createRef(),
        memory_verses:createRef(),
        total_marks:createRef()
    })
    const HandleChange=(e)=>{
        const {name,value} = e.target;
        initialValue[name] = value

        
        let Attendance_marks,songs_marks;
        if(assessmentValues.attendance.current.checked===false){
            Attendance_marks = 2;
        }else{
            Attendance_marks = 0;
        }
        if(assessmentValues.songs.current.checked){
            songs_marks = 1;
        }else{
            songs_marks = 0;
        }
        const worship_message_marks = (isNaN(parseInt(assessmentValues.worship_message.current.value,10))? 0: parseInt(assessmentValues.worship_message.current.value,10));
        const table_message_marks = (isNaN(parseInt(assessmentValues.table_message.current.value,10))? 0:parseInt(assessmentValues.table_message.current.value,10));
        const behaviour_marks = (isNaN(parseInt(assessmentValues.behaviour.current.value,10))? 0:parseInt(assessmentValues.behaviour.current.value,10));
        const memory_verses_marks = (isNaN(parseInt(assessmentValues.memory_verses.current.value,10))? 0:parseInt(assessmentValues.memory_verses.current.value,10));

        
        console.log(assessmentValues.total_marks.current.value)
        assessmentValues.total_marks.current.value = parseInt(Attendance_marks+songs_marks+worship_message_marks+table_message_marks+behaviour_marks+memory_verses_marks);
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
                                    <input type="radio" className="form-check-input " ref={assessmentValues.attendance} defaultValue={initialValue.attendance} name="attendance" onChange={(e)=>{HandleChange(e)}} defaultChecked={initialValue.attendance===attendance} />
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
                        <input className="form-check-input" type="checkbox" name="songs" ref={assessmentValues.songs} onChange={(e)=>{HandleChange(e)}} defaultChecked={initialValue.songs}/></div>
                    <div className="form-text">1 mark</div>
                </div>   
                <div className="mb-3">
                    <label htmlFor="worship_message" className="form-label">Worship Message</label>
                    <select ref={assessmentValues.worship_message} name="worship_message" defaultValue={initialValue.worship_message} onChange={(e)=>{HandleChange(e)}} className="form-select form-select-sm">
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
                    <select ref={assessmentValues.table_message} name="table_message" defaultValue={initialValue.table_message} onChange={(e)=>{HandleChange(e)}} className="form-select form-select-sm">
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
                    <select ref={assessmentValues.behaviour} name="behaviour" defaultValue={initialValue.behaviour} onChange={(e)=>{HandleChange(e)}} className="form-select form-select-sm">
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
                    <select ref={assessmentValues.memory_verses} name="memory_verses" defaultValue={initialValue.memory_verses} onChange={(e)=>{HandleChange(e)}} className="form-select form-select-sm">
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
                    <input ref={assessmentValues.total_marks} name="total_marks" defaultValue={initialValue.total_marks} type="text" onChange={(e)=>{HandleChange(e)}} className="form-control"  placeholder="0" disabled/>
                </div>
                
            </form>
           
            
            
        </div>
    );
}