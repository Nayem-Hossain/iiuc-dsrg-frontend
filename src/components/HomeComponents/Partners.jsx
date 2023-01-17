import React from 'react'
import { Container } from 'react-bootstrap'
import Partner from '../assets/partner.png'
import Leads from '../assets/leads.png'
import Devnet from '../assets/devnet.png'
import BracIT from '../assets/bracit.png'
import Washington from '../assets/washington.png'
import Esrd from '../assets/esrd.png'
import Separator from '../CommonComponents/Separator'
const Partners = () => {
  return (
    <Container className='partners'>
      <div className='title-div'>
        <Separator />
        <div> <h3 className='text-center'>Our Partners</h3></div>
        <Separator />
      </div>
    <div className='partnersImg'>
  <div className="partner">
  <img style={{width:'200px',height:'100px'}} src={Leads} alt="partner"/>
  </div>
  <div className="partner">
  <img style={{width:'200px',height:'100px'}} src={Devnet} alt="partner"/>
  </div>
  <div className="partner">
  <img style={{width:'200px',height:'100px'}} src={BracIT} alt="partner"/>
  </div>
  <div className="partner">
  <img style={{width:'100px',height:'100px'}} src={Washington} alt="partner"/>
  </div>
  <div className="partner">
  <img style={{width:'200px',height:'100px'}} src={Esrd} alt="partner"/>
  </div>
    </div>
    </Container>
  )
}

export default Partners