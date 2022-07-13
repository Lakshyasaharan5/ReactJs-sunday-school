export interface AssessmentInputs{
    
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
    student_id:string;
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

export type LocationState = {
    state:{
        student_id: string;
    };
  }

export interface dashboardProps{
    date:Date|null
}

export interface studentCardProps{
    id:string,
    student_name:string,
    attendance:string,
    buttonDisabled:boolean,
    handleChange:(e:any,id:string)=> void;
    toAssessmentPage:(id:string)=> void
}