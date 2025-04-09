"use client";
import {StrictMode} from "react";
import { createRoutesFromElements } from "react-router-dom";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontTab from "@/components/FrontTab";

export default function Home() {
  return (
    <div>
          <Navbar />
          <FrontTab />
    </div>
  );
  }

