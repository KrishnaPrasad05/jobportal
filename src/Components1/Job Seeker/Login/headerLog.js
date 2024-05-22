import { Image } from "react-bootstrap";
import logo from '../../../Assets/img/joblogo.png';
function LoginLogo(){
    return(
<div>
    <div style={{display:"flex",alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
    <Image src={logo} alt="" width="50px" height="50px" style={{ borderRadius: '50px' ,marginRight:'10px'}} />
    <h1 style={{color:'#2B358C',fontWeight:700}}>WorkQuake</h1>
    </div>
    
</div>
    );
}
export default LoginLogo;