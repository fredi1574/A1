import { useEffect, useRef, useState } from "react";
import { TextField, Button } from "@mui/material";

import Header from "../components/Header";

const ContactUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = {
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   message: messageRef.current.value,
    // };
  };

  return (
    <div>
      <Header
        backgroundColor="bg-[#2686BA]"
        darkBackgroundColor="dark:bg-[#2e6c8d]"
        hoverColor="hover:bg-[#45A5D9]"
      />
      <div>
        <h1 className="text-3xl text-center my-10 text-[#2686BA] dark:text-[#2468a8]">
          Contact Us
        </h1>
        <form
          className="flex flex-col m-[0_auto] sm:w-[60%] md:w-[60%] lg:w-[30%] p-10 gap-y-6 border-2 shadow-md shadow-[#2686ba75] border-[#349ad1]
     rounded-xl"
        >
          <input
            type="text"
            placeholder="Name"
            ref={nameRef}
            className="rounded-lg border-2 border-[#349ad1] p-2 bg-[#f5f5f5] dark:bg-[#2468a880] dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="rounded-lg border-2 border-[#349ad1] p-2 bg-[#f5f5f5] dark:bg-[#2468a880] dark:text-white"
          />
          <textarea
            placeholder="Message"
            ref={messageRef}
            className="rounded-lg border-2 border-[#349ad1] p-2 bg-[#f5f5f5] dark:bg-[#2468a880] dark:text-white"
          />
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="w-1/4 bg-[#2686BA] rounded-md p-2 text-white hover:bg-[#45A5D9] dark:bg-[#2e6c8d] dark:hover:bg-[#398bb8] active:scale-90 duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
