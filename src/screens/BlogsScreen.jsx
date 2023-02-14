import React from 'react'
import { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Separator from '../components/CommonComponents/Separator';
import PaginationComponent from '../components/CommonComponents/PaginationComponent';
import axios from 'axios';
import Loader from '../components/CommonComponents/Loader';
import { Link } from 'react-router-dom';
import WithLayout from '../Layout/WithLayout'

const BlogsScreen = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)


  const [currentPage, setCurrentPage] = useState(1)
  const [blogsPerPage] = useState(4)

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true)
      const response = await axios.get('https://gray-awful-newt.cyclic.app/api/blogs');
      setBlogs(response.data)
      setLoading(false)
    }
    getBlogs()
  }, [])



  const times = [];


  function getTimeAgo(givenDate) {

    const currentDate = new Date();

    const diffInTime = currentDate - givenDate;
    const diffInMinutes = diffInTime / (1000 * 60);
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInMonths = diffInDays / 30.44;
    const diffInYears = diffInMonths / 12;

    const elapsedMinutes = Math.floor(diffInMinutes);
    const elapsedHours = Math.floor(diffInHours)
    const elapsedDays = Math.floor(diffInDays)
    const elapsedMonths = Math.floor(diffInMonths)
    const elapsedYears = Math.floor(diffInYears)

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
  blogs.slice(0).reverse().map((blg) => {
    const date = new Date(blg.date);
    const formattedDate = date.toISOString().split(".")[0];
    const postTime = new Date(formattedDate + "+00:00");
    //  const postTime = new Date(blg.date+"+00:00");
    const timeAgo = getTimeAgo(postTime);
    times.push(timeAgo)
  })

  const postDates = []
  blogs.slice(0).reverse().map((blg) => {
    const date = new Date(blg.date);
    const formattedDate = date.toISOString().split(".")[0];
    const postTime = new Date(formattedDate + "+00:00");
    const bangladeshTimeZone = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka"
    });
    // const bangladeshDateTime = bangladeshTimeZone.format(postTime);
    const bdPostTime = bangladeshTimeZone.format(postTime)
    const [month, day, year] = bdPostTime.split("/");
    const formatted = `${day}/${month}/${year}`;
    postDates.push(formatted)
  })

  const reversed = blogs.slice(0).reverse().map(e => e)

  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const curBlogs = reversed.slice(indexOfFirstBlog, indexOfLastBlog)
  const changePageNumber = (num) => {
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
              loading ? <Loader /> :
                blogs && blogs.length > 0 &&
                curBlogs.map((blg, idx) => (
                  <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true" className='mb-4 border-2 border-bottom border-dark-subtle'>
                    <Row className="d-flex justify-content-between mb-4 single-event">
                      <Col>
                        <Card.Body>

                          <Card.Title className='fw-bold text-justify'>{blg.title}</Card.Title>
                          <Card.Text style={{ textAlign: "justify" }}>
                            {blg.description.split(" ").splice(0, 50).join(" ") +
                              `.....`}
                            <Link to={`/blogs/${blg._id}`}>Read more</Link>
                          </Card.Text>
                          <small className="text-muted">{postDates[idx]}<span
                            style={{ marginLeft: "10px" }}>updated {times[idx]}</span></small>
                          <p className="text-muted fw-bold">Written by - <Link to={`/me/${blg.username}`} style={{ color: "Red" }}>{blg.name}&nbsp;<i class="bi bi-arrow-up-right-square"></i></Link></p>
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
          {(blogs.length > 0) && <PaginationComponent membersPerPage={blogsPerPage} changePageNumber={changePageNumber}
            totalMembers={blogs.length} currentPage={currentPage} />}
        </div>
      </Container>
    </>
  );
};

export default WithLayout(BlogsScreen)