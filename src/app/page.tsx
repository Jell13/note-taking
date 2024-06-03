"use client"

import TypewriterText from "@components/TypewriterText";
import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-rose-100 grainy to-teal-100">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl font-semibold text-center">AI <span className="text-green-600 font-bold">note-taking</span> {" "}
          assistant</h1>
        <div className="mt-4"/>
        <h2 className="text-4xl"><TypewriterText/></h2>
        <div className="mt-8"/>
        <Link href="/dashboard">
          <Button className="bg-green-600">Get started <ArrowRight className="ml-2"/></Button>
        </Link>
      </div>
    </div>
  );
}
