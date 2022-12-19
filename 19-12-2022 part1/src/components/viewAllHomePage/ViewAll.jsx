import { useState } from 'react'
import './ViewAll.css'
import Modal from 'react-modal'
import { NavLink } from 'react-router-dom'

const ViewAll = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  // const [toBeDeleted, setToBedeleted] = useState({})

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="studentList-container studentList-container-1">
      <div className="viewall-container">
        <div className="viewall-header">
          <NavLink to="/dashBoard/main">
            {' '}
            <svg
              width={24}
              height={24}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                fill="#000"
              />
            </svg>{' '}
          </NavLink>
          Recently courses added
        </div>
        <div className="viewall-body">
          <div className="RecentCourses-CourseList">
            <div className="RecentCourses-Title">
              <div className="RecentCourses-Thumbnail">
                <img
                  src={require('../../assets/thumbnail.jpg')}
                  alt=""
                  className="RecentCourses-thumbnail"
                />
                {/* <img
                  src={
                    // item.thumbnail
                    //   ? item.thumbnail
                    //   : require('../../images/thumbnail.jpg')
                    require('../../assets/thumbnail.jpg')
                  }
                  // alt={item.courseName}
                  className="RecentCourses-thumbnail"
                /> */}
                <div className="RecentCourses-thumbnail-play">
                  <svg
                    width={19}
                    height={19}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 18a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                      fill="#EE5C4D"
                      fillOpacity={0.7}
                      stroke="#EE5C4D"
                      strokeWidth={0.962}
                    />
                    <mask
                      id="prefix__a"
                      style={{
                        maskType: 'alpha',
                      }}
                      maskUnits="userSpaceOnUse"
                      x={7}
                      y={6}
                      width={6}
                      height={7}
                    >
                      <path
                        d="M8.534 12.286l.004-.002 3.812-2.29h.001a.783.783 0 00.356-.487.785.785 0 00-.356-.862h-.001l-3.812-2.29a.78.78 0 00-.6-.08.782.782 0 00-.584.753v4.583a.789.789 0 001.18.675z"
                        fill="#fff"
                      />
                    </mask>
                    <g mask="url(#prefix__a)">
                      <path
                        d="M8.534 12.286l.004-.002 3.812-2.29h.001a.783.783 0 00.356-.487.785.785 0 00-.356-.862h-.001l-3.812-2.29a.78.78 0 00-.6-.08.782.782 0 00-.584.753v4.583a.789.789 0 001.18.675z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="RecentCourses-titleContainer">
                <div>Courses|Python Programming for School children</div>
                {/* {item.AddedOn ? (
                  <div className="date-Container">
                    Added on {item.AddedOn && item.AddedOn.date},{' '}
                    {item.AddedOn && item.AddedOn.time}
                  </div>
                ) : (
                  ''
                )} */}
                <div className="date-Container">
                  Added on 07-12-2022, 11:29am
                </div>
                <aside className="delete-modal">
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="delete-course-modal"
                    parentSelector={() => document.querySelector('#root')}
                  >
                    <div className="delete-course-modal-content">
                      <div className="deleteCourse">Delete Video</div>
                      <div className="deleteContent">
                        Are you sure you want to Delete the video
                        <strong> "Designing"</strong> from the Recently courses
                        added?
                      </div>
                      <div className="buttons">
                        <button onClick={closeModal} className="cancel">
                          Cancel
                        </button>
                        <button className="delete">Delete</button>
                      </div>
                    </div>
                  </Modal>
                </aside>
              </div>
            </div>
            <div>
              <button
                className="delete-courses"
                onClick={(event) => {
                  openModal()
                }}
              >
                <svg
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
                    fill="#092963"
                    fillOpacity={0.1}
                  />
                  <path
                    d="M22 16v10h-8V16h8zm-1.5-6h-5l-1 1H11v2h14v-2h-3.5l-1-1zm3.5 4H12v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V14z"
                    fill="#092963"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* dgfgfghfghfg */}
        <div className="viewall-body">
          <div className="RecentCourses-CourseList">
            <div className="RecentCourses-Title">
              <div className="RecentCourses-Thumbnail">
                <img
                  src={require('../../assets/thumbnail.jpg')}
                  alt=""
                  className="RecentCourses-thumbnail"
                />
                {/* <img
                  src={
                    // item.thumbnail
                    //   ? item.thumbnail
                    //   : require('../../images/thumbnail.jpg')
                    require('../../assets/thumbnail.jpg')
                  }
                  // alt={item.courseName}
                  className="RecentCourses-thumbnail"
                /> */}
                <div className="RecentCourses-thumbnail-play">
                  <svg
                    width={19}
                    height={19}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 18a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                      fill="#EE5C4D"
                      fillOpacity={0.7}
                      stroke="#EE5C4D"
                      strokeWidth={0.962}
                    />
                    <mask
                      id="prefix__a"
                      style={{
                        maskType: 'alpha',
                      }}
                      maskUnits="userSpaceOnUse"
                      x={7}
                      y={6}
                      width={6}
                      height={7}
                    >
                      <path
                        d="M8.534 12.286l.004-.002 3.812-2.29h.001a.783.783 0 00.356-.487.785.785 0 00-.356-.862h-.001l-3.812-2.29a.78.78 0 00-.6-.08.782.782 0 00-.584.753v4.583a.789.789 0 001.18.675z"
                        fill="#fff"
                      />
                    </mask>
                    <g mask="url(#prefix__a)">
                      <path
                        d="M8.534 12.286l.004-.002 3.812-2.29h.001a.783.783 0 00.356-.487.785.785 0 00-.356-.862h-.001l-3.812-2.29a.78.78 0 00-.6-.08.782.782 0 00-.584.753v4.583a.789.789 0 001.18.675z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="RecentCourses-titleContainer">
                <div>Courses|Python Programming for School children</div>
                {/* {item.AddedOn ? (
                  <div className="date-Container">
                    Added on {item.AddedOn && item.AddedOn.date},{' '}
                    {item.AddedOn && item.AddedOn.time}
                  </div>
                ) : (
                  ''
                )} */}
                <div className="date-Container">
                  Added on 07-12-2022, 11:29am
                </div>
                <aside className="delete-modal">
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="delete-course-modal"
                    parentSelector={() => document.querySelector('#root')}
                  >
                    <div className="delete-course-modal-content">
                      <div className="deleteCourse">Delete Video</div>
                      <div className="deleteContent">
                        Are you sure you want to Delete the video
                        <strong> "Designing"</strong> from the Recently courses
                        added?
                      </div>
                      <div className="buttons">
                        <button onClick={closeModal} className="cancel">
                          Cancel
                        </button>
                        <button className="delete">Delete</button>
                      </div>
                    </div>
                  </Modal>
                </aside>
              </div>
            </div>
            <div>
              <button
                className="delete-courses"
                onClick={(event) => {
                  openModal()
                }}
              >
                <svg
                  width={36}
                  height={36}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
                    fill="#092963"
                    fillOpacity={0.1}
                  />
                  <path
                    d="M22 16v10h-8V16h8zm-1.5-6h-5l-1 1H11v2h14v-2h-3.5l-1-1zm3.5 4H12v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V14z"
                    fill="#092963"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* jgfgfghgjkjkfd */}
      </div>
    </div>
  )
}

export default ViewAll
