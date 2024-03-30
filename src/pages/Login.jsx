import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URI + "/users/login",
        {
          username,
          password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("username", username);
        navigate("/Cards");
      } else {
        setError(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(true);
      } else {
        console.error(error);
      }
    }
    setError(false);
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
          Login to your account
        </h1>
        <div className="flex flex-col gap-4 my-4 w-3/4 m-[0_auto]">
          <input
            type="text"
            placeholder="User name"
            ref={usernameRef}
            className="rounded-lg border-2 border-[#349ad1] px-2 py-4 bg-[#f5f5f5] hover:bg-[#AAD6EE] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="rounded-lg border-2 border-[#349ad1] px-2 py-4 bg-[#f5f5f5] hover:bg-[#AAD6EE] outline-none"
          />
        </div>
        <Link to="/Cards" className="text-center">
          <button
            onClick={handleLogin}
            className="w-1/4 bg-[#2686BA] rounded-md p-2 text-white hover:bg-[#45A5D9] active:scale-90 duration-150"
          >
            Submit
          </button>
        </Link>
        <h2 className="text-center mt-5">
          don't have an account?
          <Link to="/Register" className="text-center">
            <span className="text-[#2686BA] m-2 hover:underline">Register</span>
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
