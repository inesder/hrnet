import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employeelist" element={<EmployeeList/>} />
            </Routes>
        </Router>
        </Provider>
    </React.StrictMode>
)
