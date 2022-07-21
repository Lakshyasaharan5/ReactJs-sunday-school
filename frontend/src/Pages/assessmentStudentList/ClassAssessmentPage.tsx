import React from 'react'
import Header from '../../Components/header';
import AssessmentStudentList from './assessmentStudentList';


export default function ClassAssessmentPage(){

    return (
        
        <div className='h-screen p-0 flex flex-col gap-5'>
            <Header 
            userIcon={false}
            headerTitle={""}/>
            <main className="relative  flex flex-col gap-4">
                <AssessmentStudentList />
            </main>
        </div>
    );
}