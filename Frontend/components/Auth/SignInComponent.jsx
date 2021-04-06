import { useState } from 'react';

const SignInComponent = () => {
  //state of this signIn component
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  //submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //getting data from the onChange function
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            onChange={handleChange}
            placeholder='Type  your Name'
            type='text'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            onChange={handleChange}
            placeholder='Type  your email'
            type='email'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            onChange={handleChange}
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

  return <>{signupForm()}</>;
};

export default SignInComponent;
