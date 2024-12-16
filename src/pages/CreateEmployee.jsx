import '../styles/styles.css';
import Calendar from '../components/Calendar';
import DropDownMenu from '../components/DropDownMenu';
import states from '../datas/states.json'; 
import Modal from '../components/Modal';
import useModal from '../useModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addEmployee } from '../features/employeeSlice';
import { useForm } from 'react-hook-form'

function CreateEmployee() {
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()

  const { isShowing, toggle } = useModal();
  
  const submitForm =  (data) => {
    console.log(data);
    dispatch(addEmployee(data));
    navigate('/employeelist');
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            {...register('firstName', { required: true })} // Connexion avec react-hook-form
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            {...register('lastName', { required: true })} // Connexion avec react-hook-form
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          {/* Le composant Calendar passe sa valeur via onChange */}
          <Calendar
            onChange={(value) => setValue('dateOfBirth', value)} // Met à jour manuellement la valeur dans le formulaire
          />

          <label htmlFor="start-date">Start Date</label>
          {/* Le composant Calendar passe sa valeur via onChange */}
          <Calendar
            onChange={(value) => setValue('startDate', value)} // Met à jour manuellement la valeur dans le formulaire
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              {...register('street', { required: true })} // Connexion avec react-hook-form
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              {...register('city', { required: true })} // Connexion avec react-hook-form
            />

            <label htmlFor="state">State</label>
            {/* Le composant DropDownMenu passe sa valeur via onChange */}
            <DropDownMenu
              label="State"
              data={states}
              onChange={(value) => setValue('state', value)} // Met à jour manuellement la valeur dans le formulaire
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              {...register('zipCode', { required: true })} // Connexion avec react-hook-form
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            id="department"
            {...register('department', { required: true })} // Connexion avec react-hook-form
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>

          <button onClick={toggle} type="submit" className="modal-toggle">
            Save
          </button>
        </form>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </div>
  );
}

export default CreateEmployee;
