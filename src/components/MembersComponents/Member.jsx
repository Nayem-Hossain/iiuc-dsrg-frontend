import React from 'react'
import { Col } from 'react-bootstrap'
import ProfileImg from '../assets/profileImg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Member = ({ member }) => {
  const { _id, username } = member

  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className='member'>
          <div>
            <img src={member.profileImg || ProfileImg} alt={member.username} />
            <h5><Link to={`/me/${username}`}>{member.name}</Link></h5>
          </div>
          <button onClick={() => navigate(`/me/${username}`)} className="btn btn-outline-dark border border-1 border-dark rounded-pill" style={{ margin: "5px 0px" }}>View Profile</button>
        </div>
      </div>
    </>
    // <Container className="member-container">
    //   <div className="member">
    //     <div className="member_left" style={{
    //       display: "flex",
    //       columnGap: "20px",
    //       alignItems: "center"
    //     }}>
    //       <img src={member.profileImg || ProfileImg} alt="" />
    //       <div className='memberInfo'>
    //         <Link to={`/me/${username}`}>{member.name}</Link>
    //         <p><span><FontAwesomeIcon icon={faEnvelope} /></span>{member.email}</p>
    //         <p><span><FontAwesomeIcon icon={faPhone} /></span>{member.phone}</p>
    //         <button onClick={() => navigate(`/me/${username}`)} type="button" className="btn btn-info" style={{ margin: "5px 0px" }}>View Profile</button>
    //       </div>
    //     </div>
    //     <div className="member-interest">
    //       <p>Field of Interest</p>
    //       <p>{member.field_of_interest}</p>
    //     </div>
    //   </div>
    // </Container>
  )
}

export default Member
