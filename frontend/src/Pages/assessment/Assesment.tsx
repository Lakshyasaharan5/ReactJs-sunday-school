import React, { useState, useRef } from "react";
import {updateArray } from "../../redux/classAssessment"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./assessment.css"

interface AssessmentInputs{
    
    songs:React.MutableRefObject<HTMLSelectElement | null>;
    worship_message:React.MutableRefObject<HTMLSelectElement | null>;
    table_message:React.MutableRefObject<HTMLSelectElement | null>;
    behaviour:React.MutableRefObject<HTMLSelectElement | null>;
    memory_verses:React.MutableRefObject<HTMLSelectElement | null>;
    total_marks:React.MutableRefObject<HTMLInputElement | null>;
    remarks:React.MutableRefObject<HTMLTextAreaElement | null>;
}

export interface FinalAssessment{
    church_class:string;
    date:string;
    student_id:number;
    student_name:string;
    attendance:string;
    songs_4:string;
    worship_message:string;
    table_message:string;
    behaviour:string;
    memory_verses:string;
    total:string;
    remarks:string;
}

type LocationState = {
    state:{
        student_id: number;
    };
  }


export default function Assessment(){
    
    const location = useLocation() as unknown as LocationState;
    const student_id = location.state.student_id;

    

    const assessmentArray:[FinalAssessment] = useSelector((state:any)=>state.assessment.assessmentArray)
    const [studentAssessment,setStudentAssessment] = useState<FinalAssessment>(assessmentArray.filter(student=>student.student_id===student_id)[0]);
    // const [tempRemarks,setTempRemarks]=useState(studentAssessment?.remarks)
    // console.log(studentAssessment)
    // const [assessmentvars,setAssessmentVars] = useState(initialValue)
    const initialValue = {
        songs:studentAssessment?.songs_4,
        worship_message:studentAssessment?.worship_message,
        table_message:studentAssessment?.table_message,
        behaviour:studentAssessment?.behaviour,
        memory_verses:studentAssessment?.memory_verses,
        total_marks:2,
        remarks:studentAssessment?.remarks
        
    }
    const [assessmentValues] = useState<AssessmentInputs>({
        songs:useRef<HTMLSelectElement | null>(null),
        worship_message:useRef<HTMLSelectElement | null>(null),
        table_message:useRef<HTMLSelectElement | null>(null),
        behaviour:useRef<HTMLSelectElement | null>(null),
        memory_verses:useRef<HTMLSelectElement | null>(null),
        total_marks:useRef<HTMLInputElement | null>(null),
        remarks:useRef<HTMLTextAreaElement | null>(null),
    })
    const HandleChange=(e:any)=>{
        
        let Attendance_marks:number = 2;
        let songs_marks:number = 0;
        let worship_message_marks:number = 0;
        let table_message_marks:number = 0;
        let behaviour_marks:number = 0;
        let memory_verses_marks:number = 0;
        let total:string = initialValue.total_marks.toString();
        let remarks:string="";
        
        if(assessmentValues.songs.current!==null) songs_marks = (isNaN(parseInt(assessmentValues.songs.current.value,10))? 0:parseInt(assessmentValues.songs.current.value,10));
        if(assessmentValues.worship_message.current!==null) worship_message_marks = (isNaN(parseInt(assessmentValues.worship_message.current.value,10))? 0: parseInt(assessmentValues.worship_message.current.value,10));
        if(assessmentValues.table_message.current!==null) table_message_marks = (isNaN(parseInt(assessmentValues.table_message.current.value,10))? 0:parseInt(assessmentValues.table_message.current.value,10));
        if(assessmentValues.behaviour.current!==null) behaviour_marks = (isNaN(parseInt(assessmentValues.behaviour.current.value,10))? 0:parseInt(assessmentValues.behaviour.current.value,10));
        if(assessmentValues.memory_verses.current!==null) memory_verses_marks = (isNaN(parseInt(assessmentValues.memory_verses.current.value,10))? 0:parseInt(assessmentValues.memory_verses.current.value,10));

        
        
        if(assessmentValues.total_marks.current!==null){
            assessmentValues.total_marks.current.value = (Attendance_marks+songs_marks+worship_message_marks+table_message_marks+behaviour_marks+memory_verses_marks).toString();
            total = assessmentValues.total_marks.current.value
        } 
        if(assessmentValues.remarks.current!==null) remarks = assessmentValues.remarks.current.value;

        const updatedAssessmentValues:FinalAssessment = {
            "church_class": studentAssessment?.church_class,
            "date": studentAssessment?.date,
            "student_id": studentAssessment?.student_id,
            "student_name": studentAssessment?.student_name,
            "attendance": "present",
            "songs_4": songs_marks.toString(),
            "worship_message": worship_message_marks.toString(),
            "table_message": table_message_marks.toString(),
            "behaviour": behaviour_marks.toString(),
            "memory_verses": memory_verses_marks.toString(),
            "total": total,
            "remarks": remarks
        }
        setStudentAssessment({...studentAssessment,...updatedAssessmentValues});
        // console.log(studentAssessment)
    }

    const dispatch = useDispatch();

    const uploadAssessment=(e:any)=>{
        e.preventDefault();
        console.log([studentAssessment])
        dispatch(updateArray([studentAssessment]))
        
    }
    // const validate=(values:AssessmentInputs)=>{

    //     if(values.behaviour.current?.value===initialValue.behaviour){

    //     }
    // }
    return (
        <div className="container assessment-container shadow my-5">
            <div className="">
                <h4>Student Name : {studentAssessment?.student_name}</h4>   
            </div>
            <form className="container-fluid py-3">
                
                <div className="mb-3" >
                    <label htmlFor="songs" className="form-label">4 Songs</label>
                     <select ref={assessmentValues.songs} name="worship_message" defaultValue={initialValue.songs} onChange={HandleChange} className="form-select form-select-sm">
                        
                        <option value="0">0</option>
                        <option value="1">1</option>
                        
                    </select>
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
                <div className="mb-3" >
                    <label htmlFor="remarks" className="form-label">Remarks</label>
                    <textarea ref={assessmentValues.remarks} className="form-control" defaultValue={initialValue.remarks} onChange={HandleChange} id="remarks" ></textarea>
                </div>
                <div className="mb-3">

                    <button className="btn btn-primary float-end" type="button" onClick={(e)=>uploadAssessment(e)} >upload</button>
                </div>
                <div className="clearfix"></div>
            </form>
           
            
            
        </div>
    );
}