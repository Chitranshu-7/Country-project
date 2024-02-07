import React from "react";
import loginImg from "../Img/data.jpg";
import Button from "./Button";
import InputForm from "../Pnr/InputForm";
export default function Loginform() {
  return (
    <>
      <div></div>
      <div className=" text-orange-400 py-4 text-3xl bg-gray-800 sticky top-0">
        <h1 className="text-center   ">WELCOME</h1>
      </div>

      {/* <div className=" p-2 rounded">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-12 gap-4 lg:gap-10 md:mx-20 ">
            <div className="lg:col-start-1 lg:col-end-8 col-span-2">
              <img
                alt=""
              />
            </div>
            <div className="bg-white border shadow-lg p-4 lg:col-start-8 lg:col-end-13  lg:p-14 ">
              <div className="text-center  ">
                <h1 className="text-4xl text-gray-700 font-sans">Login</h1>
                <p className="mt-2 font-mono">Welcome To The New World </p>
              </div>
              <div className="mt-5">
                <InputForm
                  types="text"
                  placeHolder="Enter the Email"
                  name="Email:"
                />
              </div>
              <div className="mt-5">
                <InputForm
                  types="password"
                  placeHolder="Enter The Password"
                  name="Password:"
                ></InputForm>
              </div>

              <div className="grid grid-cols-2  gap-4 mt-5">
                <button className="text-sm  bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white ">Login</button>
                <button className="text-sm  bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white ">Login</button>
              
             
              </div>
            </div>
          </div>
        </div> */}

      {/* <body>
        <main className="flex flex-wrap justify-center  ">
          <div className=" md:basis-7/12  ">
            <img src={loginImg} alt="" className="md:h-screen" />
          </div>

          <div className="md:basis-5/12  sm:w-full   ">
            <div className="border rounded md:m-20 sm:m-10  shadow-md">
              <div className="md:p-10 sm:p-4">
                <div className="text-center  ">
                  <h1 className="text-4xl text-gray-700 font-sans">Login</h1>
                  <p className="mt-2 font-mono">Welcome To The New World </p>
                </div>

                <div className="mt-5">
                  <InputForm
                    types="text"
                    placeHolder="Enter the Email"
                    name="Email:"
                  />
                </div>
                <div className="mt-5">
                  <InputForm
                    types="password"
                    placeHolder="Enter The Password"
                    name="Password:"
                  ></InputForm>
                </div>

                <div className="grid grid-cols-2  gap-4 mt-5">
                  <button className="text-sm  bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white ">
                    Login
                  </button>
                  <button className="text-sm  bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white ">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body> */}

      {/* <body>
      <main className="flex flex-wrap justify-center">
        <div className="md:basis-7/12">
          <img src={loginImg} alt="" className="md:h-screen" />
        </div>

        <div className="md:basis-5/12 sm:w-full">
          <div className="border rounded md:m-20 sm:m-10 shadow-md p-10">
            <div className="text-center">
              <h1 className="text-4xl text-gray-700 font-sans">Login</h1>
              <p className="mt-2 font-mono">Welcome To The New World</p>
            </div>

            <div className="mt-5">
              <InputForm types="text" placeHolder="Enter the Email" name="Email:" />
            </div>

            <div className="mt-5">
              <InputForm types="password" placeHolder="Enter The Password" name="Password:" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <button className="text-sm bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white">
                Login
              </button>
              <button className="text-sm bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </main>
    </body> */}

      <div className="body">
        <div className="main   grid grid-cols-12 gap-5  lg:gap-10 px-4  sm:px-6 md:px-10">
          <div className="   md:col-span-7 sm:col-span-6  col-span-12 lg:col-span-8 ">
            <div className="mt-2 rounded ">
              <img
                // src={loginImg}
                src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                alt=""
                className="w-full rounded"
              />
            </div>
          </div>
          <div className=" md:mt-10 md:col-span-5  sm:col-span-6  col-span-12  lg:col-span-4  ">
            <div className="border shadow-md  p-4">


              <div>
                <h1 className="font-serif text-center text-cyan-400 text-2xl">Login</h1>
                <p className="text-cyan-400 font-semibold text-ellipsis text-center mt-2">Please Enter Your details Here</p>
              </div>
              <div className="mt-2">
                <InputForm
                  name="Email"
                  placeHolder="Enter the email"
                  types="password"
                />
              </div>

           

              <div className="mt-2">
                <InputForm
                  name="Password"
                  placeHolder="Enter the email"
                  types="password"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">
                <button className="text-sm bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white">
                  Login
                </button>
                <button className="text-sm bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
