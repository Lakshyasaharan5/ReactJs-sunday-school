import { AssessmentsObject, StudentsDataObject } from "../../../../Pages/InterfacesAndTypes";
import axios from "../../authService"

const SPRING_SERVER_BASE_URL = "http://localhost:8080";

export const addAssessment = (AssessmentsObject:AssessmentsObject)=>{
    return axios.post(`${SPRING_SERVER_BASE_URL}/addAssessmentMarks`,AssessmentsObject);
}

export const getStudentsData = (username:string)=>{
    return axios.get<StudentsDataObject>(`${SPRING_SERVER_BASE_URL}/getStudents?username=${username}`)
}