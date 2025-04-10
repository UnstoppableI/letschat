import React from "react";
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DefaultExample from "./recentMsg";
import PostPage from "./PostPage"; 
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
            <PostPage />
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