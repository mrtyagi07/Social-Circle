import React from "react";
import { GoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
//import shareVideo from "../assets/share.MP4";
import shareVideo1 from "../assets/share 2.mp4";
import shareVideo2 from "../assets/share3.mp4";
import logo from "../assets/logo.png";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <div className=" relative h-full w-full">
        <video
          src={shareVideo2}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="h-full w-full object-cover"
        />

        <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center bg-black opacity-50">
          {/* <div className="p-5">
            <img src={logo} width="130px" />
          </div> */}

          <div className="absolute top-7 right-7 ">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className=" flex cursor-pointer items-center justify-center rounded-lg bg-slate-100 p-3 outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onError={responseGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
