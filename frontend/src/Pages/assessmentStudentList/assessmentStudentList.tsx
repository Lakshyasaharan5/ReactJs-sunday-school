import React from "react";
import { Link } from "react-router-dom";

export default function AssessmentStudentList(){
    return (
        <div className="container">
            <ul>
                <Link to="/assessment"><li><h3>joy</h3></li></Link>
            </ul>
        </div>
    );
}