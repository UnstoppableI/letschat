"use client";
import {StrictMode} from "react";
import { createRoutesFromElements } from "react-router-dom";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontTab from "@/components/FrontTab";
import Sidebar from "@/components/Sidebar";
import PostPage from "@/components/PostPage";
import DefaultExample from "@/components/recentMsg";
export default function Home() {
  return (
    <div>
          <Navbar />
          <div className="py-10 grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] min-h-screen">
            {/* Sidebar */}
            <aside className="bg-gray-100 p-2">
              <div className="fixed py-10"><h2 className="text-sm font-bold mb-4">ARYAN AGRAWAL</h2>
              <ul>
                <li className="mb-2"><a href="#">Home</a></li>
                <li className="mb-2"><a href="#">Posts</a></li>
                <li className="mb-2"><a href="#">Settings</a></li>
              </ul>
              <h2 className="text-sm font-bold mb-4">FRIENDS</h2>
              <ul>
                <li className="mb-2"><a href="#">Aryan Agrawal</a></li>
                <li className="mb-2"><a href="#">Dr. Shyam Soni</a></li>
                <li className="mb-2"><a href="#">Shreya Singh</a></li>
                <li className="mb-2"><a href="#">Abhijeet Agrawal</a></li>  
                <li className="mb-2"><a href="#">Shivam Agrawal</a></li>
                <a >View More</a>
              </ul>
              <h2 className="text-sm font-bold mb-4">TAGS</h2>
              <ul>
                <li className="mb-2"><a href="#">React</a></li>
                <li className="mb-2"><a href="#">JavaScript</a></li>
                <li className="mb-2"><a href="#">CSS</a></li>
                <li className="mb-2"><a href="#">HTML</a></li>
                <a>View More</a>
                
              </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="p-6 bg-white row">
              {/* Your PostCards or content here */}
              <div className="col"><PostPage /></div>
              <div className="col-md-3"><DefaultExample /></div>
              
            </main>

            
          </div>

    </div>
  );
  }

