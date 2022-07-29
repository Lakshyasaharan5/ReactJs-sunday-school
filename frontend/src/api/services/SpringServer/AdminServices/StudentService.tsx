import { studentDetails, studentObject } from "../../../../Pages/InterfacesAndTypes";
import axios from "../../userService"
// import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const SPRING_SERVER_BASE_URL = "http://localhost:8080/";

export const addStudent = (studentObject:studentObject)=>{
    return axios.post(`${SPRING_SERVER_BASE_URL}/addteacher`,studentObject);
}
export const viewStudent = (church:string,class_name:string)=>{
    return axios.get<studentDetails[]>(`${SPRING_SERVER_BASE_URL}/viewteachers?church=${church}&class=${class_name}`)
}
export const editStudent = (studentObject:studentDetails)=>{
    return axios.put(`${SPRING_SERVER_BASE_URL}/editstudent`,studentObject);
}
export const deleteStudent = (studentId:string)=>{
    return axios.delete(`${SPRING_SERVER_BASE_URL}/deletestudent/${studentId}`)
}