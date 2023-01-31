import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Separator from '../CommonComponents/Separator';
import EventsImg from '../assets/EsrdLab_Events.jpg';
import PaginationComponent from '../CommonComponents/PaginationComponent';
import { Link } from 'react-router-dom';

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
                            <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true" className='mb-5'>
                                <div className="media-news-and-events border-bottom border-2">
                                    <div className='news-information'>
                                        <h4 className='news-heading'>eSRD-Lab Team Visit to International Islamic University Chittagong for Collaboration</h4>
                                        <small className="text-muted">Updated: <i>25-10-2022. 3 mins ago</i> </small>
                                        <p style={{ textAlign: "justify" }}>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer. <br /> &nbsp;
                                            <Link to={`https://news.google.com/`}><i class="see-more"><i class="bi bi-chevron-up"></i>&nbsp;see more.......</i></Link>
                                        </p>
                                    </div>
                                    <div>
                                        <img style={{ width: "230px", height: "140px", }} className="img-fluid" alt={"news headline"} src={EventsImg} />
                                    </div>
                                </div>
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