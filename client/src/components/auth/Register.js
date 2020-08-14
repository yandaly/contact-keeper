import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      setAlert('Registered successfully', 'primary');
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(`Error: ${error}`, 'danger');
      clearErrors();
    }
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      await register({ name, email, password });
    }
  };

  const handleRedirect = () => {
    props.history.push('/login');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Elon Musk'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='user@example.com'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='**********'
            value={password}
            onChange={handleChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            placeholder='**********'
            value={password2}
            onChange={handleChange}
            required
            minLength='6'
          />
        </div>
        <input type='submit' value='Register' className='btn btn-block btn-primary' />
      </form>
      <button className='btn btn-dark btn-sm' onClick={handleRedirect}>
        Already have an account? Login!
      </button>
    </div>
  );
};

export default Register;
