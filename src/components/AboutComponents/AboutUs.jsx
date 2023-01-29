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
        <div className='d-flex justify-content-between'>
          <div className='text-center py-5 pe-5'>
            <img src={IDSRG} alt="idsrg logo" style={{borderRadius:"30px"}}/>
          </div>
          <div className='w-100'>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
          </div>
        </div>
      </Container>

    </>
    //     <Container className="aboutUs">
    //       <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
    //       <div className='about_us_img'>
    //         <img src={BrandImage} alt="brand"/>
    //         </div>
    //         <div className='about_us_content'>

    //          <div className='title-div'>
    //         <Separator/>
    //         <div> <h3>Who We Are</h3></div>
    //          <Separator/>
    //          </div>       
    // <p>IIUC Data Science Research Group (IDSRG) seeks to promote research into all aspects of Data Science. Data Science is poised to become one of the most intensively researched areas within the Computer Science discipline and the research carried out by the group will be at the cutting edge of new developments in this field.</p>
    // <p>The group has a strong research profile in areas such as Big Data Processing and Data Stream Mining. In this connection, we have a strong focus on developing novel techniques for integrating large streams of data in real time to support online query processing. We have also developed novel methods for change detection in data streams and capture of recurrent patterns. Others research areas of interest include Text Mining, Machine Learning, Information Visualisation, and Simulation and Modelling. The application areas where research carried out by the group is being applied are Smart Business, eHealth, Computational Sports Science, Telecommunication, Social Network, Power and Electricity and City Planning.</p>
    // <p>The Group, although based at the Dept. of CSE has a number of research collaborators, both within Bangladesh and overseas. In addition, individual members of the group have strong connections with Industry in Bangladesh, some of which has sponsored the group’s research activities. The group seeks to attract Doctoral students who have a strong interest in researching any area of Data Science and provides financial support to these students whenever funds permit.</p>
    //         </div>
    //     </Container>
  )
}

export default AboutUs