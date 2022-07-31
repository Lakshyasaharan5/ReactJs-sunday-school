import { Modal } from '@mantine/core';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { editAssessment, viewAssessmentMarks } from '../../../api/services/SpringServer/UserService/AssessmentsService';
import Header from '../../../Components/header';
import useCurrData from '../../../Hooks/useCurrData';
import { initiateArray } from '../../../redux/classAssessment';

import { AssessmentInputs, FinalAssessment } from "../../InterfacesAndTypes"

const ManageStudentAssessment = () => {
    const role = useSelector((state:any)=>state.auth.role)
    const user:string = useSelector((state:any)=>state.auth.user)
    const currDate = useCurrData();
    const [studentsAssessmentArray,setStudentAssessmentArray] = useState<FinalAssessment[]>();
    const [student,setStudent] = useState<FinalAssessment>();
    const [studentAssessmentModalOpened,setStudentAssessmentModalOpened] = useState(false);
    const [fieldDisabled,setFieldDisabled]= useState(true);
    const [selectedStudentId,setSelectedStudentId] = useState("");
    // const [buttonDisabled,setButtonDisabled] = useState(true)
    const [totalCalculatedMarks,setTotal]= useState("2");

    const [assessmentValues] = useState<AssessmentInputs>({
        songs_4:useRef<HTMLSelectElement | null>(null),
        worship_message:useRef<HTMLSelectElement | null>(null),
        table_message:useRef<HTMLSelectElement | null>(null),
        behaviour:useRef<HTMLSelectElement | null>(null),
        memory_verses:useRef<HTMLSelectElement | null>(null),
        total_marks:useRef<HTMLInputElement | null>(null),
        remarks:useRef<HTMLTextAreaElement | null>(null),
    })

    const HandleChange=(e:any)=>{
        // const target = e.target;

        let Attendance_marks:number = 2;
        let songs_marks:number = 0;
        let worship_message_marks:number = 0;
        let table_message_marks:number = 0;
        let behaviour_marks:number = 0;
        let memory_verses_marks:number = 0;
        let total:string;
        let remarks:string="";

        if(student!==undefined) total = student.total.toString();

        if(assessmentValues.songs_4.current!==null) songs_marks = (isNaN(parseInt(assessmentValues.songs_4.current.value,10))? 0:parseInt(assessmentValues.songs_4.current.value,10));
        if(assessmentValues.worship_message.current!==null) worship_message_marks = (isNaN(parseInt(assessmentValues.worship_message.current.value,10))? 0: parseInt(assessmentValues.worship_message.current.value,10));
        if(assessmentValues.table_message.current!==null) table_message_marks = (isNaN(parseInt(assessmentValues.table_message.current.value,10))? 0:parseInt(assessmentValues.table_message.current.value,10));
        if(assessmentValues.behaviour.current!==null) behaviour_marks = (isNaN(parseInt(assessmentValues.behaviour.current.value,10))? 0:parseInt(assessmentValues.behaviour.current.value,10));
        if(assessmentValues.memory_verses.current!==null) memory_verses_marks = (isNaN(parseInt(assessmentValues.memory_verses.current.value,10))? 0:parseInt(assessmentValues.memory_verses.current.value,10));

        if(assessmentValues.total_marks.current!==null){
            assessmentValues.total_marks.current.value = (Attendance_marks+songs_marks+worship_message_marks+table_message_marks+behaviour_marks+memory_verses_marks).toString();
            total = assessmentValues.total_marks.current.value
            setTotal(total)
        } 
        if(assessmentValues.remarks.current!==null) remarks = assessmentValues.remarks.current.value;
        
        if(student!==undefined){
            const updatedAssessmentValues:FinalAssessment = {
                "church": student?.church,
                "class":student?.class,
                "date": student?.date,
                "uniqueID": student?.uniqueID,
                "first_name": student?.first_name,
                "surname": student?.surname,
                "attendance": "present",
                "songs_4": songs_marks.toString(),
                "worship_message": worship_message_marks.toString(),
                "table_message": table_message_marks.toString(),
                "behaviour": behaviour_marks.toString(),
                "memory_verses": memory_verses_marks.toString(),
                "total": totalCalculatedMarks,
                "remarks": remarks
            }
            setStudent({...student,...updatedAssessmentValues});
        }
        
        // console.log(studentAssessment)
    }


    const dispatch = useDispatch();
    const viewStudentMarks = (e:any,id:string) =>{
        e.preventDefault();
        setSelectedStudentId(id);
        setStudentAssessmentModalOpened(true)
    }
    const EditStudentHandler = (e:any) =>{
        e.preventDefault();
        setFieldDisabled((o)=>!o)
    }


    const updatedAssessmentArray:[FinalAssessment] = useSelector((state:any)=>state.assessment.assessmentArray)

    const uploadClassAssessment = (e:any)=>{
        e.preventDefault();
        const updatedAssessmentsObject = {
            studentsMarks:updatedAssessmentArray,
            username:user
        }
        editAssessment(updatedAssessmentsObject).then(res=>{
            console.log(res)
        })
    }

    // const navigate = useNavigate()
    

    useEffect(()=>{
        viewAssessmentMarks(user,currDate).then(res=>{
            setStudentAssessmentArray(res.data.studentsMarks);
            dispatch(initiateArray(res.data.studentsMarks));
        })
    })
    
    useEffect(()=>{
        const s = studentsAssessmentArray?.filter(student=>student.uniqueID === selectedStudentId)[0]
        setStudent(s);
    },[selectedStudentId,studentsAssessmentArray])

    useEffect(()=>{
        if(student?.total!==undefined && parseInt(student?.total)!==0){
            setTotal(student?.total)
        }
    },[student?.total])

    return (
        <>
        {role==="user" ? 
        <div className='h-screen p-0 flex flex-col gap-5'>
            <Header 
            userIcon={true}
            headerTitle={""}/>
            <main className="relative  flex flex-col gap-4">
                <div className='flex justify-center'>
                    <div className='bg-white shadow-2xl px-8  py-5 mx-3  rounded-2xl grid gap-3 font-serif w-[20.2rem]'>
                    {studentsAssessmentArray!==undefined? 
                   <div>
                    { studentsAssessmentArray.map(s=>(
                        <li key={s.uniqueID}>
                          <div className='flex justify-between'>
                              <p className=''>{s.first_name+" "+s.surname}</p>
                              <button className='text-sm bg-blue-300 hover:bg-blue-400 rounded  px-2 font-sans' onClick={(e)=>viewStudentMarks(e,s.uniqueID)}>view marks</button>
                          </div>
                        </li>
                      ))}
                      <div className="flex justify-between">
                        <Link to="/"><button className="bg-gray-500 hover:bg-gray-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button">Back</button></Link>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button" onClick={(e)=>uploadClassAssessment(e)} >upload</button>
                    </div>
                   </div>:

                    <div className="">
                        <div className='flex justify-center'>
                            <p className=" pt-2 text-gray-500 text-sm font-sans font-semibold">Nothing to show here</p>
                        </div>
                    </div> 
                      }
                    </div>
                </div>
            </main>
            < Modal
                opened={studentAssessmentModalOpened}
                onClose={() => {
                    setStudentAssessmentModalOpened(false)
                    setFieldDisabled(true)
                    setSelectedStudentId("")
                }}
                title="Teacher Details" 
            >
            <div className='grid gap-4'>
                <div className="">
                    <div className="flex justify-center ">
                        <p className="pr-1 font-bold ">Student Name : </p><p className="px-1 ml-3"> {student?.first_name+" "+student?.surname}</p>   
                    </div>
                </div>
                <div className="flex text-sm " >
                    <label htmlFor="attendance" className="font-bold pr-1">Attendance :</label>
                    <select className="ml-7 px-3 pl-5 rounded-sm bg-gray-200 text-gray-700 border border-gray-200" name="attendance" defaultValue={student?.attendance} onChange={HandleChange} >
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                        
                    </select>
                </div>
                <div className="grid gap-1" >
                    <div className="flex justify-between text-sm">
                    <label htmlFor="songs" className="pr-2 font-bold">4 Songs: </label>
                     <select className="ml-3 pl-1   rounded-sm bg-gray-200 text-gray-700 border border-gray-200 font-sans" ref={assessmentValues.songs_4} name="songs_4" defaultValue={student?.songs_4} onChange={HandleChange} disabled={fieldDisabled}>
                        <option value="DEFAULT" disabled>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        
                    </select>
                    </div>
                    <div className=" font-sans text-xs font-extralight">1 mark</div>
                </div>   

                <div className="grid gap-1" >
                    <div className="flex justify-between text-sm">
                        <label htmlFor="worship_message" className="pr-2 font-bold">Worship Message</label>
                        <select ref={assessmentValues.worship_message} name="worship_message" defaultValue={student?.worship_message} onChange={HandleChange} className="ml-2 pl-1 rounded-sm bg-gray-200 text-gray-700 border border-gray-200 font-sans" disabled={fieldDisabled}>
                            <option value="DEFAULT" disabled>select marks</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className=" font-sans text-xs font-extralight">5 Marks</div>
                </div>  

                <div className="grid gap-1" >
                    <div className="flex justify-between text-sm">
                        <label htmlFor="table_message" className="pr-2 font-bold">Table Message</label>
                        <select ref={assessmentValues.table_message} name="table_message" defaultValue={student?.table_message} onChange={HandleChange} className="ml-3 pl-1  rounded-sm bg-gray-200 text-gray-700 border border-gray-200 font-sans" disabled={fieldDisabled}>
                            <option value="DEFAULT" disabled>select marks</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className=" font-sans text-xs font-extralight">5 Marks</div>
                </div>  

               <div className="grid gap-1" >
                    <div className="flex justify-between text-sm">
                    <label htmlFor="behaviour" className="pr-2 font-bold">Behaviour</label>
                    <select ref={assessmentValues.behaviour} name="behaviour" defaultValue={student?.behaviour} onChange={HandleChange} className="ml-3 pl-1  rounded-sm bg-gray-200 text-gray-700 border border-gray-200 font-sans" disabled={fieldDisabled}>
                        <option value="DEFAULT" disabled>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                    <div className=" font-sans text-xs font-extralight">3 Marks</div>
                </div>  

                <div className="grid gap-1" >
                    <div className="flex justify-between text-sm">
                    <label htmlFor="memory_verses" className="pr-2 font-bold">Memory Verses</label>
                    <select ref={assessmentValues.memory_verses} name="memory_verses" defaultValue={student?.memory_verses} onChange={HandleChange} className="ml-3 pl-1  rounded-sm bg-gray-200 text-gray-700 border border-gray-200 font-sans" disabled={fieldDisabled}>
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
                    </div>
                    <div className=" font-sans text-xs font-extralight">14 Marks</div>
                </div>  

                <div className="grid gap-1" >
                    <div className="flex justify-between text-sm">
                    <label htmlFor="total_marks" className="pr-2 font-bold">Total Marks:</label>
                    {/* <input ref={assessmentValues.total_marks} name="total_marks" defaultValue={initialValue.total_marks} type="text" onChange={HandleChange} className=" w-40 pl-6   rounded-sm bg-gray-200 text-black font-bold border border-gray-200 font-sans disabled:text-black" disabled/> */}
                        <p ref={assessmentValues.total_marks}  defaultValue={student?.total}  onChange={HandleChange} className=" w-32 pl-6  font-bold "> {totalCalculatedMarks}</p>
                    </div>
                    <div className=" font-sans text-xs font-extralight">30 Marks</div>
                </div>

                <div className="grid gap-2 grid-cols-1" >
                    
                    <label htmlFor="remarks" className="pr-2 font-bold  text-sm">Remarks</label>
                    <textarea ref={assessmentValues.remarks} className="border-2 border-gray-500 rounded-md h-20 font-sans" defaultValue={student?.remarks} onChange={HandleChange} id="remarks" disabled={fieldDisabled}></textarea>
                    
                </div>

                    
                    <div>
                    {fieldDisabled ?<button className=" bg-cyan-500 hover:bg-cyan-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button" onClick={(e)=>EditStudentHandler(e)} >Edit</button>:null}
                    {fieldDisabled ?null:<button className=" bg-yellow-500 hover:bg-yellow-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button" onClick={(e)=>EditStudentHandler(e)} >cancel</button>}
                                
                    </div>

            {/* {fieldDisabled? null: <>


                <div className="container">
                    <div className="flex text-sm " >
                        <label htmlFor="attendance" className="font-bold pr-1">Attendance :</label>
                        <select className="ml-7 px-3 pl-5 rounded-sm bg-gray-200 text-gray-700 border border-gray-200" name="attendance" defaultValue={student?.attendance} onChange={(e)=>handleChange(e)} >
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                            
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button className=" bg-cyan-500 hover:bg-cyan-700 text-white text-sm font-sans font-semibold py-1 px-2 rounded disabled:bg-cyan-700"  disabled={buttonDisabled} onClick={()=>toAssessmentPage}>Assign marks</button>
                    </div>
                    <div>
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-sans font-semibold py-1 px-2 rounded" type="button" onClick={(e)=>uploadClassAssessment(e)} >Upload</button>
                    </div>

                </div>
            </>} */}
            </div>
            </Modal>
        </div>
        :null}
        </>
    );
    
}

export default ManageStudentAssessment