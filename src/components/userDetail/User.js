import React, { useState } from "react";

const User = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({
    quality: "",
    occupation: "",
    reason: "",
    hobbies: "",
    fact: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name && data) {
  //     onSubmit({ name, data });
  //     setName("");
  //     setData("");
  //   }
  // };

  const textStyling =
    "border rounded-md p-2 w-full text-[12px] lg:text-[20px] outline-none mb-2 lg:h-20";

  const handleUserChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClick = () => {
    onSubmit(inputValue)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 w-[80%] py-10 lg:px-10 bg-white rounded-md relative">
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
              value={inputValue}
              onChange={handleUserChange}
              className="border rounded-md p-2 w-40 h-7 lg:w-70 lg:h-10 text-[12px] lg:text-[20px] outline-none"
            />
          </div>  
          {/* textarea */}
          {/* <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between lg:gap-10 w-[90%] lg:w-full text-center lg:text-2xl lg:text-start object-contain h-full">
            <div className="flex flex-col gap-3 lg:w-1/2">
              <label htmlFor="bio1">What makes you stand out?</label>
              <textarea
                id="bio1"
                // value={data.quality}
                className={textStyling}
              />
              <label htmlFor="bio2">What do you do for a living?</label>
              <textarea
                id="bio2"
                value={data.occupation}
                className={textStyling}
              />
              <label htmlFor="bio3">
                Why do people call you that nickname?
              </label>
              <textarea id="bio3" value={data.reason} className={textStyling} />
            </div>

            <div className="flex flex-col gap-3 lg:w-1/2">
              <label htmlFor="bio4">What are your hobbies/interests?</label>
              <textarea
                id="bio4"
                value={data.hobbies}
                className={textStyling}
              />
              <label htmlFor="bio5">
                What is one fun fat most people don&apos;t know about you?
              </label>
              <textarea id="bio5" value={data.fact} className={textStyling} />
            </div>
          </div> */}
        </form>
        <button
          onClick={handleClick} className="px-4 py-2 bg-blue-600 lg:absolute lg:right-10 lg:bottom-20 text-white rounded cursor-pointer">
          View Info
        </button>
      </div>
    </>
  );
};

export default User;
