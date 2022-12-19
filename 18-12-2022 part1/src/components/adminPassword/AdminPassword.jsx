import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showProfileFn } from '../../redux/showProfile'
import './AdminPassword.css'

const AdminPassword = () => {
  const dispatch = useDispatch()
  const adminPasswordHandler = (e) => {
    e.preventDefault()
    const currentPass = e.target.currentPass.value
    const newPass = e.target.newPass.value
    const confirmPass = e.target.confirmPass.value
    console.log('settings', currentPass, newPass, confirmPass)
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
    <div className="studentList-container">
      <div className="admin-changePassword">Change Password</div>
      <div className="admin-form">
        <form
          action=""
          className="admin-formController"
          onSubmit={(e) => {
            adminPasswordHandler(e)
          }}
        >
          <div className="admin-formContainer">
            <div className="admin-label">
              <label className="admin-label">Change Password</label>
              <input
                type="password"
                className="admin-input"
                placeholder="Change Password"
                name="currentPass"
              />
            </div>

            <div className="admin-label">
              <label className="admin-label">New Password</label>
              <input
                type="password"
                className="admin-input"
                placeholder="New Password"
                name="newPass"
              />
            </div>

            <div className="admin-label">
              <label className="admin-label">Confirm Password</label>
              <input
                type="password"
                className="admin-input"
                placeholder="Confirm Password"
                name="confirmPass"
              />
            </div>
          </div>

          <div className="admin-label">
            <button type="submit" className="admin-buttonSave">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminPassword
