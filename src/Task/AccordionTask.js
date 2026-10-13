import React from 'react'      
import React, { useState } from "react";


function AccordionTask() {
  const [open, setOpen] = useState(null);

  const questions = [
    {
      question: "What are your technical skills?",
      answer: "I know HTML, CSS, JavaScript, React, and SQL."
    },
    {
      question: "Tell me about your projects",
      answer: "I have developed web applications using React and CSS."
    },
    {
      question: "What is your career goal?",
      answer: "My goal is to become a skilled software developer."
    },
    {
      question: "Why should we hire you?",
      answer: "I am a quick learner and enjoy solving problems."
    }
  ];

  return (
    <center>
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <p>Learn more about me and my technical journey.</p>

      {questions.map((item, index) => (
        <div className="faq" key={index}>
          <div
            className="question"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            <span>
              {index + 1}. {item.question}
            </span>
            <span className="icon">
              {open === index ? "-" : "+"}
            </span>
          </div>

          {open === index && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
   

    </div>
    </center>
  )
}

export default AccordionTask
