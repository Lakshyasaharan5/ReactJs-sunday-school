import React from "react";
import "./assessment.css"

export default function Assessment(){
    return (
        <div className="container assessment-container shadow my-5">
            <form className="container-fluid py-3">
                <div class="mb-3">
                    <label for="attendance" class="form-label">Attendance</label>
                    <div className="container">
                        <div className="row">
                            <div class="form-check col-6">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                                <label class="form-check-label" for="exampleRadios1">
                                    Present
                                </label>
                            </div>
                            <div class="form-check col-6">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked/>
                                <label class="form-check-label" for="exampleRadios2">
                                    Absent
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-text">2 Marks</div>
                </div>
                <div class="mb-3" >
                    <label for="songs" class="form-label">4 Songs</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></div>
                    <div class="form-text">1 mark</div>
                </div>   
                <div class="mb-3">
                    <label for="songs" class="form-label">Worship Message</label>
                    <select class="form-select form-select-sm">
                        <option selected>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div class="form-text">5 Marks</div>
                </div>  
                <div class="mb-3">
                    <label for="songs" class="form-label">Table Message</label>
                    <select class="form-select form-select-sm">
                        <option selected>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div class="form-text">5 Marks</div>
                </div>  
                <div class="mb-3">
                    <label for="songs" class="form-label">Behaviour</label>
                    <select class="form-select form-select-sm">
                        <option selected>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div class="form-text">3 Marks</div>
                </div>  
                <div class="mb-3">
                    <label for="songs" class="form-label">Memory Verses</label>
                    <select class="form-select form-select-sm">
                        <option selected>select marks</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>
                    <div class="form-text">14 Marks</div>
                </div>  
                
            </form>
           
            
            
        </div>
    );
}