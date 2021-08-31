import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee";

class EmployeeService {
    getCountEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/count');
    }
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/all');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+'/create', employee);
    }

    getEmployeeById(employeeId){
        console.log(typeof(employeeId));
        return axios.get(EMPLOYEE_API_BASE_URL + '/get/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        console.log(employeeId+"->akkki")
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()