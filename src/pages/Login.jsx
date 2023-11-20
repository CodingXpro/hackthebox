import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('../images/login.jpg')" }}>
            
            
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Login</h2>
            <p className="mb-4">
              Log in to your account. It’s quick and easy.
            </p>
            <form action="#">
             
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">Login</button>
                 <div className="flex justify-center items-center space-x-4 lg:text-lg lg:font-bold ">
          <p>New Here?</p>
          <p>
            <Link className="hover:text-gray-700" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
