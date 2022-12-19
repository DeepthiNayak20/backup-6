// {
//   "userName"  :   "akjeelan22@gmail.com",
//   "password"  :   "Jeelan@123"
// }

import './Login.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAsyncThunk } from '../../redux/reducers/LoginSlice'
import { useEffect, useState } from 'react'

const Login = () => {
  const [response, setResponse] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginData = useSelector((state) => state.Login)
  // console.log('loginData', loginData)
  // console.log('loginData', loginData)
  // useEffect(() => {
  //   console.log('loginData', loginData)
  // }, [])

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string().required('Required*'),
      password: Yup.string().required('Required*'),
    }),

    onSubmit: (values) => {
      // console.log('sads', values)
    },
  })

  const submitHandler = (e) => {
    e.preventDefault()
    setResponse(true)

    dispatch(
      LoginAsyncThunk({
        userName: formik.values.userName,
        password: formik.values.password,
      }),
      // navigate('/dashBoard'),
    )
  }

  const loginSubmitHandler = () => {
    console.log('loginSubmitHandler', loginData)
    if (
      (loginData &&
        loginData.data &&
        loginData.data.payload &&
        loginData.data.payload.status) === 200 &&
      (loginData &&
        loginData.data &&
        loginData.data.payload &&
        loginData.data.payload.data &&
        loginData.data.payload.data.role) === '[ROLE_SUPER_ADMIN]'
    ) {
      alert(
        loginData &&
          loginData.data &&
          loginData.data.payload &&
          loginData.data.payload.data &&
          loginData.data.payload.data.status,
      )
      sessionStorage.setItem(
        'token',
        loginData &&
          loginData.data &&
          loginData.data.payload &&
          loginData.data.payload.headers &&
          loginData.data.payload.headers['jwt-token'],
      )
      // console.log('jwt token', loginData.data.payload.headers['jwt-token'])
      sessionStorage.setItem('login', 'superAdmin')
      navigate('/superAdminDashBoard')
    } else if (
      (loginData &&
        loginData.data &&
        loginData.data.payload &&
        loginData.data.payload.status) === 200 &&
      (loginData &&
        loginData.data &&
        loginData.data.payload &&
        loginData.data.payload.data &&
        loginData.data.payload.data.role) === '[ROLE_ADMIN]'
    ) {
      alert(
        loginData &&
          loginData.data &&
          loginData.data.payload &&
          loginData.data.payload.data &&
          loginData.data.payload.data.status,
      )
      sessionStorage.setItem('login', 'admin')
      sessionStorage.setItem(
        'token',
        loginData &&
          loginData.data &&
          loginData.data.payload &&
          loginData.data.payload.headers &&
          loginData.data.payload.headers['jwt-token'],
      )
      navigate('/dashBoard')
    } else if (
      loginData &&
      loginData.data &&
      loginData.data.payload &&
      loginData.data.payload.error
    ) {
      alert(
        loginData &&
          loginData.data &&
          loginData.data.payload &&
          loginData.data.payload.error,
      )
    }
  }
  useEffect(() => {
    response && loginSubmitHandler()
    console.log('response', response)
    console.log('loginData', loginData)
  }, [response, loginData])

  // console.log(formik.errors)
  return (
    <div>
      <form
        action=""
        className="login-loginContainer"
        onSubmitCapture={(e) => {
          formik.handleSubmit()
          submitHandler(e)
        }}
      >
        <input
          type="text"
          name="userName"
          placeholder=" "
          className="login-input"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="userName" className="login-lable">
          User Name
        </label>
        {formik.errors.userName ? (
          <p className="error-msg">{formik.errors.userName}</p>
        ) : null}
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" "
          className="login-input"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="password" className="login-lable">
          Password
        </label>
        {formik.errors.password ? (
          <p className="error-msg">{formik.errors.password}</p>
        ) : null}
        <div>
          <div
            className="login-forgotPassword"
            onClick={() => {
              navigate('/forgotPassword')
            }}
          >
            Forgot Password ?
          </div>
          {/* <div className="button-loginContainer">
            <div className="login-buttonContainer">
              <button type="submit" className="login-loginButtonn">
                Login
              </button>
            </div>
            <div className="login-buttonContainer">
              <button
                type="button"
                className="login-signUpButton"
                onClick={() => {
                  navigate('/signUp')
                }}
              >
                Sign Up
              </button>
            </div>
          </div> */}
          <div className="login-buttonContainer">
            <button type="submit" className="login-loginButton">
              Login
            </button>
          </div>
          <div
            className="signUp-text"
            onClick={() => {
              navigate('/signUp')
            }}
          >
            Don't have an account?&nbsp;
            <span className="span-btn">Sign&nbsp;Up</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
