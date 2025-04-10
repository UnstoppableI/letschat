"use client";
import {StrictMode} from "react";
import { createRoutesFromElements } from "react-router-dom";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontTab from "@/components/FrontTab";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen">
  {/* Sidebar */}
  <aside className="bg-gray-100 p-4">
    <h2 className="text-lg font-bold mb-4">ARYAN AGRAWAL</h2>
    <ul>
      <li className="mb-2"><a href="#">Home</a></li>
      <li className="mb-2"><a href="#">Posts</a></li>
      <li className="mb-2"><a href="#">Settings</a></li>
    </ul>
  </aside>

  {/* Main Content */}
  <main className="p-6 bg-white">
    {/* Your PostCards or content here */}
    <FrontTab />
  </main>
</div>

    </div>
  );
  }

