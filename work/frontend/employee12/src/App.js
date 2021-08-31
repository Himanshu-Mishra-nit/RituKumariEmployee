//import logo from './logo.svg';
import './App.css';
import home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponents';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
function App() {
  return (
  
      <>
      
      <Router>
        <h1>App.js</h1>
        <Switch>
        
        <Route path='/listemployee' exact component={ListEmployeeComponent} />
        <Route path='/addemployee' component={AddEmployeeComponent}/>
        <Route path='/updateemployee/:id' component={UpdateEmployeeComponent}/>
        </Switch>
      </Router>
     
    
    </>
  );
}

export default App;
