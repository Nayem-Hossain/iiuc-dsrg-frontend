import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Separator from '../CommonComponents/Separator';
import EventsImg from '../assets/EsrdLab_Events.jpg';
import axios from 'axios';
import Loader from '../CommonComponents/Loader';
import { Link } from 'react-router-dom';
const CurrentEvents = () => {
    const [events,setEvents]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
       const getEvents=async()=>{
        setLoading(true)
        const response = await axios.get('https://gray-awful-newt.cyclic.app/api/events');
        setEvents(response.data)
        setLoading(false)
       }
       getEvents()
    },[])

    events.sort(function(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
      });
     
    return (
        <Container className="my-5">
            <div className='title-div partners mb-5'>
                <Separator />
                <div> <h3 className='text-center'>Our Current Events</h3></div>
                <Separator />
            </div>
            <Row xs={1} md={2} lg={2} xl={3} className="g-4">
               {
                loading?
                <Loader/>:
                events&& events.length>0 &&
                    events.slice(0, 3).map((ev, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top"
                                style={{height:'235px'}} src={ev.image} />
                                <Card.Body>
                                    <Card.Title className='fw-bold text-justify'>{ev.title}</Card.Title>
                                    <Card.Text style={{textAlign:"justify"}}>
                                        {ev.description.split(" ").splice(0,50).join(" ")+
                                        `.....`}
                                        <Link to={`/events/${ev._id}`}>Read more</Link>
                                    </Card.Text>
                                    <small className="text-muted">{ev.date?.substring(0, 10)}</small>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
               }
            </Row>
            <p style={{textAlign:'center'}}>
                <Link to="/events-news">See more...</Link>
            </p>
        </Container>
    );
};

export default CurrentEvents;