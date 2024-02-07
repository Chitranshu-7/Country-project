import React from "react";
import '../App.css'
export default function Home() {
  return (
    <body>
      <nav className="bg-gray-900 text-center py-4 sticky top-0">
        <h1 className="text-white text-3xl font-bold">
          Confirm <span className="text-blue-600">PNR</span>
        </h1>
      </nav>

      <main className="my-16 bg-gray-200 flex flex-wrap  items-center  justify-center py-10 ">
        <div className="">
          <input
            className="py-4 text-2xl font-semibold px-2 outline-none w-full m-2 chinu  "
            type="text"
            name=""
            id=""
            placeholder="Enter PNR Number"
          />
        </div>

        <div className=" ">
          <button className="py-4 text-2xl bg-blue-600 font-semibold px-2 text-white w-full m-2  chinu ">
            See PNR Status
          </button>
        </div>
      </main>
    </body>
  );
}
