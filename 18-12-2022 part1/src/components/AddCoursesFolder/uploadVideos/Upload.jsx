import './Upload.css'
import { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import UploadMultipleVideos from '../uploadMultipleVideos/UploadMultipleVideos'
import RichTextEditor from '../richTextEditor/RichTextEditor'
import OtherTextArea from '../otherTextArea/OtherTextArea'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { storeoverViewData } from '../../../redux/reducers/overViewSlice'
import Loading from '../../../utils/loading/loading'

const Upload = () => {
  const [counterVideo, setCounterVideo] = useState(0)
  const [uploadSuccessful, setUploadSuccessful] = useState(true)
  const [videoCategory, setVideoCategory] = useState([])
  const [videoSubCategory, setVideoSubCategory] = useState([])

  const description = useSelector((state) => state.description)
  const dispatch = useDispatch()

  const addVideoHandler = () => {
    setCounterVideo(counterVideo + 1)
    // console.log(counter)
  }

  useEffect(() => {
    axios
      .get(
        `http://virtuallearnadmin-env.eba-vvpawj4n.ap-south-1.elasticbeanstalk.com/admin/categories`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        // alert('data')
        console.log('data', res.data)
        setVideoCategory(res.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        `http://virtuallearnadmin-env.eba-vvpawj4n.ap-south-1.elasticbeanstalk.com/admin/subCategories`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        // alert('data')
        // console.log('data', res.data)
        setVideoSubCategory(res.data)
      })
  }, [])

  const uploadVideosHandler = (e) => {
    e.preventDefault()

    alert('clicked')
    const formData = {
      videoCategory: e.target.videoCategory.value,
      videoSubCategory: e.target.videoSubCategory.value,
      tagline: e.target.tagline.value,
      videoTitle: e.target.videoTitle.value,
      description:
        description && description.description && description.description,
      courseOutcome: e.target.courseOutcome.value,
      requirements: e.target.requirements.value,

      difficultyLevel: e.target.difficultyLevel.value,
      courseKeyWord: e.target.courseKeyWord.value,
    }

    overViewData()
    dispatch(storeoverViewData(formData))
  }
  const overViewData = (formData) => {
    console.log('form data', formData)
  }

  return (
    <div>
      <div className="upload-container">
        <form
          id="form"
          className="upload-formController"
          onSubmit={uploadVideosHandler}
        >
          <div className="upload-videoCategory">
            <div>
              {' '}
              <div className="upload-title">Video&nbsp;Title</div>
              <div className="upload-videoTitleee">
                <input
                  type="text"
                  name="videoTitle"
                  placeholder="Video Title"
                  className="upload-inputField title"
                />
              </div>
            </div>
            {/* video category */}
            <div className="upload-videoSubCategory">
              <div className="upload-dropDown">
                <div className="upload-title">Video&nbsp;Category</div>

                <div className="upload-videoTitle">
                  <select name="videoCategory" className="upload-select">
                    {videoCategory &&
                      videoCategory.map((cat, i) => {
                        // console.log('cat', cat.categoryName)
                        return (
                          <option
                            value={cat.categoryName}
                            className="QandA-option"
                            key={i}
                          >
                            {cat.categoryName}
                          </option>
                        )
                      })}
                  </select>
                </div>
              </div>
              {/* video sub category */}
              <div className="upload-dropDown">
                <div className="upload-title">Video&nbsp;Sub&nbsp;Category</div>
                <div className="upload-videoTitle">
                  <select name="videoSubCategory" className="upload-select">
                    {videoSubCategory &&
                      videoSubCategory.map((cat) => {
                        // console.log('cat', cat.subCategoryName)
                        return (
                          <option
                            value={cat.subCategoryName}
                            className="QandA-option"
                          >
                            {cat.subCategoryName}
                          </option>
                        )
                      })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* tagline */}
          <div className="upload-tagline">
            <div>
              {' '}
              <div className="upload-title">Video&nbsp;Tagline</div>
              <div className="textarea-tagline">
                <textarea
                  name="tagline"
                  className="upload-inputField tagline"
                ></textarea>
              </div>
            </div>
          </div>
          {/* discription overview */}
          <div className="upload-addDescription">
            <div className="upload-discriptionTitle">
              Add&nbsp;Discription&nbsp;/&nbsp;Overview
            </div>
            <div className="uplaod-discriptionArea">
              <RichTextEditor />
            </div>
            <div className="uplaod-TextArea">
              <OtherTextArea />
            </div>
          </div>
          {/* add videos */}
          <div className="upload-video">
            <div className="upload-videiTitle">
              Video&nbsp;Upload&nbsp;Section
            </div>
            <div className="upload-addNewButton">
              {' '}
              <button
                type="button"
                className="QandA-addNewBtn"
                onClick={() => {
                  addVideoHandler()
                }}
              >
                Add&nbsp;New&nbsp;+
              </button>
            </div>
          </div>
          {/* upload videos */}
          {Array.from(Array(counterVideo)).map((i, index) => {
            return (
              <Accordion allowZeroExpanded key={i}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="QandA-QuestionContainer">
                        <div className="QandA-QuestionNo">
                          Chapter&nbsp;Name
                        </div>
                        <div className="QandA-containerItem">
                          <div className="QandA-containItem">
                            {' '}
                            <div className="upload-head">
                              <input
                                type="text"
                                placeholder="Chapter Name"
                                className="upload-inputText"
                                name="chapterName"
                              />
                              {uploadSuccessful ? (
                                <div className="upload-uploadStatus upload-successfully">
                                  <svg
                                    width="20"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM10.935 21.435L5.55 16.05C4.965 15.465 4.965 14.52 5.55 13.935C6.135 13.35 7.08 13.35 7.665 13.935L12 18.255L22.32 7.935C22.905 7.35 23.85 7.35 24.435 7.935C25.02 8.52 25.02 9.465 24.435 10.05L13.05 21.435C12.48 22.02 11.52 22.02 10.935 21.435Z"
                                      fill="#1EAB0D"
                                    />
                                  </svg>
                                  Videos&nbsp;upload&nbsp;successful
                                </div>
                              ) : (
                                <div className="upload-uploadStatus upload-failed">
                                  <svg
                                    width="20"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 16.5C14.175 16.5 13.5 15.825 13.5 15V9C13.5 8.175 14.175 7.5 15 7.5C15.825 7.5 16.5 8.175 16.5 9V15C16.5 15.825 15.825 16.5 15 16.5ZM16.5 22.5H13.5V19.5H16.5V22.5Z"
                                      fill="#FF0031"
                                    />
                                  </svg>
                                  upload&nbsp;failed
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="upload-container">
                      <UploadMultipleVideos />
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
          <div className="Upload-buttonPublish">
            <button className="QandA-Button">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload
