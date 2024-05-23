import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container,Image} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import face from '../../Assets/img/social/facebook.png';
import man from '../../Assets/img/man.png';
import tweet from '../../Assets/img/social/twitter.png';
import linked from '../../Assets/img/social/linkedin.png';
import insta from '../../Assets/img/social/instagram.png';
import thread from '../../Assets/img/social/threads.png';
import red from '../../Assets/img/social/reddit.png';
import office from '../../Assets/img/office.jpg';
import offlogo from '../../Assets/img/bharath.jpg';
import locImg from '../../Assets/img/index/jd/pin.png';
import degImg from '../../Assets/img/index/jd/graduation-cap.png';
import expImg from '../../Assets/img/index/jd/suitcase (1).png';
import descImg from '../../Assets/img/index/jd/google-docs.png';
import saveImg from '../../Assets/img/bookmark.png';
import viewImg from '../../Assets/img/index/jd/right-arrow (3).png';
import card1img from '../../Assets/img/office.jpg'
import share from '../../Assets/img/share.png'
import save from '../../Assets/img/save-instagram.png'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

function CardCompanyComp() {

/*   Display details of companies fetched from Json server using dispatch and slice*/
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://wry-seemly-berry.glitch.me/users/${id}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>Error: User data not found</p>;
  }

  

  const openBrowser = (event) => {
    event.preventDefault();
    
    window.open(userData.webURL, "_blank");
   
  };
    
  return (
    <section>
      <Header/>
      <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/viewallcompanies" style={{textDecoration:'none',color:'#2B358C'}}>View all companies</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Company Details</li>
                </ol>
              </nav>
 <Container style={{marginTop:'7rem'}}>
<Card className='m-2'>

<Image src={userData.Coverfile} style={{height:'300px',padding:'10px'}} rounded></Image>
<Container>
  <Row>
    <Col>
    <div style={{display:'flex'}}>
<div  style={{border:'1px solid black',borderRadius:'10px',width:'100px',height:'100px'}}>
  <Image src={userData.Compfile} style={{width:'100px',height:'100px',padding:'10px'}}></Image>
</div>
<div className='ms-3'>
  <h3 style={{color:'#2B358C',fontWeight:600}}>{userData.CompanyName}</h3>
  <p style={{color:'grey'}}>{userData.CompSlgn}</p>
</div>
</div>
    </Col>
    <Col>
          <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>Type : </span>{userData.compType}</p>
            <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>Company Size : </span> {userData.compSize}</p>
            <p style={{color: 'rgb(34, 34, 236)',fontWeight: '600'}}><span style={{fontWeight: '700',color: 'black',textDecoration: 'none'}}>Website : </span><a href='{userData.webURL}' onClick={openBrowser}>{userData.webURL}</a></p>
          </Col>
          <Col>
          <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>Founded : </span>{userData.found}</p>
            <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>HeadQuarters : </span>{userData.head}</p>
          </Col>
          <Col>
          <p style={{fontWeight: 700,color: 'black'}}>Get Connected : </p>
            <div class="image">
                
                        <Image class="" src={face} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={linked} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={insta} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={thread} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={red} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={tweet} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
               </div>
          </Col>
  </Row>
</Container>


      <Card.Body >
      <Card.Header style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#E6E7FF',margin:'15px 0px',fontSize:'1.5rem',color:'#2B358C',fontWeight:600}}>
   
About Us
      </Card.Header>
      <Container >
      <Row >
            <Col>
            <Card.Img variant="top" className='img-fluid' src={card1img} style={{width:'550px',height:'200px',marginRight:'5px'}} />
            </Col>
            <Col>
            <Card.Text>{userData.abtCompany}</Card.Text>
            </Col>
        </Row>
      </Container>
        
        <Card.Header style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#E6E7FF',margin:'15px 0px',fontSize:'1.5rem',color:'#2B358C',fontWeight:600}}>
   
Mission
      </Card.Header>
      <Container >
      <Row >
            <Col>
            <Card.Img variant="top" className='img-fluid' src={card1img} style={{width:'550px',height:'200px',marginRight:'5px'}} />
            </Col>
            <Col>
            <Card.Text>{userData.mission}</Card.Text>
            </Col>
        </Row>
      </Container>
      <Card.Header style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#E6E7FF',margin:'15px 0px',fontSize:'1.5rem',color:'#2B358C',fontWeight:600}}>
   
   Vision
         </Card.Header>
      <Container>
      <Row >
            <Col>
            <Card.Img variant="top" className='img-fluid' src={card1img} style={{width:'550px',height:'200px',marginRight:'5px'}} />
            </Col>
            <Col>
            <Card.Text>{userData.vision}</Card.Text>
            </Col>
        </Row>
      </Container>
        
      
        </Card.Body>
        </Card>
    </Container>
<Container>
<Card className='m-2'>
      <Card.Header style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#E6E7FF',fontSize:'1.5rem',color:'#2B358C',fontWeight:600}}>Organization Leaders</Card.Header>
      <Card.Body>
       <Container>
        <Row>
          <Col>
          <Card style={{ textDecoration:'none',width: '15rem',display:'flex',alignItems:'center',justifyContent:'center' }}>
       
       <Card.Img variant="top" src={userData.ProfFile} style={{width:'100px',height:'70px',paddingTop:'5px',borderRadius:'10px'}} />
       
      
      <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Card.Title style={{marginTop:'-10px'}}>{userData.LeadName}</Card.Title>
        <Card.Text style={{color:'grey'}}>
        {userData.LeadRole}
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ textDecoration:'none',width: '15rem',display:'flex',alignItems:'center',justifyContent:'center' }}>
       
       <Card.Img variant="top" src={man} style={{width:'70px',height:'70px',paddingTop:'5px'}} />
       
      
      <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Card.Title style={{marginTop:'-10px'}}>{userData.LeadName}</Card.Title>
        <Card.Text style={{color:'grey'}}>
        {userData.LeadRole}
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ textDecoration:'none',width: '15rem',display:'flex',alignItems:'center',justifyContent:'center' }}>
       
       <Card.Img variant="top" src={man} style={{width:'70px',height:'70px',paddingTop:'5px'}} />
       
      
      <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Card.Title style={{marginTop:'-10px'}}>{userData.LeadName}</Card.Title>
        <Card.Text style={{color:'grey'}}>
        {userData.LeadRole}
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
        </Row>
       </Container>
      </Card.Body>
    </Card>
</Container>



{/* <Container>
<Card className='m-2'>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
       <Container>
        <Row>
          <Col>
          <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>Type : </span>{userData.compType}</p>
            <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>Company Size : </span> {userData.compSize}</p>
            <p style={{color: 'rgb(34, 34, 236)',fontWeight: '600'}}><span style={{fontWeight: '700',color: 'black',textDecoration: 'none'}}>Website : </span>{userData.webURL}</p>
          </Col>
          <Col>
          <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>Founded : </span>{userData.found}</p>
            <p style={{color: 'grey'}}><span style={{fontWeight: 700,color: 'black'}}>HeadQuarters : </span>{userData.head}</p>
          </Col>
          <Col>
          <p style={{fontWeight: 700,color: 'black'}}>Get Connected : </p>
            <div class="image">
                
                        <Image class="" src={face} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={linked} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={insta} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={thread} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={red} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
                        <Image class="" src={tweet} alt="" style={{width: '30px',height: '30px',marginRight:'3px'}}></Image>
               </div>
          </Col>
        </Row>
       </Container>
      </Card.Body>
    </Card>
</Container> */}
   <Footer/>
    </section>
   
    
  );
}

export default CardCompanyComp;