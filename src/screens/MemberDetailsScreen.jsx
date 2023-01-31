import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfileImg from '../components/assets/profileImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Loader from '../components/CommonComponents/Loader'
import Resume from '../components/ResumeComponents/Resume'
import { Container } from 'react-bootstrap'
import WithLayout from '../Layout/WithLayout'
const MemberDetailsScreen = () => {
  const [member, setMember] = useState()
  const params = useParams()
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    try {
      const getMemberById = async () => {
        try {
          const response = await axios.get(`https://gray-awful-newt.cyclic.app/api/members/${params.username}`);

          setMember(response.data)
        } catch (error) {
        
          setErrorMessage(error.response.data)
        }
      }
      getMemberById()
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response.data)
    }
  }, [params.id])

  return (
    <>
      {
        errorMessage !== "" ?
          <Container>
            <h2>Sorry,user not found</h2>
          </Container>
          : member ?
            <>
              <Container>
                <Resume member={member} />
              </Container>
            </> : <Loader />
      }
    </>
  )
}

export default WithLayout(MemberDetailsScreen)