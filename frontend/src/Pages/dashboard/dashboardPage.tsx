import React,{useState} from "react"
import { Calendar } from '@mantine/dates';
import Dashboard from "./dashboard";

export default function DashboardPage(){

    const [assessmentDate,setAssessmentDate] = useState<Date|null>(new Date())
    return (
        <div>
            <div className="flex justify-center">
                <Calendar value={assessmentDate} onChange={setAssessmentDate} />
            </div>
            <div>
                <Dashboard 
                date = {assessmentDate}/>
            </div>
            
        </div>
    );
}