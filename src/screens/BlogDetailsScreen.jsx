import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import WithLayout from '../Layout/WithLayout'
import Loader from '../components/CommonComponents/Loader'
import axios from 'axios'
import { Container } from 'react-bootstrap'
const BlogDetailsScreen = () => {
    const [blogDetails, setblogDetails] = useState({})
  const params = useParams()
  const [errorMessage, setErrorMessage] = useState("")
  const [loading,setLoading]=useState(false)
  const [bdTime,setBdTime]=useState("")
  useEffect(() => {
    try {
      const getBlogById = async () => {
        try {
            setLoading(true)
          const response = await axios.get(`https://gray-awful-newt.cyclic.app/api/blogs/${params.bid}`);

          setblogDetails(response.data)
          setLoading(false)
        } catch (error) {
        
          setErrorMessage(error.response.data)
          setLoading(true)
        }
      }
      getBlogById()
    } catch (error) {
      console.log(error)
      setErrorMessage(error.response.data)
    }
  }, [params.bid])


  useEffect(()=>{
    if(blogDetails.date)
    {
      const postTime = new Date(blogDetails.date+"+00:00");
    const bangladeshTimeZone = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka"
    });
    
    setBdTime(bangladeshTimeZone.format(postTime))
    }
  },[blogDetails])

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
       
        <img src={blogDetails.image} />
        <span style={{display:'block',margin:'10px 0px',color:'rgb(114 114 114)',fontSize:'16px'}}>Posted on:{bdTime}</span>
        <p style={{display:'block',margin:'10px 0px',color:'rgb(114 114 114)',fontSize:'16px'}}>Written by:{blogDetails.username}</p>
        </div>
           <h3 
            style={{
                margin:'20px 0px'
            }}
            text-align="center">
            {blogDetails.title}</h3>     
           
        <p>{blogDetails.description}</p>
 
    </div>
    
   }
</Container>
  )
}

export default WithLayout(BlogDetailsScreen)
