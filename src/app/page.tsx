"use client"

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useCallback } from "react";

export default function Home() {

 const {isSignedIn} = useAuth()
  return (
    <div className="text-blue-300">Hello World
    { isSignedIn ? <UserButton/> : <SignInButton/>}</div>
  );
}
