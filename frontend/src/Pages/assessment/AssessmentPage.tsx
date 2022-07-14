import React from 'react'
import Header from '../Components/header';
import Assessment from './Assesment';

export default function AssessmentPage(){

    return (
        <div className='h-screen p-0 flex flex-col gap-5'>
            <Header />
            <main className="relative  flex flex-col gap-4">
                <Assessment/>
            </main>
        </div>
    );
}