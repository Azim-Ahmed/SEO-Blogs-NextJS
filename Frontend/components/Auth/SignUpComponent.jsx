import React, { useState } from 'react';
import { signup } from '../../actions/auth';

const SignUpComponent = () => {
  //state of this signup component
  const [values, setValues] = useState({
    name: 'Azim Uddin Ahamed',
    email: 'azimaahmed36@gmail.com',
    password: '111111',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  //submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };
    signup(user).then((data) => {
      if (data.error) {
        //error: "must be declared in string"
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };
  //getting data from the onChange function
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });

    console.log(e.target.value);
  };

  //handling event and timing error and messages
  const showLoading = () =>
    loading ? <div className='alert alert-info'>Loading....</div> : '';
  const showError = () =>
    error ? <div className='alert alert-danger'>{error}</div> : '';
  const showMessage = () =>
    message ? <div className='alert alert-info'>{message}</div> : '';

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            value={name}
            onChange={handleChange('name')}
            placeholder='Type  your Name'
            type='text'
          />
        </div>
        <div className='form-group'>
          <input
            value={email}
            className='form-control'
            onChange={handleChange('email')}
            placeholder='Type  your email'
            type='email'
          />
        </div>
        <div className='form-group'>
          <input
            value={password}
            className='form-control'
            onChange={handleChange('password')}
            placeholder='Type  your Password'
            type='password'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-warning'>
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signupForm()}
    </>
  );
};

export default SignUpComponent;
