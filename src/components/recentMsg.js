import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ChatApp from './ChatApp';
function DefaultExample() {
  return (
    <ListGroup as="ol" numbered className='m-2'>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Anmol</div>
          <ChatApp />
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">John</div>
          Cras justo odio
          <ChatApp />
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Marie</div>
            
            Hii Aryan, 
            Its Marie here. 
            <ChatApp />
            
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default DefaultExample;