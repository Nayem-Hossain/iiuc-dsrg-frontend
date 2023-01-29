import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import ProfileImg from '../assets/profileImg.jpg';
import { Link } from 'react-router-dom';
import Separator from '../CommonComponents/Separator';

const Commitee = () => {
   return (
      <>
         <h1 className='text-center fw-bold p-5'>Commitee Members</h1>
         <Container>

            {/* chief and vice chief */}

            <>

               <div className='border-2 border-bottom border-dark-subtle'>
                  <div className='row justify-content-center'>
                     <div className='commitee-member'>
                        <img src={ProfileImg} alt="" />
                        <h3>Abid Ud Takey Emou</h3>
                        <p>Chief</p>
                     </div>
                  </div>
                  <div className='row'>
                     {Array.from({ length: 2 }).map((_, idx) => (
                        <div className='col'>
                           <div className='commitee-member'>
                              <img src={ProfileImg} alt="" />
                              <h3>Robin</h3>
                              <p>Vice Chief(Student Activity)</p>
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
               <Row xs={1} md={4} className='g-4 border-2 border-bottom border-dark-subtle'>
                  {Array.from({ length: 8 }).map((_, idx) => (
                     <Col>
                        <div className='commitee-member'>
                           <img src={ProfileImg} alt="" />
                           <h3>Abu Nowhash Chowdhury</h3>
                           <p>Research &#38; Publication Coordinator</p>
                        </div>
                     </Col>
                  ))}
               </Row>
            </>

            {/* Executive Members */}
            <>
               <div className='title-div partners my-5'>
                  <Separator />
                  <div> <h3 className='text-center'>Executive Members</h3></div>
                  <Separator />
               </div>
               <Row xs={1} md={5} className='g-4 border-2 border-bottom border-dark-subtle'>
                  {Array.from({ length: 10 }).map((_, idx) => (
                     <Col>
                        <div className='commitee-member'>
                           <img src={ProfileImg} alt="" />
                           <h3>Md. Araf Bin Faiz</h3>
                           <p>Executive Member(Finance)</p>
                        </div>
                     </Col>
                  ))}
               </Row>
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
      </>
   )
}

export default Commitee