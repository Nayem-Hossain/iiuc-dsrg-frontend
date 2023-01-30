import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import ProfileImg from '../assets/profileImg.jpg';
import { Link } from 'react-router-dom';
import Separator from '../CommonComponents/Separator';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import Loader from '../CommonComponents/Loader';
const Commitee = () => {
   const [committee, setCommittee] = useState([])
   const [members, setMembers] = useState([])
   const [selectedSession, setSelectedSession] = useState("2022-2023")

   useEffect(() => {
      try {
         const getCommitteeMembers = async () => {
            const response = await axios.get('https://gray-awful-newt.cyclic.app/api/committee');
            const data = response.data.filter((d) => d.session === selectedSession)
            setCommittee(data)
         }
         getCommitteeMembers()
      } catch (error) {
         console.log(error)
      }
   }, [])
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
   }, [committee])
   const chief = committee.find((m) => m.designation.toLowerCase() === 'chief' && m.section === 'chief_and_vice-chief')
   console.log("chief");
   console.log(chief)
   const Vice_chiefs = committee.filter((m) => m.designation.toLowerCase() !== 'chief' && m.section === 'chief_and_vice-chief')
   console.log("vice")
   console.log(Vice_chiefs)
   const Coordinators_and_leads = committee.filter((m) => m.section === 'coordinator_and_team-leader')
   console.log("cor");
   console.log(Coordinators_and_leads)
   const Executives = committee.filter((m) => m.section === 'executive_member')
   console.log("exe");
   console.log(Executives)

   console.log("members");
   console.log(members)

   const image_of_chief = members.find(m => m.username === chief.username)?.profileImg
   const vice_chief_img = Vice_chiefs.map((d) => {
      return members.find(m => m.username === d.username)?.profileImg
   })
   const coord_leads_img = Coordinators_and_leads.map((d) => {
      return members.find(m => m.username === d.username)?.profileImg
   })

   const executives_img = Executives.map((d) => {
      return members.find(m => m.username === d.username)?.profileImg
   })

   console.log("img")
   console.log(vice_chief_img)
   console.log(coord_leads_img)
   console.log(executives_img)
   return (

      committee && committee.length > 0 && members && members.length > 0 ?
         <>
            <h1 className='text-center fw-bold p-5'>Commitee Members</h1>
            <Container>

               {/* chief and vice chief */}

               <>

                  <div className='border-2 border-bottom border-dark-subtle'>
                     <div className='row justify-content-center'>
                        <div className='commitee-member'>
                           <img src={image_of_chief || ProfileImg} alt="" />
                           <Link to={`/me/${chief.username}`}><h3>{chief.name}</h3></Link>
                           <p>{chief.designation}</p>
                        </div>
                     </div>
                     <div className='media-chief-vicechief'>
                        {Vice_chiefs.map((vc, idx) => (
                           <div>
                              <div className='commitee-member'>
                                 <img src={vice_chief_img[idx] || ProfileImg} alt="" />
                                 <Link to={`/me/${vc.username}`}><h3>{vc.name}</h3></Link>
                                 <p>{vc.designation}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </>

               {/* Coordinator and Team Leaders  */}

               <>
                  <div className='title-div partners my-5'>
                     <Separator />
                     <div> <h3 className='text-center'>Coordinator & Team Leaders</h3></div>
                     <Separator />
                  </div>
                  {/*Row xs={1} sm={3} md={4}  */}
                  <div className='media-cordinator-lead border-2 border-bottom'>
                     {Coordinators_and_leads.map((d, idx) => (
                        <>
                           <div className='commitee-member'>
                              <img src={coord_leads_img[idx] || ProfileImg} alt="" />
                              <Link to={`/me/${d.username}`}><h3>{d.name}</h3></Link>
                              <p>{d.designation}</p>
                           </div>
                        </>
                     ))}
                  </div>
               </>

               {/* Executive Members */}
               <>
                  <div className='title-div partners my-5'>
                     <Separator />
                     <div> <h3 className='text-center'>Executive Members</h3></div>
                     <Separator />
                  </div>
                  <div className='media-executive-member border-2 border-bottom'>
                     {Executives.map((d, idx) => (
                        <>
                           <div className='commitee-member'>
                              <img src={executives_img[idx] || ProfileImg} alt="" />
                              <Link to={`/me/${d.username}`}><h3>{d.name}</h3></Link>
                              <p>{d.designation}</p>
                           </div>
                        </>
                     ))}
                  </div>
               </>
               <div className='d-flex justify-content-center my-5'>
                  <Pagination className='p-2'>
                     <Pagination.First>{"First"}</Pagination.First >
                     <Pagination.Prev />
                     <Pagination.Item active>{`2022-2023`}</Pagination.Item>
                     <Pagination.Item>{`2022-2023`}</Pagination.Item>
                     <Pagination.Item>{`2022-2023`}</Pagination.Item>
                     <Pagination.Ellipsis />
                     <Pagination.Item disabled>{`2022-2023`}</Pagination.Item>
                     <Pagination.Next />
                     <Pagination.Last>{"Last"}</Pagination.Last >
                  </Pagination>
               </div>
               {/* <div className='commitee-members'>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Abid Ud Takey Emou</h3>
           <p>Chief</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Ekramul Haque Tusher</h3>
           <p>Vice Chief(Student Activity)</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Nazrana Mehjabin</h3>
           <p>Vice Chief(Management)</p>
        </div>
        
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Abu Nowhash Chowdhury</h3>
           <p>Research &#38; Publication Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Sultan Mahmud Nahian</h3>
           <p>HCI Research Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Abdur Rahman Robin</h3>
           <p>Administration &#38; Finance Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Shahin Sha Hossain</h3>
           <p>Creative Designer(Lead)</p>
        </div>
        <div className='commitee-member'>
           <img src="	https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673965496/1673965494775.jpg" alt="" />
           <Link to="/me/samiulshuvo"><h3>Samiul Azam Shuvo</h3></Link>
           <p>Creative Designer</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Shahe Md Ikramul Haque Sajib</h3>
           <p>Creative Designer</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Raiwatul Labib</h3>
           <p>Membership &#38; Publicity Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673892478/1673892476230.jpg" alt="" />
          <Link to="/me/mahbubulhasan"><h3>Mahbubul Hasan</h3></Link>
           <p>Webmaster(Lead)</p>
        </div>
        <div className='commitee-member'>
           <img src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673963220/1673963219325.jpg" alt="" />
           <Link to="/me/nayemhossain"><h3>Md. Nayem Hossain</h3></Link>
           <p>Webmaster</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Erfanul Taher</h3>
           <p>Webmaster</p>
        </div>
        
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Md. Sharia Habib Ula</h3>
           <p>Event Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673889949/1673889947450.jpg" alt="" />
           <Link to="/me/moozaheed"><h3>G. M. Mozahed</h3></Link>
           <p>Event Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Riadul Islam Rabbi</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673966004/1673966002396.jpg" alt="" />
           <Link to="/me/imranulkhair"><h3>Imranul Khair</h3></Link>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Md. Araf Bin Faiz</h3>
           <p>Executive Member(Finance)</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Alian Sajib</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Sagar Mazumder</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Sidratul Moontaha</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Sheikh Md. Hasibul Hasan</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Nazmus Sakib Turhan</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Fariha Tasnim</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Anannya Chowdhury</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673964700/1673964698952.jpg" alt="" />
           <Link to="/me/mdsorowarmahabub"><h3>Md. Sorowar Mahabub Rabby</h3></Link>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Faysal Nur Ontor Shikder</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>S. M Anim</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Afrina Noor</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Afroza Sultana</h3>
           <p>Executive Member</p>
        </div>
        </div> */}
            </Container>
         </> : <Loader />


   )

}

export default Commitee