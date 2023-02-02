import React,{useState,useEffect} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Separator from '../CommonComponents/Separator';
import EventsImg from '../assets/EsrdLab_Events.jpg';
import PaginationComponent from '../CommonComponents/PaginationComponent';
import axios from 'axios';
import Loader from '../CommonComponents/Loader';
import { Link } from 'react-router-dom';
const EventsAndNews = () => {
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

    const times=[];
   /* events.sort(function(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
      }); */
      console.log(events)
      function getTimeAgo(givenDate) {
      /*  const currentTime = new Date();
        const elapsedTime = currentTime - postTime;
        const elapsedMinutes = Math.floor(elapsedTime / (1000 * 60));
        const elapsedHours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const elapsedMonths = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30));
        const elapsedYears = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
      
        if (elapsedMinutes < 60) {
          return `${elapsedMinutes} minutes ago`;
        } else if (elapsedHours < 24) {
          return `${elapsedHours} hours ago`;
        } else if (elapsedDays < 30) {
          return `${elapsedDays} days ago`;
        } else if (elapsedMonths < 12) {
          return `${elapsedMonths} months ago`;
        } else {
          return `${elapsedYears} years ago`;
        }*/
        const currentDate = new Date();
const diffInTime = currentDate - givenDate;
const diffInMinutes = diffInTime / (1000 * 60);
const diffInHours = diffInMinutes / 60;
const diffInDays = diffInHours / 24;
const diffInMonths = diffInDays / 30.44;
const diffInYears = diffInMonths / 12;

const elapsedMinutes=Math.floor(diffInMinutes);
const elapsedHours=Math.floor(diffInHours)
const elapsedDays=Math.floor(diffInDays) 
const elapsedMonths=Math.floor(diffInMonths)
const elapsedYears=Math.floor(diffInYears) 

if (elapsedMinutes < 60) {
    return `${elapsedMinutes} minutes ago`;
  } else if (elapsedHours < 24) {
    return `${elapsedHours} hours ago`;
  } else if (elapsedDays < 30) {
    return `${elapsedDays} days ago`;
  } else if (elapsedMonths < 12) {
    return `${elapsedMonths} months ago`;
  } else {
    return `${elapsedYears} years ago`;
  }
      }
      events.slice(0).reverse().map((evt)=>{   
          const postTime = new Date(evt.date);
          const timeAgo = getTimeAgo(postTime);
          times.push(timeAgo)
      })
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
                        {
                            loading?<Loader/>:
                            events.slice(0).reverse().map((ev, idx) => (
                                <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true" className='mb-4 border-2 border-bottom border-dark-subtle'>
                                    <Row className="d-flex justify-content-between mb-4 single-event">
                                        <Col>
                                            <Card.Body>
                                                <Card.Title className='fw-bold text-justify'>{ev.title}</Card.Title>
                                                <Card.Text style={{ textAlign: "justify" }}>
                                                   {ev.description.split(" ").splice(0,50).join(" ")+
                                        `.....`}
                                        <Link to={`/events/${ev._id}`}>Read more</Link>
                                                </Card.Text>
                                                <small className="text-muted">{ev.date} : updated {times[idx]}</small>
                                            </Card.Body>
                                        </Col>
                                        <Col className="col-3 event-img">
                                            <Card.Img style={{ width: "250px", height: "140px", objectFit: "cover" }} src={ev.image} />
                                        </Col>
                                    </Row>
                                </div>
                            ))
                        }
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