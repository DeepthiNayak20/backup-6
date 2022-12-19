import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showProfileFn } from '../../../redux/showProfile'
import './ChangePassword.css'

const ChangePassword = () => {
  const dispatch = useDispatch()
  const changePasswordHandler = (e) => {
    e.preventDefault()
    const currentPass = e.target.currentPass.value
    const newPass = e.target.newPass.value
    const confirmPass = e.target.confirmPass.value
    console.log('qwerty', currentPass, newPass, confirmPass)
    axios(
      `http://virtuallearnadmin-env.eba-vvpawj4n.ap-south-1.elasticbeanstalk.com/admin/changePassword`,
      {
        method: 'put',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        data: {
          oldPassword: currentPass,
          newPassword: confirmPass,
        },
      },
    )
      .then((res) => {
        if (res) {
          alert(res.data.message)
          // alert(res.data)
          console.log('profile edit', res)

          if (res.status === 200) {
            // navigate('/newPassword')
            dispatch(showProfileFn('profile'))
          }
        }
      })
      .catch((err) => {
        console.log('error', err)
        // alert(
        //   err &&
        //     err.response &&
        //     err.response.data &&
        //     err.response.data.Error &&
        //     err.response.data.Error,
        // )
      })
  }
  return (
    <div>
      <div className="chanePassword-mainText">Change Password</div>
      <div className="editProfile-form">
        <form
          action=""
          className="editProfile-formController"
          onSubmit={(e) => {
            changePasswordHandler(e)
          }}
        >
          <div className="editProfile-body">
            <div className="profile-bodyContainer">
              <input
                type="password"
                id="currentPass"
                name="currentPass"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="currentPass" className="login-lable">
                Current&nbsp;Password
              </label>
            </div>
            <div className="profile-bodyContainer">
              <input
                type="password"
                id="newPass"
                name="newPass"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="newPass" className="login-lable">
                New&nbsp;Password
              </label>
            </div>
            <div className="profile-bodyContainer">
              <input
                type="password"
                id="confirmPass"
                name="confirmPass"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="confirmPass" className="login-lable">
                Confirm&nbsp;Password
              </label>
            </div>
            <div className="changePassword-buttonContaier">
              <button type="submit" className=" changePAssword-button">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
