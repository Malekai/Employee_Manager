import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  FORM_RESET,
  EMPLOYEES_FETCH_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, role, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // push data to firebase
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push( { name, phone, role, shift })
      .then(() => {
        resetForm();
        Actions.employeeList( { type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // anytime any data comes from this ref call the snapshot function
    // with an object to describe the data sitting in that object
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

// using uid to specify which employee we want to change
export const employeeSave = ({ name, phone, role, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, role, shift })
      .then(() => {
        resetForm()
        Actions.employeeList({ type: 'reset' })
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        resetForm();
        Actions.employeeList({ type: 'reset' })
      });
  };
};

export const resetForm = () => {
  return { type: FORM_RESET }
}
