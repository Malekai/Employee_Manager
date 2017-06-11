import { EMPLOYEE_UPDATE, FORM_RESET } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  role: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { props: 'name', value: 'John' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case FORM_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
