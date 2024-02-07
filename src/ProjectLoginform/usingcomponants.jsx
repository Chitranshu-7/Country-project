<body>
<main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
  <div className="  ">
    <img src={loginImg} alt="" />
  </div>

  <div className="sm:mt-10 flex flex-col text-center md:self-center  ">
    <h1 className="text text-3xl">Log In</h1>
    <p className="text-gray-400">
      enter your email and password to login our dashboard.
    </p>

    <div className="grid self-center md:self-center text-center sm:mx-10 mx-10 mb-20           md:w-96">
      <input
        type="text"
        name=""
        id=""
        className=" border border-gray-300 rounded sm:w-96 py-2 px-3 md:w-full mt-2 "
        placeholder="Enter The Mail"
      />
      <input
        type="text"
        name=""
        id=""
        className=" mt-2 border border-gray-300 rounded sm:w-96 py-2 px-3 md:w-full "

        placeholder="Password"
      />
      <div>
        
      </div>
      <Button name="Login" />
      <Button name="Sign Up" className='' />
    </div>
  </div>
</main>
</body>