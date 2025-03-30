"use client";
import React from "react";
import "./globals.css";
import { useState } from "react";
import { Container, Form, Button, ListGroup , Row, div, Card, Nav} from "react-bootstrap";
import ChatApp from "./ChatApp";
import Navbar from "@/components/Navbar";
// import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DefaultExample from "@/components/recentMsg";
import TabsExample from "@/components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  const [key, setKey] = useState('home');
  return (
    <div>
          <Navbar />
        {/* Main Page */}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Recent">
            < DefaultExample />
          </Tab>
          <Tab eventKey="profile" title="Message">
            < ChatApp userName={"Anmol Gupta"} />
            < ChatApp userName={"Dr. Puneet Goyal"}/>
            < ChatApp userName={"Vikash Bajiya Sir"} /> 
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <TabsExample />
          </Tab>
        </Tabs>

        <Container className="bg-light mt-4 p-4 border rounded shadow">
          
          
          

        </Container>
    </div>
  );
  }

