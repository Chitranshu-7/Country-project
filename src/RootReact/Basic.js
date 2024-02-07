import React, { useState } from "react";

export default function Basic() {
  const [data, setData] = useState(0);
  return (
    <>
      <h1 className="text-center text-orange-500 font-semibold text-3xl">
        Chitranshu
      </h1>
      <main className=" flex justify-center flex-wrap ">
        <div className="w-96 bg-gray-100 text-center p-10 px-2 rounded-sm">
          <input
            className="text-center py-2 rounded bottom-1 outline-none text-black"
            type="text"
            name=""
            id=""
            placeholder="Enter The name"
          />
        </div>
        <button onClick={()=>{
            setData(data+1)
        }}>Click me</button>
          </main>

    {  data && <h1 className="text-center text-3xl font-semibold text-cyan-500">{data}</h1>}
    {data==2 ? <h1>The value is 5:</h1>:<h1></h1>}
    </>
  );
}
