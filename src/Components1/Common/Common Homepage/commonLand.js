import CommonFooter from "../Common Layout/CommonFooter";
import CommonHeader from "../Common Layout/CommonHeader";
import FAQPage from "../../Job Seeker/FAQ/FaqPage";
import Comment from "../../HomePage/Section4/comment";
import SponComp from "../../HomePage/Section5/section5";
import Footer from "../../Layout/Footer";
import CommonCard from "./CommonCard";
import CommonSponComp from "./CommonCompany";
import CommonOperation from "./CommonOperation";
import CommonTopFtd from "./CommonTopFtd";
import CommonDashboard from "./commonDashboard";
import CommonJobs4U from "./commonJob4U";

function CommonLandingPage(){
    return(
        <div>
        <div style={{marginTop:'7rem'}}>
<CommonDashboard/>
<h1 className='text-center mt-5' style={{color:'#2B358C'}}>Jobs For You</h1>
<CommonJobs4U/>
<h1 className='text-center mt-5' style={{color:'#2B358C'}}>Top Featured Companies</h1>
<CommonTopFtd/>
<CommonOperation/>
<CommonCard/>
<Comment/>

<FAQPage/>

        </div>
        </div>
        

    );
}
export default CommonLandingPage;