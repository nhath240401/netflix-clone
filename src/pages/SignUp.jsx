import { useState } from "react";
import "../App.css";
import Login from '../pages/Login'

const SignUp = () => {
  const [signin, setSignin] = useState(false);
  return (
    <div className="relative h-full siupup_page">
      <div className="flex justify-between cursor-pointer signup h-[135vh]">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="background_img"
          className="w-[130px] h-[85px] object-cover ml-5"
        />
        <div className="mt-5 mr-5">
          <select className="p-[5px] bg-zinc-800 text-white opacity-80">
            <option className="p-3 text-black bg-white">English</option>
            <option className="p-3 text-black bg-white">Tiếng Việt</option>
          </select>
          <button
            onClick={() => setSignin(true)}
            className="ml-5 p-[6px] font-semibold text-white bg-red-600 rounded-md hover:opacity-90"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="absolute w-full text-center text-white top-1/4">
        {signin ? (
          <Login />
        ) : (
          <>
            <h1 className="text-3xl font-bold">
              Unlimited movies, TV shows, and more.
            </h1>
            <p className="my-5 text-lg font-semibold">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="mb-5 text-lg font-semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <input
              type="text"
              placeholder="Email address"
              className="w-[450px] p-3 outline-none focus:text-black"
            />
            <input
              onClick={() => setSignin(true)}
              type="submit"
              value="Get Started >"
              className="p-3 mt-3 text-lg font-semibold bg-red-600 cursor-pointer"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
