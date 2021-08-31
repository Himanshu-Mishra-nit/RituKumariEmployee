import React, { Component } from 'react'
import { Form,Button,Col,Row } from "react-bootstrap";
import EmployeeService from '../service/EmployeeService'
//import InternshipService from '../../services/InternshipService';
//import "./LeaveApplicationEmpForm.css";
import 'bootstrap/dist/css/bootstrap.css';
export default class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            
            employeeName: '',
            dateofBirth: '',
            Salary: '',
            Designation: '',
            JoiningDate: '',
            ExitDate:'',
            Manager:''

        }
        this.changeemployeenamehandler=this.changeemployeenamehandler.bind(this);
        this.changeSalaryhandler=this.changeSalaryhandler.bind(this);
        this.changeDOBhandler=this.changeDOBhandler.bind(this);
        this.changejoinDatehandler=this.changejoinDatehandler.bind(this);
        this.changeexitDatehandler=this.changeexitDatehandler.bind(this);
         this.saveEmployee=this.saveEmployee.bind(this);   
         this.changeDesignationhandler=this.changeDesignationhandler.bind(this);
         this.changemanagerhandler=this.changemanagerhandler.bind(this);
    }
    changemanagerhandler=(e)=>{
        this.setState({
            Manager: e.target.value
      })  
    }
    changeemployeenamehandler=(e)=>{
             this.setState({
                   employeeName: e.target.value
             })
             console.log("akki sharma");
    }
    changeDOBhandler =(e)=>{
        this.setState({dateofBirth: e.target.value})
        console.log("akki sharma");
    }
    changejoinDatehandler =(e)=>{
        this.setState({joiningDate: e.target.value})
        console.log("akki sharma");
    }
    changeexitDatehandler =(e)=>{
        this.setState({ExitDate: e.target.value})
        console.log("akki sharma");
    }
    changeDesignationhandler=(e)=>{
        this.setState({Designation: e.target.value})
        console.log("akki sharma");
    }
    changeSalaryhandler=(e)=>{
        this.setState({Salary: e.target.value})
        console.log("akki sharma");
    }
   
    saveEmployee=(e)=>{
        console.log("click to save");
        e.preventDefault();
        let employee={name: this.state.employeeName, salary:this.state.Salary,designation: this.state.Designation,dob: this.state.dateofBirth,joiningDate: this.state.joiningDate,exitDate: this.state.ExitDate,manager: this.state.Manager};
        console.log('employee22=>'+JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push(`/listemployee`);
        });

    }
    cancle(){
        console.log("akki sharma111");
        this.props.history.push(`/listemployee`);
    }
    

    render() {
        return (
          <>
            <div className="container "  style={{ marginTop: "20px"}}>
                    <div className="row " >
                        <div className="col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{ marginTop: "10px"}}>Add Employee Details</h3>
                            
                                <form style={{ marginTop: "20px", marginBottom:"20px"}}>
                                <div className="form-group" >
                                        <label> Employee Name:</label>
                                        <input placeholder="Employee Name" name="employeename" className="form-control" value={this.state.employeeName} onChange={this.changeemployeenamehandler}/>
                                    </div>
                                <div className="form-group" style={{ marginTop: "20px"}}>
                                    <label for="Designation">Designation:</label>

                                        <select name="Designation" id="Designation" onChange={this.changeDesignationhandler}>
                                        
                                        <option value="" disabled selected>
                                            Select your option
                                        </option>
                                       <option value="HR">HR</option>
                                       <option value="Software Engineering">Software Engineering</option>
                                        <option value="Data Scientist">Data Scientist</option>
               

                                        </select>
                                      </div>  
                                    
                                    {/*<div className="form-group">
                                        <label> Leave Type:</label>
                                        <input placeholder="Leave Type" name="leavetype" className="form-control" value={this.state.leaveType} onChange={this.changeleaveTypehandler}/>
                                    </div>
                                    */}
                                     <div className="form-group">
                                        <label> Date of Birth:</label>
                                        <input type='date'  name="Dobdate" className="form-control" value={this.state.dateofBirth} onChange={this.changeDOBhandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Salary:</label>
                                        <input placeholder="Salary" name="Salary" className="form-control" value={this.state.Salary} onChange={this.changeSalaryhandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Manager:</label>
                                        <input placeholder="Manager" name="Manager" className="form-control" value={this.state.Manager} onChange={this.changemanagerhandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Joining Date:</label>
                                        <input type='date'  name="joindate" className="form-control" value={this.state.joiningDate} onChange={this.changejoinDatehandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Exit Date:</label>
                                        <input type='date' name=" exitdate" className="form-control" value={this.state.ExitDate} onChange={this.changeexitDatehandler}/>
                                    </div>
                                    
                                    <div className="text-center">
                                    <button style={{marginTop: "10px"}}  className="btn btn-info" onClick={this.saveEmployee}>save</button>
                                    <button style={{marginTop: "10px",marginLeft:"10px"}} className="btn btn-info" onClick={this.cancle.bind(this)} >Cancle</button>
                                    </div> 
                                </form>
                            
                        </div>
                    </div>
                </div>
          </>
        )
    }
}
