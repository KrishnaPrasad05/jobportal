import { Routes,Route } from 'react-router-dom';

import Announcements from "../Job Seeker/Announcements/announcements";
import CardCompanyComp from "../Company/card1";
import EditCandInfo from "../Employer/Cand Info/editCandRsm";
import CommGuide from "../Employer/Misc/Community";
import Copyright from "../Employer/Misc/Copyright";
import EmployerTerms from "../Employer/Misc/EmpTnD";
import JobSeekerTerms from "../Employer/Misc/JobSeekerTerms";
import PrivacyPolicy from "../Employer/Misc/Privacy";
import ExploreCategories from "../Explore/exploreCat";
import ExploreCollections from "../Explore/exploreCol";
import ViewAllCompanies from "../Explore/viewAllCompanies";
import FAQPage from "../Job Seeker/FAQ/FaqPage";
import Card from "../HomePage/Section3/card";
import SponComp from "../HomePage/Section5/section5";
import HomePage from "../HomePage/homePage";
import JobInfo from "../JobInfo/jobInfo";
import SavedJobs from "../JobsDesc/savedJobs";
import Track from "../JobsDesc/track";
import ViewAllJobs from "../JobsDesc/viewAllJobs";
import LoginPage from "../Login/loginPage";
import ResumeBuilderForm from "../Job Seeker/ResumeBuilder/resumebuilder";
import SearchJobCategories from "../Search Jobs by Category/srchjobcat";
import SearchJobs from "../SearchJobs/srchJobs";
import SiteMap from "../SiteMap/SiteMap";
import ContactUs from "../conRprt/contactUs";
import ForgotPassword from "../conRprt/forgotPass";
import ProfilePage from "../conRprt/profileJs";
import Registration from "../conRprt/regForm";
import ReportUs from "../conRprt/reportUs";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import RegisterPage from '../Login/RegisterPage';
import TrendingJobs from '../Trending Jobs/trendingJobs';
import SponsoredCompany from '../Job Seeker/SponsoredCompanies/sponsoredCompany';
import CommunityGuidelines from '../Notes/Community Guidelines/CommunityGuidelines';
import CopyRightNote from '../Notes/CopyRight/copyRightNote';
import EmpTerms from '../Notes/EmpTerms/EmpTerms';
import JSTerms from '../Notes/JSTerms/JSTerms';
import PrivacyPolicies from '../Notes/PrivacyPolicy/privacyPolicies';

function JobSeeker(){
    return(
<div>
     
    
         <Routes>
           <Route path="/jobseeker-home" element={<HomePage/>}/>
           <Route path="/viewjobs" element={<ViewAllJobs/>}/>
           <Route path="/companydetails/:id" element={<CardCompanyComp/>}/>
           <Route path="/findjob" element={<SearchJobs/>}/>
           <Route path="/resumebuilder" element={<ResumeBuilderForm/>}/>
           <Route path="/contactus" element={<ContactUs/>}/>
           <Route path="/viewallcompanies" element={<ViewAllCompanies/>}/>
           <Route path="/searchjobsbycategory" element={<SearchJobCategories/>}/>
           <Route path="/explorecategories" element={<ExploreCategories/>}/>
           <Route path="/explorecollections" element={<ExploreCollections/>}/>
           <Route path="/announcements" element={<Announcements/>}/>
           <Route path="/login" element={<LoginPage/>}/>
           <Route path="/jobinfo/:id" element={<JobInfo/>}/>
           <Route path="/register" element={<RegisterPage/>}/>
           <Route path="/forgotpassword" element={<ForgotPassword/>}/>
           <Route path="/profilejs" element={<ProfilePage/>}/>
           <Route path="/reportcontent" element={<ReportUs/>}/>
           <Route path="/savedjobs" element={<SavedJobs/>}/>
           <Route path="/track" element={<Track/>}/>
           <Route path="/editresume" element={<EditCandInfo/>}/>
           <Route path="/trendingjobs" element={<TrendingJobs/>}/>
           <Route path="/sponsoredcompanies" element={<SponsoredCompany/>}/>
           <Route path="/communityguidelines" element={<CommunityGuidelines/>}/>
           <Route path="/copyright" element={<CopyRightNote/>}/>
           <Route path="/employerterms" element={<EmpTerms/>}/>
           <Route path="/jobseekerterms" element={<JSTerms/>}/>
           <Route path="/privacypolicy" element={<PrivacyPolicies/>}/>
           <Route path="/faqpage" element={<FAQPage/>}/>
           <Route path="/sitemap" element={<SiteMap/>}/>
         </Routes>
     
       
        
        
         </div> 
    );
}
export default JobSeeker;