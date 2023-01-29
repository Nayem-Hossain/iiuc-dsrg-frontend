import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Separator from '../CommonComponents/Separator';
import EventsImg from '../assets/EsrdLab_Events.jpg';

const CurrentEvents = () => {
    return (
        <Container className="my-5">
            <div className='title-div partners mb-5'>
                <Separator />
                <div> <h3 className='text-center'>Our Current Events</h3></div>
                <Separator />
            </div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={EventsImg} />
                            <Card.Body>
                                <Card.Title className='fw-bold text-justify'>eSRD-Lab Team Visit to International Islamic University Chittagong for Collaboration</Card.Title>
                                <Card.Text style={{textAlign:"justify"}}>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <small className="text-muted">22nd of October 2022</small>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CurrentEvents;