import React, { useState } from 'react';
import { signin } from '../../actions/auth';
import Router from 'next/router';

const SignInComponent = () => {
  //state of this signup component
  const [values, setValues] = useState({
    email: 'azimaahmed36@gmail.com',
    password: '111111',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  //submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };
    signin(user).then((data) => {
      if (data.error) {
        //error: "must be declared in string"
        setValues({ ...values, error: data.error });
      } else {
        //save user token to cookie

        //save user info to local storage

        //authenticate user

        Router.push(`/`);
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

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
      {showForm && signinForm()}
    </>
  );
};

export default SignInComponent;
