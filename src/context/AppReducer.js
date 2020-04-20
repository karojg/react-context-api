export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_EMPLOYEE':
      return {
        employees: state.employees.filter(employee => employee.id !== action.payload)
      };

    case 'ADD_EMPLOYEES':
      return {
        employees: [...state.employees, action.id]
      };

    case 'EDIT_EMPLOYEE':
      const updatedEmployee = action.payload;

      const updatedEmployees = state.employees.map(employee => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });

      return {
        employees: updatedEmployees
      };

    default:
      return state;
  }
}
