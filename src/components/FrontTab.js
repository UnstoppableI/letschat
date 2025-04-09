import React from "react";
import { useState } from "react";
import ChatApp from "./ChatApp";
import PostCard from "./PostCard"; // Importing PostCard component
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DefaultExample from "./recentMsg";
import TabsExample from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FrontTab() {
  const [key, setKey] = useState('home');

  return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Stories">
            <PostCard 
            author="Aryan Agrawal" date='7 Jun'
            image="./customer-service.jpg" 
            content="ChatApp nominated for the Best Support Service Application of The Year 2025"
            />
            <PostCard 
            author="Akash Ambani" date="7 Jun"
            image="./DigitalMark.jpeg"
            content="lorem ipsum"
            />
            <PostCard 
            author="Amitabh Bachchan" date="7 Jun"
            image="./Amitabh-Bachchan-KBC.avif"
            content="In Kbc its always Day One"
            />
            <PostCard 
            author="Sunny Deol" date="7 Jun"
            image="./sunnydeol.webp"
            content="Do what you can to beat me."
            />
            <PostCard 
            author="Isha Ambani" date="7 Jun"
            image="./isha.jpeg"
            content="Me with bhai & Me with Bhabhi"
            />
        </Tab>
          <Tab eventKey="profile" title="Message">
             
            < DefaultExample />
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <TabsExample />
          </Tab>
        </Tabs>
    
    );
  }