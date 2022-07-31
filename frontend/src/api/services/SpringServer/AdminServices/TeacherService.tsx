import { getTeachersArray, teacherDetails, teacherObject } from "../../../../Pages/InterfacesAndTypes";
import axios from "../../authService"
// import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const SPRING_SERVER_BASE_URL = "http://localhost:8080";

export const addTeacher = (teacherObject:teacherObject) =>{
    return axios.post(`${SPRING_SERVER_BASE_URL}/addTeacher`,teacherObject);
}
export const viewTeacher = (church:string) => {
    return axios.get<getTeachersArray>(`${SPRING_SERVER_BASE_URL}/viewTeacher?church=${church}`)
}
export const editTeacher = (teacherObject:teacherDetails) => {
    return axios.put(`${SPRING_SERVER_BASE_URL}/editTeacher`,teacherObject);
}
export const deleteTeacher = (teacherUsername:string) => {
    return axios.delete(`${SPRING_SERVER_BASE_URL}/deleteTeacher?username=${teacherUsername}`)
}