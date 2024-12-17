import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: []
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
        },
        clearEmployees: (state) => {
            state.employees = [];
        },
    },
});

export const { addEmployee, clearEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
