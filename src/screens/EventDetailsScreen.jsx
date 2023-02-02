import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import WithLayout from '../Layout/WithLayout'
import Loader from '../components/CommonComponents/Loader'
import axios from 'axios'
import { Container } from 'react-bootstrap'
const EventDetailsScreen = () => {
    const [eventDetails, setEventDetails] = useState({})
  const params = useParams()
  const [errorMessage, setErrorMessage] = useState("")
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    try {
      const getEventById = async () => {
        try {
            setLoading(true)
          const response = await axios.get(`https://gray-awful-newt.cyclic.app/api/events/${params.eid}`);

          setEventDetails(response.data)
          setLoading(false)
        } catch (error) {
        
          setErrorMessage(error.response.data)
          setLoading(true)
        }
      }
      getEventById()
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response.data)
    }
  }, [params.eid])
  return (
    <Container className="d-flex justify-content-center">
   {
    loading?<Loader/>:
    <div className="mt-5" style={{display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    padding:"20px 0px"}}>
        <div style={{
            maxWidth:'600px',
        }}>
        <img src={eventDetails.image} />
        <span style={{display:'block',margin:'10px 0px',color:'rgb(114 114 114)',fontSize:'16px'}}>Posted on:{eventDetails.date?.substring(0, 10)}</span>
        </div>
           <h3 
            style={{
                margin:'20px 0px'
            }}
            text-align="center">
            {eventDetails.title}</h3>     
           
        <p>{eventDetails.description}</p>
 
    </div>
    
   }
</Container>
  )
}

export default WithLayout(EventDetailsScreen)
