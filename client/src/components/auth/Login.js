import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      setAlert('Login successful', 'primary');
      props.history.push('/');
    }
    console.log('error :>> ', error);
    if (error) {
      setAlert(`Error: ${error}`, 'danger');
      clearErrors();
    }
  }, [isAuthenticated, error]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '')
      setAlert('Please fill in all the fields', 'danger');
    else await login({ email, password });
  };

  const handleRedirect = () => {
    props.history.push('/register');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <input type='submit' value='Login' className='btn btn-block btn-primary' />
      </form>
      <button className='btn btn-dark btn-sm' onClick={handleRedirect}>
        Don't have an account? Register!
      </button>
    </div>
  );
};

export default Login;
