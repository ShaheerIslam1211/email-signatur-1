import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './signin.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/create');
  }, [user, loading]);

  return (
    <div className='container-fluid'>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/assets/signin.png'}
          alt='SignIn Page'
          className='signin_page_img'
        />
      </div>

      <div className='login-form'>
        <img
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
          alt='Login'
          className='logo signin_page_img'
        />
        <p className='signin'>Signin To EmailStamp</p>

        <div className='row'>
          <div className='col-12'>
            <div className='d-flex gap-3 flex-column'>
              <a
                href='#!'
                className='btn bsb-btn-xl btn-danger'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-google'
                  viewBox='0 0 16 16'
                >
                  <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
                </svg>
                <span
                  className='ms-2 fs-6 text-uppercase'
                  onClick={signInWithGoogle}
                >
                  Sign in With Google
                </span>
              </a>
              <a
                href='#!'
                className='btn bsb-btn-xl btn-primary'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-facebook'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
                <span className='ms-2 fs-6 text-uppercase'>
                  Sign in With Facebook
                </span>
              </a>
              <a
                href='#!'
                className='btn bsb-btn-xl btn-info'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-twitter'
                  viewBox='0 0 16 16'
                >
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                </svg>
                <span className='ms-2 fs-6 text-uppercase'>
                  Sign in With Twitter
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='login-form-or mt-4'>
          <div> OR</div>
        </div>

        <div className='row'>
          <div className='login-form-input ws-input--cap ws-input invalid col'>
            <label className='cap'>Email</label>
            <input
              type='text'
              autoComplete='off'
              spellCheck='false'
              className='mt-4 border-0 bg-white'
              style={{
                outline: 'none !important',
                boxShadow: 'none !important',
                border: '1px solid lightgrey !important',
              }}
              aria-autocomplete='list'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='login-form-input ws-input--cap ws-input invalid'>
            <label className='cap'>Password</label>
            <input
              type='password'
              autoComplete='off'
              spellCheck='false'
              className='active mt-4'
              style={{
                outline: 'none !important',
                boxShadow: 'none !important',
                border: '1px solid lightgrey !important',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className='d-grid gap-2 col-20 mx-auto'>
            <button
              className='btn btn-info btn-lg'
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Sign In
            </button>
          </div>
        </div>

        <div className='row my-3'>
          <div className='col'>
            <a
              href='#!'
              className='forgot-password pl-3 '
            >
              Forgot Password?
            </a>

            <Link
              className='forgot-password ml-1'
              to='/register'
            >
              Create an account
            </Link>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <span>
              By signing up you agree with our
              <button className='privacy-policies'> terms of service </button> &
              <button className='privacy-policies ml-1'>privacy policy</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
