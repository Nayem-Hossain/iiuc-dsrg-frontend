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

  const [currentPage,setCurrentPage]=useState(1)
    const [membersPerPage]=useState(10)
    

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

  
    
    const indexOfLastMember=currentPage*membersPerPage
    const indexOfFirstMember=indexOfLastMember-membersPerPage
    const curMembers=members.slice(indexOfFirstMember,indexOfLastMember)
    console.log(curMembers)
    const changePageNumber=(num)=>{
        setCurrentPage(num);
    }

  return (
    <div className='members-screen'>
      <ScrollToTop />
      <h2 className='text-center' style={{ padding: "20px 0px", backgroundColor: "#f6f6f6" }}>Our Members</h2>
      {
        members && members.length > 0 ?
          <Container>
            {/* Row xs={1} sm={2} md={5} className='g-4' */}
            <div  className='media-general-member'>
              {
                curMembers.map((member) => {
                  return <Member member={member} />
                })
              }
            </div>
            <div className='d-flex justify-content-center my-5'>
             {/* <PaginationComponent></PaginationComponent> */}
             {(members.length>0) && <PaginationComponent membersPerPage={membersPerPage} changePageNumber={changePageNumber}
              totalMembers={members.length} currentPage={currentPage}/>}
            </div>
          </Container> : <Loader />
      }
    </div>
  )
}

export default WithLayout(MembersScreen)