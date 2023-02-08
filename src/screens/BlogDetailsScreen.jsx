import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import WithLayout from '../Layout/WithLayout'
import Loader from '../components/CommonComponents/Loader'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
      const date = new Date(blogDetails.date);
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
  },[blogDetails])

  return (
    <Container className="d-flex justify-content-center">
      {
        loading ? <Loader /> :
          <div className="mt-5" style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0px"
          }}>
            <div style={{
              maxWidth: '600px',
            }}>

              <img src={blogDetails.image} />
              <span style={{ display: 'block', margin: '10px 0px', color: 'rgb(114 114 114)', fontSize: '16px' }}>Posted on:{bdTime}</span>

            </div>
            <h2
              style={{
                margin: '20px 0px'
              }}
              text-align="center">
              {blogDetails.title}</h2>
            <h4 className='d-block mb-5' >Written by : <Link to={`/me/${blogDetails.username}`} style={{ color: "Red" }}>{blogDetails.username}&nbsp;<i class="bi bi-arrow-up-right-square"></i></Link></h4>


            <p style={{ textAlign: "justify" }}>{blogDetails.description}</p>

          </div>

      }
    </Container>
  )
}

export default WithLayout(BlogDetailsScreen)
