import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addEmployee } from '../features/employeeSlice';
import Calendar from '../components/Calendar';
import DropDownMenu from '../components/DropDownMenu';
import Modal from '../components/Modal';
import useModal from '../useModal';
import states from '../datas/states.json';
import departments from '../datas/departments.json';

const CreateEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isShowing, toggle } = useModal();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const submitForm = useCallback((data) => {
        dispatch(addEmployee(data));
        toggle();
        setTimeout(() => navigate('/employeelist'), 1000);
    }, [dispatch, navigate, toggle]);

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container-form">
                <div className='form-header'>
                    <h2>Create Employee</h2>
                    <Link to="/employeelist" className='current-employees'>View Current Employees</Link>
                </div>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className='firstName'>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" {...register('firstName', { required: 'First Name is required' })} />
                        {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                    <div className='lastName'>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" {...register('lastName', { required: 'Last Name is required' })} />
                        {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>
                    <div className='birth'>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <Calendar onChange={(value) => setValue('dateOfBirth', value, { shouldValidate: true })} />
                        {errors.dateOfBirth && <span>Date of Birth is required</span>}
                    </div>
                    <div className='startDate'>
                        <label htmlFor="start-date">Start Date</label>
                        <Calendar onChange={(value) => setValue('startDate', value, { shouldValidate: true })} />
                        {errors.startDate && <span>Start Date is required</span>}
                    </div>
                    <div className='street'>
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" {...register('street', { required: 'Street is required' })} />
                        {errors.street && <span>{errors.street.message}</span>}
                    </div>
                    <div className='city'>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" {...register('city', { required: 'City is required' })} />
                        {errors.city && <span>{errors.city.message}</span>}
                    </div>
                    <div className='state'>
                        <label htmlFor="state">State</label>
                        <DropDownMenu label="State" data={states} onChange={(value) => setValue('state', value, { shouldValidate: true })} />
                        {errors.state && <span>State is required</span>}
                    </div>
                    <div className='zipCode'>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input type="number" id="zip-code" {...register('zipCode', { required: 'Zip Code is required' })} />
                        {errors.zipCode && <span>{errors.zipCode.message}</span>}
                    </div>
                    <div className='department'>
                        <label htmlFor="department">Department</label>
                        <DropDownMenu label="Department" data={departments} onChange={(value) => setValue('department', value, { shouldValidate: true })} />
                        {errors.department && <span>Department is required</span>}
                    </div>
                    <div className='button-container'>
                        <button type="submit" className="button">Save</button>
                    </div>
                </form>
                <Modal isShowing={isShowing} hide={toggle} />
            </div>
        </div>
    );
};

export default React.memo(CreateEmployee);
