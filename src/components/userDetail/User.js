import React, { useState } from "react";

const User = ({ setSharedData, onSubmit, onAnswerSubmit, onNicknameChange, nickname }) => {
  const [answers, setAnswers] = useState(Array(5).fill(""))

  const textStyling =
    "border rounded-md p-2 w-full text-[12px] lg:text-[20px] outline-none mb-2 lg:h-20";

    // for the user input
  const handleUserChange = (e) => {
    onNicknameChange(e.target.value)
  };

  // textarea field
  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index] = value
    setAnswers(updatedAnswers)
  }

  // textarea
  const handleSubmit = (e) => {
    e.preventDefault()
    onAnswerSubmit(answers)

  }

  const questions = [
            "What makes you stand out?",
            "What do you do for a living?",
            "How was your nickname given?",
           ]

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 w-[80%] py-10 lg:px-10 lg:py-15 bg-white rounded-md relative">
        <h3 className="text-xl font-bold lg:w-full lg:text-4xl">
          Let JIGGY know you
        </h3>
        <form
          // onSubmit={handleSubmit}
          className="flex flex-col items-center lg:items-start lg:w-full justify-center gap-10 h-[100%] lg:py-5"
        >
          {/* input */}
          <div className="flex items-center justify-center gap-2 lg:text-2xl">
            <label htmlFor="username">Nickname:</label>
            <input
              type="text"
              id="username"
              value={nickname}
              onChange={handleUserChange}
              className="border rounded-md p-2 w-40 h-7 lg:w-70 lg:h-10 text-[12px] lg:text-[20px] outline-none"
            />

          </div>  
          {/* textarea */}
          <div className="flex flex-col items-center gap-5  justify-center lg:flex-row lg:items-start lg:justify-between lg:gap-10 w-[90%] lg:w-full text-center lg:text-2xl lg:text-start object-contain h-full">
           {questions.map((question, index) => (
            <div key={index} className="flex flex-col  w-full">
               <label className="font-bold">{question}</label>
                <textarea
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  rows={3}
                  className="border rounded-md h-15 w-full lg:h-30 mt-5"
                />
            </div>
           ))}
          </div>
        </form>
        <button
          onClick={handleSubmit} type="submit" className="px-4 py-2 bg-blue-600 lg:absolute lg:right-10 lg:bottom-5 text-white rounded cursor-pointer">
          View Info
        </button>
      </div>
    </>
  );
};

export default User;
