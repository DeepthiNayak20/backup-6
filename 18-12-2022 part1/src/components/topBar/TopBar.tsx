import { useState } from 'react'
import './TopBar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Profile from '../profileDrawer/profile/Profile'
import EditProfile from '../profileDrawer/editProfile/EditProfile'

import { useDispatch, useSelector } from 'react-redux'
import ChangePassword from '../profileDrawer/changePassword/ChangePassword'
import { showProfileFn } from '../../redux/showProfile'

const TopBar = () => {
  const dispatch = useDispatch()
  // const [profileModal, setProfileModal] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const editData = useSelector((state: any) => state.profile.data)

  const showProfile = useSelector((state: any) => state.showProfile.show)
  return (
    <div>
      <div className="topBar-Container">
        <div className="topBar-Header">
          <div className="topBar-addCourse">Add&nbsp;Courses</div>
          <div className="topBar-headerIcons">
            <div className="topBar-publish">
              <div className="topBar-publishText">Publish to web</div>
              <div className="topBar-publishIcon">
                <img
                  src={require('../../assets/icons/Web_upload.png')}
                  alt=""
                  className="toolBar-publishImg"
                />
              </div>
            </div>
            <div
              className="topBar-profile"
              onClick={() => {
                toggleDrawer()
                dispatch(showProfileFn('profile'))
              }}
              // onClick={() => {
              //   setProfileModal(false)
              // }}
            >
              <div className="topBar-profileItem">
                <img
                  src={
                    editData &&
                    editData.data &&
                    editData.data.profilePhoto &&
                    editData.data.profilePhoto
                  }
                  alt=""
                  className="topBar-profileIcon"
                />
              </div>
              <div className="topBar-profileText">
                {' '}
                {editData &&
                  editData.data &&
                  editData.data.fullName &&
                  editData.data.fullName}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="topBar-drawer">
          <div className="topBar-drawerContainer">
            <div className="topBar-drawerClose">
              <img
                src={require('../../assets/close@2x.png')}
                alt=""
                className="topbar-closeImg"
                onClick={() => {
                  toggleDrawer()
                }}
              />
            </div>
            {showProfile === 'profile' ? (
              <Profile />
            ) : showProfile === 'edit' ? (
              <EditProfile />
            ) : (
              <ChangePassword />
            )}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default TopBar
