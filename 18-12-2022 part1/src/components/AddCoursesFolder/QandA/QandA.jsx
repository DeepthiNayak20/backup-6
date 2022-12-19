import './QandA.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { useState } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import ToggleSwitch from '../toggleSwitch/ToggleSwitch'

const QandA = () => {
  const [accordian, setAccordian] = useState(false)
  const [counter, setCounter] = useState(0)
  const [answer, setAnswer] = useState('')
  const addNewHAndler = () => {
    setCounter(counter + 1)
    // console.log(counter)
  }
  const childToParent = (childdata) => {
    setAnswer(childdata)
  }

  return (
    <div>
      <div className="QandA-addNewContainer">
        <button
          className="QandA-addNewBtn"
          onClick={() => {
            addNewHAndler()
          }}
        >
          Add&nbsp;New&nbsp;+
        </button>
      </div>
      <div className="QandA-containerForm">
        <form action="" className="QandA-formController">
          <div className="container-form">
            <div className="QnAChapter">
              <div className="QandA-leftSide">
                <label>
                  <div className="QandA-chapterName">Select Chapter Name</div>
                  <select name="chapter" className="QandA-select">
                    <option
                      value="Chapter 1 - Setting up a new project"
                      className="QandA-option"
                    >
                      Chapter 1 - Setting up a new project
                    </option>
                    <option value="Chapter 2 - ReactJS">
                      Chapter 2 - ReactJS
                    </option>
                    <option value=" Chapter 3 - Web design">
                      Chapter 3 - Web design
                    </option>
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
                                  />
                                </div>
                                <div className="QandA-delete">
                                  {' '}
                                  <button
                                    type="button"
                                    className="QandA-button"
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
                            />

                            <ToggleSwitch
                              label="option1"
                              index={index}
                              childToParent={childToParent}
                            />
                          </div>
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 2"
                            />

                            <ToggleSwitch
                              label="option2"
                              index={index}
                              childToParent={childToParent}
                            />
                          </div>
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 3"
                            />

                            <ToggleSwitch
                              label="option3"
                              index={index}
                              childToParent={childToParent}
                            />
                          </div>
                          <div className="QandA-options">
                            <input
                              type="text"
                              className="question-options"
                              placeholder="Option 4"
                            />

                            <ToggleSwitch
                              label="option4"
                              index={index}
                              childToParent={childToParent}
                            />
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
