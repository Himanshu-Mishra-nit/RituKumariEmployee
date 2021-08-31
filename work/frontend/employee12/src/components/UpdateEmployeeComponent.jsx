import React, { Component } from 'react'
import { Form,Button,Col,Row } from "react-bootstrap";
//import InternshipService from '../../services/InternshipService';
//import "./LeaveApplicationEmpForm.css";
import EmployeeService from '../service/EmployeeService'
export default class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
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
         this.UpdateEmployee=this.UpdateEmployee.bind(this);   
         this.changeDesignationhandler=this.changeDesignationhandler.bind(this);
          this.changemanagerhandler=this.changemanagerhandler.bind(this); 
        }
    componentDidMount(){
        console.log('uuuuuppppdddaaattttteeee');
        console.log('uuuuuppppdddaaattttteeee0000'+ this.state.id);
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            console.log('uuuuuppppdddaaattttteeee111');
                         let employee = res.data;
                         console.log('update data'+employee.id);
                         this.setState({
                            employeeName: employee.name,
                            dateofBirth: employee.dob,
                            Salary: employee.salary,
                            Designation:employee.designation,
                            JoiningDate: employee.joiningDate,
                            ExitDate:employee.exitDate,
                            Manager:employee.manager
                         
                         });
                     });
  
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
   
    UpdateEmployee=(e)=>{
        console.log("click to save");
        e.preventDefault();
        let employee={employeeName: this.state.employeeName, Salary:this.state.Salary,Designation: this.state.Designation,dateofBirth: this.state.dateofBirth,joiningDate: this.state.joiningDate,ExitDate: this.state.ExitDate};
        console.log('employee22=>'+JSON.stringify(employee));
        EmployeeService.updateEmployee(employee).then(res =>{
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
                            <h3 className="text-center" style={{ marginTop: "10px"}}>Update Employee Details</h3>
                            
                                <form style={{ marginTop: "20px", marginBottom:"20px"}}>
                                <div className="form-group">
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
                                    <button style={{marginTop: "10px"}}  className="btn btn-info" onClick={this.UpdateEmployee}>save</button>
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
