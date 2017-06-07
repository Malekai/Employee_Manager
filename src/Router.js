import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>

      <Scene key="main">
        <Scene
        onRight={() => Actions.employeeForm()}
        rightTitle="Add"
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        initial
        />
        <Scene
        key="employeeForm"
        component={EmployeeForm}
        title="Create Employee"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
