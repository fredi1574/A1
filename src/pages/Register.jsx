import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const username = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    // Validate input
    if (
      username.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    // Reset password error state
    setPasswordError(false);

    try {
      // Send a POST request to the server with the user name and password
      const response = await axios.post(
        import.meta.env.VITE_API_URI + "/users/register",
        {
          username,
          password,
        }
      );

      // If successful, navigate to the login page
      localStorage.setItem("username", username);
      navigate("/Cards");
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <div className="bg-[#d8f1ff] h-[100vh]">
      <img
        src="../../logo.png"
        className="m-[0_auto] rounded-2xl h-[15rem] mb-1"
        alt="logo"
      />
      <form
        className="flex flex-col m-[0_auto] sm:w-[60%] md:w-[60%] lg:w-[30%] p-10 border-2 shadow-md shadow-[#2686ba75] border-[#349ad1] bg-[#e3f5ff]
     rounded-xl drop-shadow-lg"
      >
        <h1 className="text-3xl text-[#2686BA] border-b-2 border-[#2686BA] m-[0_auto] pb-4">
          Create a new account
        </h1>
        <div className="flex flex-col gap-4 my-4 w-3/4 m-[0_auto]">
          <input
            type="text"
            placeholder="User name"
            ref={userNameRef}
            className="rounded-lg border-2 border-[#349ad1] px-2 py-4 bg-[#f5f5f5] hover:bg-[#AAD6EE] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="rounded-lg border-2 border-[#349ad1] px-2 py-4 bg-[#f5f5f5] hover:bg-[#AAD6EE] outline-none"
          />
          <input
            type="password"
            placeholder="Confirm password"
            ref={confirmPasswordRef}
            className="rounded-lg border-2 border-[#349ad1] px-2 py-4 bg-[#f5f5f5] hover:bg-[#AAD6EE] outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleRegister}
            className="w-1/4 bg-[#2686BA] rounded-md p-2 text-white hover:bg-[#45A5D9] active:scale-90 duration-150"
          >
            Register
          </button>
        </div>
        <h2 className="text-center mt-5">
          Already have an account?
          <Link to="/" className="text-center">
            <span className="text-[#2686BA] m-2 hover:underline">Login</span>
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Register;
