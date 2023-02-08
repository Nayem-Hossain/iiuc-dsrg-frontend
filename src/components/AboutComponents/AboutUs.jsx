import React from 'react'
import Separator from '../CommonComponents/Separator'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import Container from 'react-bootstrap/Container';
import IDSRG from '../assets/IDSRG.jpg';
const AboutUs = () => {
  return (
    <>
      <div className='title-div partners mb-5'>
        <Separator />
        <div> <h3 className='text-center'>About Us</h3></div>
        <Separator />
      </div>

      <Container>
        <div className='frequently-asked-questions'>
          <div>
            <img src={IDSRG} alt="idsrg logo" style={{borderRadius:"30px"}}/>
          </div>
          <div className='w-100'>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
          </div>
        </div>
      </Container>

    </>
  )
}

export default AboutUs