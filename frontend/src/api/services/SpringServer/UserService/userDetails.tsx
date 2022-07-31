import { teacherObject } from "../../../../Pages/InterfacesAndTypes";
import axios from "../../authService"

const SPRING_SERVER_BASE_URL = "http://localhost:8080";

export const getTeacherDetails = (username:string)=>{
    return axios.get<teacherObject>(`${SPRING_SERVER_BASE_URL}/getTeachersData?username=${username}`);
}