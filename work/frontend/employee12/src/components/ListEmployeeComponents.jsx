import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
//import InternshipService from '../services/InternshipService'
import 'bootstrap/dist/css/bootstrap.css';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        console.log('i am here');
        this.state = {
                employees: [],
                employee: {}
        }
        this.addEmployee = this.addEmployee.bind(this);
       
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.InternshipEmployee=this.InternshipEmployee.bind(this); 
    }

    InternshipEmployee(id){
       // let Internemployee
      //  e.preventDefault();
       // let Internemployee={firstName: this.state.firstName, lastName:this.state.lastName,emailId: this.state.emailId};
       // console.log('employee11=>'+JSON.stringify(employee)+' '+this.state.id+' ravan');
        // EmployeeService.getEmployeeById(id).then( res => {
        //     this.setState({employee: res.data});
        //     InternshipService.SetEmployee(this.state.employee).then(res=>{
        //         this.props.history.push('/internslist');
        // });  
        
   // });
}
     
    deleteEmployee(id){
        console.log("$$$"+id);
        // EmployeeService.deleteEmployee(id).then( res => {
        //     this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        // });
    }
    viewEmployee(id){
      //  this.props.history.push(`/viewEmployee/${id}`);
    }
    editEmployee(id){
       this.props.history.push(`/updateEmployee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
          this.setState({ employees: res.data});
           console.log("ritu dataa "+this.state.employees)
        });

    }

    addEmployee(){
       this.props.history.push('/addemployee');
    }

    render() {
        return (
            <div className='container'>
                <h1>List</h1>
                 <h2 className="text-center">Employees List</h2>
                 
                    <button className="btn btn-primary" onClick={this.addEmployee} style={{marginBottom:'10px'}}> Add Employee</button>
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Id</th>
                                    <th> Employee Name</th>
                                    <th> Date of Birth</th>
                                    <th>salary</th>
                                    <th>Designation</th>
                                    <th>Joining Date</th>
                                    <th>exit Date</th>
                                    <th>Manager</th>
                                    
                                     <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td>{employee.id}</td>
                                             <td> { employee.name} </td>   
                                             <td> {employee.dob}</td>
                                             <td> {employee.salary}</td>
                                             <td> {employee.designation}</td>
                                             <td> {employee.joiningDate}</td>
                                             <td> {employee.exitDate}</td>
                                             <td> {employee.manager}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                

                                             </td>
                                        </tr>
                                    )
                                 
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent