import React, { useEffect, useState } from 'react'
import Member from '../components/MembersComponents/Member'
import Loader from '../components/CommonComponents/Loader'
import ScrollToTop from '../components/CommonComponents/ScrollToTop'
import axios from 'axios'
import WithLayout from '../Layout/WithLayout'
import { Col, Container, Row } from 'react-bootstrap'
import PaginationComponent from '../components/CommonComponents/PaginationComponent'

const MembersScreen = () => {
  const [members, setMembers] = useState([])
  useEffect(() => {
    try {
      const getMembers = async () => {
        const response = await axios.get('https://gray-awful-newt.cyclic.app/api/members');
        setMembers(response.data)
      }
      getMembers()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className='members-screen'>
      <ScrollToTop />
      <h2 className='text-center' style={{ padding: "20px 0px", backgroundColor: "#f6f6f6" }}>Our Members</h2>
      {
        members && members.length > 0 ?
          <Container>
            <Row xs={1} sm={2} md={5} className='g-4'>
              {
                members.map((member) => {
                  return <Member member={member} />
                })
              }
            </Row>
            <div className='d-flex justify-content-center my-5'>
              <PaginationComponent></PaginationComponent>
            </div>
          </Container> : <Loader />
      }
    </div>
  )
}

export default WithLayout(MembersScreen)