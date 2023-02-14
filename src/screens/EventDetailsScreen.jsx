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
  const [bdTime,setBdTime]=useState("")
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


useEffect(()=>{
  if(eventDetails.date)
  {
    const date = new Date(eventDetails.date);
        const formattedDate = date.toISOString().split(".")[0];  
          const postTime = new Date(formattedDate+"+00:00");
  const bangladeshTimeZone = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka"
  });
  const bdPostTime=bangladeshTimeZone.format(postTime)
  const [month, day, year] = bdPostTime.split("/");
  const formatted = `${day}/${month}/${year}`;
  setBdTime(formatted)
  }
},[eventDetails])

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
            //maxWidth:'600px',
        }}>
          <div className='all-images' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
          
            <img width={600} height={400} src={eventDetails.image &&eventDetails.image[0] } />
        
          
          </div>
       
        <span style={{display:'block',margin:'10px 0px',color:'rgb(114 114 114)',fontSize:'16px'}}>Posted on:{bdTime}</span>
        </div>
           <h3 
            style={{
                margin:'20px 0px'
            }}
            text-align="center">
            {eventDetails.title}</h3>     
           
        <p style={{margin:'10px'}}>{eventDetails.description}</p>
        <div className='all-images' style={{display:'flex',flexWrap:'wrap'}}>
          {
            eventDetails?.image?.map((Img,index)=>{
            if(index>0)return  <img width={300} height={300} src={Img} />
            })
          }
          </div>
    </div>
    
   }
</Container>
  )
}

export default WithLayout(EventDetailsScreen)
