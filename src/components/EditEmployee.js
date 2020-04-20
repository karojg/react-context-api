import React, { Fragment, useState, useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const EditEmployee = (route) => {
  const [selectedUser, setSelectedUser] = useState({ id: null, name: '', role: '', location: '' });

  const { employees, editEmployee } = useContext(GlobalContext);
  const currentUserId = route.match.params.id;
  let history = useHistory();

  useEffect(() => {
    const selectedUserId = employees.find(emp => emp.id === parseInt(currentUserId));
    setSelectedUser(selectedUserId);
  }, []);

  const handleOnChange = (userKey, value) => setSelectedUser({ ...selectedUser, [userKey]: value })

  const onSubmit = e => {
    e.preventDefault();
    editEmployee(selectedUser);
    history.push('/');
  }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name">
                Name of employee
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
          </div>
          <div className="w-full  mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location">
                Location
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedUser.location} onChange={(e) => handleOnChange('location', e.target.value)} type="text" placeholder="Enter location" />
          </div>
          <div className="w-full  mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="role">
                Role
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedUser.role} onChange={(e) => handleOnChange('role', e.target.value)} type="text" placeholder="Enter role" />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                Edit Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
        </form>
      </div>
    </Fragment>
  )
}

export default EditEmployee;
