import { getStudentsArray, studentDetails, studentObject } from "../../../../Pages/InterfacesAndTypes";
import axios from "../../authService"
// import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const SPRING_SERVER_BASE_URL = "http://localhost:8080";

export const addStudent = (studentObject:studentObject)=>{
    return axios.post(`${SPRING_SERVER_BASE_URL}/addStudent`,studentObject);
}
export const viewStudent = (church:string,class_name:string)=>{
    return axios.get<getStudentsArray>(`${SPRING_SERVER_BASE_URL}/viewStudent?church=${church}&class=${class_name}`)
}
export const editStudent = (studentObject:studentDetails)=>{
    return axios.put(`${SPRING_SERVER_BASE_URL}/editStudent`,studentObject);
}
export const deleteStudent = (studentId:string)=>{
    return axios.delete(`${SPRING_SERVER_BASE_URL}/deleteStudent?uniqueID=${studentId}`)
}