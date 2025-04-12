import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ChatApp from './ChatApp';
import { DropdownToggle } from 'react-bootstrap';
import { useState } from 'react';

export default function DefaultExample(props) {
  const [activeChatId, setActiveChatId] = useState(null);

  const handleToggleChat = (id) => {
    setActiveChatId(prevId => (prevId === id ? null : id));
  };

  const contacts = [
    { id: 1, userName: 'John Doe', lastMsg: 'Hello!', msgCount: '2' },
    { id: 2, userName: 'Jane Smith', lastMsg: 'How are you?', msgCount: '7' },
    { id: 3, userName: 'Alice Johnson', lastMsg: 'See you later!', msgCount: '3' },
    { id: 4, userName: 'Bob Brown', lastMsg: 'Goodbye!', msgCount: '1' }
  ];

  return (
    <div className='border p-2'>
      <h4 className='text-center'>Recent Messages</h4>
      {contacts.map((contact) => (
        <div key={contact.id} className="ms-2 me-auto mb-2 border-bottom pb-2">
          <div className="fw-bold d-flex align-items-center justify-content-between">
            {contact.userName}
            <div>
              <DropdownToggle
                className='border-0 bg-light text-dark'
                onClick={() => handleToggleChat(contact.id)}
              />
              <Badge pill bg="primary" className='ms-2'>{contact.msgCount}</Badge>
            </div>
          </div>
          {activeChatId === contact.id && <ChatApp />}
        </div>
      ))}
    </div>
  );
}
