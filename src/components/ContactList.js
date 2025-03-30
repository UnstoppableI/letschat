import ChatApp from '@/app/ChatApp';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function TabsExample() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Aryan Agrawal
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Dr. Shyam Soni
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Shreya Singh
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Abhijeet Agrawal
            </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
                <ChatApp userName={"Aryan Agrawal"} />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2"><ChatApp userName={"Dr. Shyam Soni"} /></Tab.Pane>
            <Tab.Pane eventKey="#link3"><ChatApp userName={"Shreya Singh"} /></Tab.Pane>
            <Tab.Pane eventKey="#link4"><ChatApp userName={"Abhijeet Agrawal"}/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabsExample;