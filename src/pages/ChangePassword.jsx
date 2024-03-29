import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

const ChangePassword = () => {
  const navigate = useNavigate();

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmationRef = useRef();

  const handleChangePassword = async (event) => {
    event.preventDefault();

    const oldPassword = oldPasswordRef.current.value.trim();
    const newPassword = newPasswordRef.current.value.trim();
    const confirmation = confirmationRef.current.value.trim();

    if (newPassword !== confirmation) {
      alert("New password and confirmation do not match");
      return;
    }

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URI + "/users/changePassword",
        { oldPassword, newPassword }
      );

      if (response.data.success) {
        alert("Password changed successfully");
        navigate("/");
      } else {
        alert("Old password is incorrect");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
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
          Change your password
        </h1>
        <form
          className="flex flex-col m-[0_auto] sm:w-[60%] md:w-[60%] lg:w-[30%] p-10 gap-y-6 border-2 shadow-md shadow-[#2686ba75] border-[#349ad1]
     rounded-xl"
        >
          <input
            type="text"
            placeholder="Old Password"
            ref={oldPasswordRef}
            className="rounded-lg border-2 border-[#349ad1] p-2 bg-[#f5f5f5] dark:bg-[#2468a880] dark:text-white"
          />
          <input
            type="text"
            placeholder="New Password"
            ref={newPasswordRef}
            className="rounded-lg border-2 border-[#349ad1] p-2 bg-[#f5f5f5] dark:bg-[#2468a880] dark:text-white"
          />
          <input
            placeholder="Confirm Password"
            ref={confirmationRef}
            className="rounded-lg border-2 border-[#349ad1] p-2 bg-[#f5f5f5] dark:bg-[#2468a880] dark:text-white"
          />
          <div className="m-[0_auto]">
            <button
              onClick={handleChangePassword}
              className="bg-[#2686BA] rounded-md p-2 text-white hover:bg-[#45A5D9] dark:bg-[#2e6c8d] dark:hover:bg-[#398bb8] active:scale-90 duration-150"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
