import React from 'react'
import { Container } from 'react-bootstrap'
import ProfileImg from '../assets/profileImg.jpg'
import { Link } from 'react-router-dom'
const Commitee = () => {
  return (
    <>
    <h3 className='text-center' style={{padding:"20px 0px",backgroundColor:"#f6f6f6"}}>Commitee Members</h3>
    <Container>
        <div className='commitee-members'>
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
           <img src={ProfileImg} alt="" />
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
           <img src={ProfileImg} alt="" />
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
           <img src={ProfileImg} alt="" />
           <Link to="/me/moozaheed"><h3>G. M. Mozahed</h3></Link>
           <p>Event Coordinator</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
           <h3>Riadul Islam Rabbi</h3>
           <p>Executive Member</p>
        </div>
        <div className='commitee-member'>
           <img src={ProfileImg} alt="" />
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
           <img src={ProfileImg} alt="" />
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
        </div>
    </Container>
</>
  )
}

export default Commitee