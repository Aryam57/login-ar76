"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 bg-violet-100">
      <h2 className="pt-8 p-7 text-left text-black text-3xl font-mono font-bold" >book.com</h2>
      <ul className="flex p-4 ">
        <li className="p-2 cursor-pointer  no-underline text-md text-black  font-mono font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer   no-underline text-md  text-black  font-mono font-bold ">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="bg-gray-200 text-black  font-mono font-bold rounded-lg p-2">
            Login
          </li>
          <span className="mx-2" ></span>
          <li onClick={handleSignIn} className="text-gray-500  rounded-lg p-2 text-black  font-mono font-bold ">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;