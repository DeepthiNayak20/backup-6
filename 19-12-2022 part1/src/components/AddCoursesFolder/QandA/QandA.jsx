import './QandA.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { useState, useEffect } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'
import axios from 'axios'
import {
  deleteStatus,
  optionFour,
  optionOne,
  optionThree,
  optionTwo,
  storeTest,
  testQuestion,
} from '../../../redux/reducers/testSlice'
import { useDispatch, useSelector } from 'react-redux'

const QandA = () => {
  const [accordian, setAccordian] = useState(false)
  const [counter, setCounter] = useState(0)
  const [answer, setAnswer] = useState('')
  const [QandA, setQandA] = useState([])
  const [chapterName, setChapterName] = useState('')
  const [passing, setPassing] = useState('75')
  const [duration, setDuration] = useState('00:07:00')

  const dispatch = useDispatch()
  const questionData = useSelector((state) => state.test)
  const addNewHAndler = () => {
    setCounter(counter + 1)
    // console.log(counter)
  }
  const childToParent = (childdata) => {
    setAnswer(childdata)
  }

  useEffect(() => {
    axios
      .get(
        `http://virtuallearnadmin-env.eba-vvpawj4n.ap-south-1.elasticbeanstalk.com/admin/chapterList?courseId=42`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        alert('data')
        console.log('data', res.data)
        setQandA(res.data)
      })
  }, [])
  console.log('QandA', QandA)
  const questionHandler = (e) => {
    e.preventDefault()
    alert('alert')
    console.log('alert', questionData, passing, duration, chapterName)

    axios
      .request(
        `http://virtuallearnadmin-env.eba-vvpawj4n.ap-south-1.elasticbeanstalk.com/admin/addTest`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          method: 'post',
          data: {
            testDuration: duration,
            passingGrade: passing,
            testName: e.target.chapter.value,
            questionRequests: questionData.questionRequests,
          },
        },
      )
      .then((res) => {
        console.log('overview result success', res)
        alert(res && res.data && res.data.message && res.data.message)
      })
      .catch((err) => {
        console.log('over view result error', err)
      })
  }

  return (
    <div>
      <div className="QandA-addNewContainer">
        <button
          className="QandA-addNewBtn"
          onClick={() => {
            addNewHAndler()
            // testName: ''

            // testDuration: '00:10:00',
            // passingGrade: '75',
            dispatch(
              storeTest({
                questionName: '',
                option_1: '',
                option_2: '',
                option_3: '',
                option_4: '',
                correctAnswer: '',
                deleteStatus: false,
              }),
            )
          }}
        >
          Add&nbsp;New&nbsp;+
        </button>
      </div>
      <div className="QandA-containerForm">
        <form
          action=""
          className="QandA-formController"
          onSubmit={(e) => {
            questionHandler(e)
          }}
        >
          <div className="container-form">
            <div className="QnAChapter">
              <div className="QandA-leftSide">
                <label>
                  <div className="QandA-chapterName">Select Chapter Name</div>
                  <select name="chapter" className="QandA-select">
                    {QandA &&
                      QandA.length > 0 &&
                      QandA.map((ques, i) => {
                        // setChapterName(ques.chapterName)
                        console.log('QandA', QandA)
                        return (
                          <option
                            value={ques.chapterName}
                            // onChange={() => {
                            //   setChapterName(value)
                            // }}
                            className="QandA-option"
                            key={i}
                          >
                            Chapter {i + 1} - {ques.chapterName}
                          </option>
                        )
                      })}
                  </select>
                </label>
              </div>
              <div className="QandA-rightSide">1&nbsp;of&nbsp;44</div>
            </div>

            <div>
              {Array.from(Array(counter)).map((i, index) => {
                return (
                  <Accordion allowZeroExpanded key={i}>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div className="QandA-QuestionContainer">
                            <div className="QandA-QuestionNo">
                              Question&nbsp;{index + 1}
                            </div>
                            <div className="QandA-containerItem">
                              <div className="QandA-containItem">
                                {' '}
                                <div className="QandA-head">
                                  <input
                                    type="text"
                                    placeholder="Question"
                                    className="QandA-inputText"
                                    required
                                    onChange={(e) => {
                                      dispatch(
                                        testQuestion({
                                          index: index,
                                          question: e.target.value,
                                        }),
                                      )
                                    }}
                                  />
                                </div>
                                <div className="QandA-delete">
                                  {' '}
                                  <button
                                    type="button"
                                    className="QandA-button"
                                    onClick={() => {
                                      alert('delete')
                                      dispatch(
                                        deleteStatus({
                                          index: index,
                                          deleteStatus: true,
                                        }),
                                      )
                                    }}
                                  >
                                    <svg
                                      width={37}
                                      height={36}
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M24.296 13.5v15H12.148v-15h12.148zm-2.278-9h-7.593L12.907 6H7.592v3h21.259V6h-5.315l-1.518-1.5zm5.314 6H9.111v18c0 1.65 1.366 3 3.037 3h12.148c1.67 0 3.037-1.35 3.037-3v-18z"
                                        fill="#000"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="question-container">
                          {' '}
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 1"
                              required
                              onChange={(e) => {
                                dispatch(
                                  optionOne({
                                    index: index,
                                    option_1: e.target.value,
                                  }),
                                )
                              }}
                            />

                            <ToggleSwitch label="option_1" index={index} />
                          </div>
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 2"
                              required
                              onChange={(e) => {
                                dispatch(
                                  optionTwo({
                                    index: index,
                                    option_2: e.target.value,
                                  }),
                                )
                              }}
                            />

                            <ToggleSwitch label="option_2" index={index} />
                          </div>
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 3"
                              required
                              onChange={(e) => {
                                dispatch(
                                  optionThree({
                                    index: index,
                                    option_3: e.target.value,
                                  }),
                                )
                              }}
                            />

                            <ToggleSwitch label="option_3" index={index} />
                          </div>
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 4"
                              required
                              onChange={(e) => {
                                dispatch(
                                  optionFour({
                                    index: index,
                                    option_4: e.target.value,
                                  }),
                                )
                              }}
                            />

                            <ToggleSwitch label="option_4" index={index} />
                          </div>
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                )
              })}

              <div className="QandA-buttonSave">
                <button type="submit" className="QandA-Button">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QandA
