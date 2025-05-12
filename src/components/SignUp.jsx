import React, { useEffect, useState } from "react";
import { BsApple, BsGoogle } from "react-icons/bs";
import { Button } from "./Button";

const initials = {
    username: "",
    email: "",
    password: ""
}

const SignUp = () => {
  //defining state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState(initials)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }
  return (
    <div className="p-20 grid grid-cols-2 gap-8 h-screen items-center">
      <section id="form">
        <h3 className="text-4xl font-bold">Create Account</h3>
        <p className="my-4">
          Already have an account? <a href="/login">Log in</a>{" "}
        </p>
        <form action="" className="flex flex-col space-y-6">
          <div className="w-full grid grid-cols-2 gap-x-6">
            <Button className="bg-white " variant={"outline"}>
              Google <BsGoogle className="ml-4" />{" "}
            </Button>
            <Button className="bg-white " variant={"outline"}>
              Apple <BsApple className="ml-4" />{" "}
            </Button>
          </div>
          <span className="">OR</span>
          <div className="space-y-4 flex flex-col">
            <input
              name="username"
              className="border border-[#000] p-2"
              placeholder="Full name"
              onChange={(event) => {
                setUsername(event.target.value);
                console.log(username)
              }}
            />
            <input
              name="email"
              className="border border-[#000] p-2"
              placeholder="Email Address"
              onChange={(event)=>{handleEmailChange(event)}}
            />
            <input
              name="password"
              className="border border-[#000] p-2"
              placeholder="Password"
              onChange={(event)=>{setPassword(event)}}
            />
          </div>
          <Button className="bg-blue-500">Continue</Button>
        </form>
      </section>
      <section id="side-image" className="w-full h-full">
        <img src="/beru.png" className="w-full h-[80vh]" />
      </section>
    </div>
  );
};

export default SignUp;
