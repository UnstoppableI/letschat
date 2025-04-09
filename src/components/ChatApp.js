"use client";

import { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

export default function ChatApp({userName,userMobile}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "You" }]);
    setInput("");
  };

  return (
    <Container className="mt-1 p-4 border rounded shadow" >
      <h4>{userName}</h4>
      <p>{userMobile}</p>
      <ListGroup className="mb-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <ListGroup.Item key={index} className={msg.sender === "You" ? "text-start" : "text-end"}>
            <strong>{msg.sender}:</strong> {msg.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={sendMessage} className="d-flex">
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" className="ms-2">Send</Button>
      </Form>
    </Container>
  );
}
