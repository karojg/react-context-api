import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  employees: [
    {
      id: 1,
      name: 'Karolina Jimenez',
      location: 'Costa Rica',
      role: 'Software Developer'
    }
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  function removeEmployee(id) {
    dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: id
    });
  };

  function addEmployee(employees) {
    dispatch({
        type: 'ADD_EMPLOYEES',
        id: employees
    });
  };

  function editEmployee(employees) {
      dispatch({
          type: 'EDIT_EMPLOYEE',
          payload: employees
      });
  };

  // console.log('state',...state)

  return (
    <GlobalContext.Provider value={{
      employees: state.employees,
      removeEmployee,
      addEmployee,
      editEmployee
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
