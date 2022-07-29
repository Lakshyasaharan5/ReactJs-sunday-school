import { teacherDetails, teacherObject } from "../../../../Pages/InterfacesAndTypes";
import axios from "../../userService"
// import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const SPRING_SERVER_BASE_URL = "http://localhost:8080/";

export const addTeacher = (teacherObject:teacherObject) =>{
    return axios.post(`${SPRING_SERVER_BASE_URL}/addteacher`,teacherObject);
}
export const viewTeacher = (church:string) => {
    return axios.get<teacherDetails[]>(`${SPRING_SERVER_BASE_URL}/viewteachers?church=${church}`)
}
export const editTeacher = (teacherObject:teacherDetails) => {
    return axios.put(`${SPRING_SERVER_BASE_URL}/editstudent`,teacherObject);
}
export const deleteTeacher = (teacherId:string) => {
    return axios.delete(`${SPRING_SERVER_BASE_URL}/deletestudent/${teacherId}`)
}