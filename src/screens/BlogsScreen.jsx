import React from 'react'
import {useState,useEffect} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Separator from '../components/CommonComponents/Separator';
import PaginationComponent from '../components/CommonComponents/PaginationComponent';
import axios from 'axios';
import Loader from '../components/CommonComponents/Loader';
import { Link } from 'react-router-dom';
import WithLayout from '../Layout/WithLayout'

const BlogsScreen = () => {
    const [blogs,setBlogs]=useState([])
    const [loading,setLoading]=useState(false)

    
  const [currentPage,setCurrentPage]=useState(1)
  const [blogsPerPage]=useState(4)

    useEffect(()=>{
       const getBlogs=async()=>{
        setLoading(true)
        const response = await axios.get('https://gray-awful-newt.cyclic.app/api/blogs');
        setBlogs(response.data)
        setLoading(false)
       }
       getBlogs()
    },[])



    const times=[];
 
     
      function getTimeAgo(givenDate) {
      
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
      blogs.slice(0).reverse().map((blg)=>{   
          const postTime = new Date(blg.date);
          const timeAgo = getTimeAgo(postTime);
          times.push(timeAgo)
      })
      
      const reversed=blogs.slice(0).reverse().map(e=>e)

      const indexOfLastBlog=currentPage*blogsPerPage
      const indexOfFirstBlog=indexOfLastBlog-blogsPerPage
      const curBlogs=reversed.slice(indexOfFirstBlog,indexOfLastBlog)
      const changePageNumber=(num)=>{
          setCurrentPage(num);
      }
  
    return (
        <>
            <Container className="d-flex justify-content-center">
                <div className="mt-5">
                    <div className='title-div partners mb-5'>
                        <Separator />
                        <div> <h3 className='text-center'>Blogs</h3></div>
                        <Separator />
                    </div>
                    <div>
                        {
                            loading?<Loader/>:
                            blogs && blogs.length > 0 &&
                            curBlogs.map((blg, idx) => (
                                <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true" className='mb-4 border-2 border-bottom border-dark-subtle'>
                                    <Row className="d-flex justify-content-between mb-4 single-event">
                                        <Col>
                                            <Card.Body>
                                            <Card.Text style={{ textAlign: "justify" }}>
                                                   Written by:{blg.username}
                                                </Card.Text>
                                                <Card.Title className='fw-bold text-justify'>{blg.title}</Card.Title>
                                                <Card.Text style={{ textAlign: "justify" }}>
                                                   {blg.description.split(" ").splice(0,50).join(" ")+
                                        `.....`}
                                        <Link to={`/blogs/${blg._id}`}>Read more</Link>
                                                </Card.Text>
                                                <small className="text-muted">{blg.date?.substring(0, 10)}<span 
                                                style={{marginLeft:"10px"}}>updated {times[idx]}</span></small>
                                                <p className="text-muted">Written by:{blg.username}</p>
                                            </Card.Body>
                                        </Col>
                                        <Col className="col-3 event-img">
                                            <Card.Img style={{ width: "250px", height: "140px", objectFit: "cover" }} src={blg.image} />
                                        </Col>
                                    </Row>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </Container>
            <Container className='d-flex justify-content-center mb-5'>
            <div className='d-flex justify-content-center my-5'>
             {/* <PaginationComponent></PaginationComponent> */}
             {(blogs.length>0) && <PaginationComponent membersPerPage={blogsPerPage} changePageNumber={changePageNumber}
              totalMembers={blogs.length} currentPage={currentPage}/>}
            </div>
            </Container>
        </>

    );
};

export default WithLayout(BlogsScreen)