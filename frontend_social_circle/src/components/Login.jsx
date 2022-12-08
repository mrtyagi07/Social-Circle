import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import jwt_decode from "jwt-decode";
//import shareVideo from "../assets/share.MP4";
import shareVideo1 from "../assets/share 2.mp4";
import shareVideo2 from "../assets/share3.mp4";
import logo from "../assets/logo.png";
import { client } from "../client";
//import { createOrGetUser } from "../utils";

const Login = () => {
  const navigate = useNavigate();

  const createOrGetUser = (response) => {
    const decoded = jwt_decode(response.credential);
    console.log(decoded);
    const { name, sub, picture } = decoded;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
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
              onSuccess={(response) => {
                createOrGetUser(response);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
              auto_select={true}
              shape={"square"}
              theme={"filled_black"}
              size={"medium"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
