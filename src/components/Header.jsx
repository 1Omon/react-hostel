import React from "react";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-10 ">
      <div className="flex items-center gap-2" id="logo">
        <img src="/beru.png" alt="" className="rounded-full w-10 h-10"/>
        <h1 className="text-2xl font-bold">HostelBook</h1>
      </div>
      <nav className="">
        <ul className="flex gap-x-4 ">
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="" id="buttons">
        <a href="/login" className="mr-4">Login</a>
        <button className="p-2 bg-blue-500 rounded-md">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
