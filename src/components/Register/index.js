import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState([
    'One special character',
    'One number',
    'One uppercase character',
    '8 characters minimum',
    'One lowercase character',
  ]);

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);
  const [requirementsFulfilled, setRequirementsFulfilled] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // const validatePassword = (password) => {
  //   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
  //     password
  //   );
  // };

  const handleNameBlur = () => {
    if (!name) {
      setNameError('Your Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('Your Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordFocus = () => {
    setShowPasswordRequirements(true);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    const errors = [];
    if (!/(?=.*\d)/.test(value)) {
      errors.push('One number');
    }
    if (!/(?=.*[a-z])/.test(value)) {
      errors.push('One lowercase character');
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      errors.push('One uppercase character');
    }
    if (!/(?=.*[!@#$%^&*])/.test(value)) {
      errors.push('One special character');
    }
    if (value.length < 8) {
      errors.push('8 characters minimum');
    }
    setPasswordRequirements(errors);
    setRequirementsFulfilled(errors.length === 0);
  };

  const start_now = () => {
    if (!name) {
      setNameError('Your Name is required');
      return;
    }
    if (!email) {
      setEmailError('Your Email is required');
      return;
    }
    if (passwordRequirements.length > 0) {
      setPasswordError('Password requirements not fulfilled');
      return;
    }
    registerWithEmailAndPassword(name, email, password);
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'You have successfully registered.',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/SignIn');
      }
    });
  };

  const tooltipMessage =
    'To continue, please ensure all fields are correctly filled and your password meets the required conditions.';

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/create');
  }, [user, loading]);

  return (
    <div className='signup'>
      <img
        className='signup-img'
        src={process.env.PUBLIC_URL + '/assets/SignupCardsImage.png'}
        alt='SignupCardsImage'
      />
      <form className='signup-form'>
        <div
          className='signup-form-inner-content'
          id='account'
          method='post'
        >
          <label
            htmlFor='EmailStamp registration'
            className='form-label'
          >
            <b> EmailStamp Registration </b>
          </label>
          <input
            type='name'
            id='name'
            className={`form-control ${nameError && 'error'}`}
            autoComplete='username'
            aria-required='true'
            style={{
              outline: 'none !important',
              boxShadow: 'none !important',
              border: '1px solid lightgrey !important',
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleNameBlur}
            placeholder='Your Full Name'
          />
          {nameError && <span className='text-danger'>{nameError}</span>}
          <br />
          <input
            type='email'
            id='email'
            className={`form-control ${emailError && 'error'}`}
            autoComplete='username'
            aria-required='true'
            style={{
              outline: 'none !important',
              boxShadow: 'none !important',
              border: '1px solid lightgrey !important',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            placeholder='Your Email Address'
          />
          {emailError && <span className='text-danger'>{emailError}</span>}
          <br />
          <input
            type='password'
            id='password'
            className={`form-control ${passwordError && 'error'}`}
            autoComplete='new-password'
            aria-required='true'
            style={{
              outline: 'none !important',
              boxShadow: 'none !important',
              border: '1px solid lightgrey !important',
            }}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            onFocus={handlePasswordFocus}
            placeholder='Choose Your Password'
          />
          {showPasswordRequirements && (
            <div className='password-requirements'>
              <ul>
                {passwordRequirements.map((requirement, index) => (
                  <li
                    key={index}
                    style={{
                      color: requirementsFulfilled ? '#00FF00' : '#f5467e',
                    }}
                  >
                    {requirementsFulfilled ? (
                      <span>&#10003;</span>
                    ) : (
                      <span>&#10005;</span>
                    )}{' '}
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {passwordError && (
            <span className='text-danger'>{passwordError}</span>
          )}
          <button
            type='button'
            className={`btn btn-primary mt-4 signup-form-button ${
              !requirementsFulfilled && 'enabled'
            }`}
            onClick={start_now}
            title={!requirementsFulfilled ? tooltipMessage : ''}
          >
            Start Now
          </button>
        </div>

        <div className='signup-form-or'>
          <span className='signup-form-or-content'>
            <span className='signup-form-or-content-line'></span>
            <div className='signup-form-or-content-text'>OR</div>
            <span className='signup-form-or-content-line'></span>
          </span>
        </div>

        <div className='signup-form-remark'>
          Make sure to use your work email only
        </div>

        <div className='btn signup-form-google-logo'>
          <img
            src={process.env.PUBLIC_URL + '/assets/google_logo.png'}
            alt='Google Logo'
          />
          <span
            className='signup-form-google-logo-text'
            onClick={signInWithGoogle}
          >
            Continue with Google
          </span>
        </div>

        <div className='signup-form-tos'>
          By signing up you agree with our
          <a
            className='ml-1'
            href='https://www.google.com/terms/'
            target='blank'
          >
            Term of Use
          </a>
          <span> and </span>
          <a
            href='https://www.google.com/privacy-policy/'
            target='blank'
          >
            Privacy Policy
          </a>
        </div>

        <div className='signup-form-login'>
          <span>Already have an account? </span>
          <Link to='/signin'>Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
