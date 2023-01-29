import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Separator from '../CommonComponents/Separator';
import EventsImg from '../assets/EsrdLab_Events.jpg';
import PaginationComponent from '../CommonComponents/PaginationComponent';

const EventsAndNews = () => {
    return (
        <>
            <Container className="d-flex justify-content-center">
                <div className="mt-5">
                    <div className='title-div partners mb-5'>
                        <Separator />
                        <div> <h3 className='text-center'>Events & News</h3></div>
                        <Separator />
                    </div>
                    <div>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true" className='mb-4 border-2 border-bottom border-dark-subtle'>
                                <Row className="d-flex justify-content-between mb-4" style={{ height: "150px" }}>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title className='fw-bold text-justify'>eSRD-Lab Team Visit to International Islamic University Chittagong for Collaboration</Card.Title>
                                            <Card.Text style={{ textAlign: "justify" }}>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                            <small className="text-muted">25-10-2022 : updated 3 mins ago</small>
                                        </Card.Body>
                                    </Col>
                                    <Col className="col-3">
                                        <Card.Img style={{ width: "250px", height: "140px", objectFit: "cover" }} src={EventsImg} />
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <Container className='d-flex justify-content-center mb-5'>
                <PaginationComponent />
            </Container>
        </>

    );
};

export default EventsAndNews;