import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Badge,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
import Sidebar from './componants/Sidebar';
import Slider from './componants/Slider';

function Home(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container fluid className='bg-dark pt-2'>
      <Sidebar />
      <Slider />

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Yogesh Tank</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Senior Developer
              <Badge
                color="info"
                href="https://dollorinfotech.com/"
              >dollorinfotech
              </Badge>
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Akash Rawal</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong> Developer
              <Badge
                color="info"
                href="https://dollorinfotech.com/"
              >dollorinfotech
              </Badge>
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">ROhit Mali</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong> Developer
              <Badge
                color="info"
                href="https://dollorinfotech.com/"
              >dollorinfotech
              </Badge>
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">KrishnPal SIngh</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong> Developer
              <Badge
                color="info"
                href="https://dollorinfotech.com/"
              >dollorinfotech
              </Badge>
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="5">
            <Row>
              <Col sm="3" className='ps-5'>
                <Card
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="3" className='ps-5'>
                <Card
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="3" className='ps-5'>
                <Card
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="3" className='ps-5'>
                <Card
                  style={{
                    width: '18rem'
                  }}
                >
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Card title
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>                      
            </Row>
          </AccordionBody>
        </AccordionItem>
      </Accordion>      
    </Container>
  );
}

export default Home;