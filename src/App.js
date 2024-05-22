import './App.css';

import Comment from './Components1/HomePage/Section4/comment';
import Operation from './Components1/HomePage/Section2/operation';
import Section1 from './Components1/HomePage/Section1/section1';

import CardComp from './Components1/HomePage/Section3/cardComp';
import Card from './Components1/HomePage/Section3/card';


import "./styles.scss";
import ExploreComp from './Components1/Job Seeker/Explore/exploreComp';
import ExploreCategories from './Components1/Job Seeker/Explore/exploreCat';
import SponComp from './Components1/HomePage/Section5/section5';
import Section6 from './Components1/HomePage/Section6/section6';
import { Container,Row,Col } from 'react-bootstrap';
import Section1CompAd from './Components1/Admin/Section1Ad/section1CompAd';
import Section1Ad from './Components1/Admin/Section1Ad/section1Ad';
import Section4Ad from './Components1/Admin/Section4Ad/section4Ad';
import Section2AdComp from './Components1/Admin/Section2Ad/section2AdComp';
import Section2Ad from './Components1/Admin/Section2Ad/section2Ad';
import WithHeaderExample from './Components1/Job Seeker/JobInfo/card1comp';
import WithHeaderExample2 from './Components1/Job Seeker/JobInfo/card1';
import WithHeaderExample3 from './Components1/Job Seeker/JobInfo/card3';
import Card3 from './Components1/Job Seeker/JobInfo/card3';
import JobInfo from './Components1/Job Seeker/JobInfo/jobInfo';
import CardCompanyComp from './Components1/Company/card1';
import Example from './Components1/Admin/Section1Ad/sapmpleSec1Ad';
import TextControlsExample from './Sample/sam2';
import BasicExample from './Sample/sam1';
import TypesExample from './Sample/sam4';
import ExampleModal from './Sample/sam3';
import Navbar from './ReduxExample/navbar';
import AddTask from './ReduxExample/addTask';
import TasksList from './ReduxExample/TasksList';
import ConRprtComp from './Components1/Job Seeker/conRprt/conRprtComp';
import ContactUs from './Components1/Job Seeker/conRprt/contactUs';
import NameValidation from './Components1/Job Seeker/conRprt/regForm';
import ReportUs from './Components1/Job Seeker/conRprt/reportUs';
import RegistrationForm from './Components1/Job Seeker/conRprt/regForm';
import Registration from './Components1/Job Seeker/conRprt/regForm';
import LoginForm from './Components1/Job Seeker/conRprt/sampleForm';
import HomePage from './Components1/HomePage/homePage';


import SiteMap from './Components1/Job Seeker/SiteMap/SiteMap';
import { Routes,Route } from 'react-router-dom';
import ViewAllJobs from './Components1/Job Seeker/JobsDesc/viewAllJobs';
import SearchJobs from './Components1/Job Seeker/SearchJobs/srchJobs';
import ViewAllCompanies from './Components1/Job Seeker/Explore/viewAllCompanies';
import Header from './Components1/Layout/Header';
import Footer from './Components1/Layout/Footer';
import SearchJobCategories from './Components1/Job Seeker/Search Jobs by Category/srchjobcat';
import ExploreCollections from './Components1/Job Seeker/Explore/exploreCol';
import Announcements from './Components1/Job Seeker/Announcements/announcements';

import ResumeBuilderForm from './Components1/Job Seeker/ResumeBuilder/resumebuilder';

import PerformanceAnalysis from './Components1/Job Seeker/ResumeBuilder/sampleResumeForm';
import BasicExampleSampl from './Components1/Admin/HeaderAdmin/HeaderAd';
import CustomNavbar from './Components1/Admin/HeaderAdmin/HeaderAd';
import ForgotPassword from './Components1/Job Seeker/conRprt/forgotPass';
import ProfilePage from './Components1/Job Seeker/conRprt/profileJs';
import SavedJobs from './Components1/Job Seeker/JobsDesc/savedJobs';
import Track from './Components1/Job Seeker/JobsDesc/track';
import EditableTable from './Components1/Job Seeker/conRprt/editResume';
import FooterAdmin from './Components1/Admin/HeaderAdmin/FooterAd';
import AdminHome from './Components1/Admin/Section1Ad/adminHome';
import PlanDetails from './Components1/Employer/planDetails';
import LoginPage from './Components1/Job Seeker/Login/loginPage';
import RegisterPage from './Components1/Job Seeker/Login/RegisterPage';

import CardEmpComp from './Components1/Employer/cardsEmpComp';
import CardEmp from './Components1/Employer/cardsEmp';
import EmployerLandingPage from './Components1/Employer/empLand';
import HeaderEmp from './Components1/Employer/headerExp';
import SearchCand from './Components1/Employer/Search Candidates/srchCand';
import SearchCandCategories from './Components1/Employer/Search Cand Cat/srchCandCat';
import TrackApplications from './Components1/Employer/Track App/trackApplications';
import ProfilePageEmp from './Components1/Employer/ProfileEmp/profileEmp';
import ManagePosts from './Components1/Employer/Manage Contents/managePosts';
import SubscriptionDetails from './Components1/Employer/Subscription/subscriptionDetails';
import WorkQuakeComponent from './Components1/Employer/Track App/trackTable';
import AboutCompanyForm from './Components1/Employer/Employer Form/abtCompany';
import PostJobForm from './Components1/Employer/Employer Form/postJob';
import MiscComp from './Components1/Employer/Misc/MiscComp';
import EmployerTerms from './Components1/Employer/Misc/EmpTnD';
import JobSeekerTerms from './Components1/Employer/Misc/JobSeekerTerms';
import Copyright from './Components1/Employer/Misc/Copyright';
import PrivacyPolicy from './Components1/Employer/Misc/Privacy';
import CommGuide from './Components1/Employer/Misc/Community';
import CandInfo from './Components1/Employer/Cand Info/candRsm';
import EditCandInfo from './Components1/Employer/Cand Info/editCandRsm';
import FAQPage from './Components1/Job Seeker/FAQ/FaqPage';
import FooterEmp from './Components1/Employer/footerEmp';
import ManageApplicants from './Components1/DataTable/manageApplicants';
import ExploreCategoriesCand from './Components1/Employer/Explore Cand/expCatCand';
import ExploreCollectionsCand from './Components1/Employer/Explore Cand/expColCand';
import ViewAllCandidates from './Components1/Employer/Explore Cand/viewAllCand';
import CommonLandingPage from './Components1/Common/Common Homepage/commonLand';
import CommonLogin from './Components1/Common/Common Login/commonLogIn';
import CommonLoginComp from './Components1/Common/Common Login/commonLogInComp';
import CommonHeader from './Components1/Common/Common Layout/CommonHeader';
import EmpLoginPage from './Components1/Employer/Employer Login/empLogin';
import EmpRegistration from './Components1/Employer/Employer Login/empRegisterPage';
import CommonFooter from './Components1/Common/Common Layout/CommonFooter';


import TrendingJobs from './Components1/Job Seeker/Trending Jobs/trendingJobs';
import SponsoredCompany from './Components1/Job Seeker/SponsoredCompanies/sponsoredCompany';
import CommunityGuidelines from './Components1/Notes/Community Guidelines/CommunityGuidelines';
import CopyRightNote from './Components1/Notes/CopyRight/copyRightNote';
import EmpTerms from './Components1/Notes/EmpTerms/EmpTerms';
import JSTerms from './Components1/Notes/JSTerms/JSTerms';
import PrivacyPolicies from './Components1/Notes/PrivacyPolicy/privacyPolicies';
import CommonHomePage from './Components1/Common/Common Homepage/commonHomePage';
import CommonPage from './Components1/Common/Common Page/commonPage';
import AdminLoginForm from './Components1/Admin/AdminLogin/AdminLogin';
import EmpAnnouncements from './Components1/Employer/Employer Announcement/employerAnnouncement';
import CandInfoPDF from './Components1/Employer/Cand Info/downloadResume';
import ResponseTable from './Components1/Employer/Track App/reponseTable';
import CommentSection from './Components1/HomePage/Section4/commentSection';
import ReportSection from './Components1/Job Seeker/conRprt/reportForm';
import ReportCard from './Components1/Admin/Section4Ad/reportAdmin';
import ContactSection from './Components1/Job Seeker/conRprt/contactForm';
import ContactCard from './Components1/Admin/Section3Ad/contactAdmin';
import CandInformation from './Components1/Employer/Cand Info/candInformation';
import ContactEmp from './Components1/Employer/contactEmp';
import ReportEmp from './Components1/Employer/reportEmp';
import ForgotJS from './Components1/Job Seeker/Login/forgotJS';
import ReportJS from './Components1/Job Seeker/JS Forms/reportJS';
import ContactJS from './Components1/Job Seeker/JS Forms/contactJS';
import CommonCopyRight from './Components1/Common/Common Notes/commonCopyRight';
import CommonCmntyGuide from './Components1/Common/Common Notes/commonCmntyGuide';
import CommonEmpTerms from './Components1/Common/Common Notes/commonEmpTerms';
import CommonJSTerms from './Components1/Common/Common Notes/commonJSTerms';
import CommonPrivacy from './Components1/Common/Common Notes/commonPrivacy';
import CommonComment from './Components1/Common/Common Notes/commonComment';
import CommentJs from './Components1/Job Seeker/conRprt/commentJs';
import CommentEmp from './Components1/Employer/commentEmp';
import CommunityGuidelinesEmp from './Components1/Employer/Emp Notes/Notes/Community Guidelines/CommunityGuidelines';
import PrivacyPoliciesEmp from './Components1/Employer/Emp Notes/Notes/PrivacyPolicy/privacyPolicies';
import CopyRightNoteEmp from './Components1/Employer/Emp Notes/Notes/CopyRight/copyRightNote';
import EmpTermsEmp from './Components1/Employer/Emp Notes/Notes/EmpTerms/EmpTerms';
import JSTermsEmp from './Components1/Employer/Emp Notes/Notes/JSTerms/JSTerms';
import EmployerFAQ from './Components1/Employer/employerFAQ';
import SitemapEmp from './Components1/Employer/sitemapEmp';
import JobListings from './Components1/Admin/jobListings';



function App() {
  
  return (
    
   

<div>
<Routes>
  <Route path="/" element={<CommonPage/>}/>
  <Route path="/logins" element={<CommonLogin/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/employerlogin" element={<EmpLoginPage/>}/>
  <Route path="/employer-register" element={<EmpRegistration/>}/>


           <Route path="/jobseeker-home" element={<HomePage/>}/>
           <Route path="/comment" element={<Comment/>}/>
           <Route path="/viewjobs" element={<ViewAllJobs/>}/>
           <Route path="/companydetails/:id" element={<CardCompanyComp/>}/>
           <Route path="/findjob" element={<SearchJobs/>}/>
           <Route path="/resumebuilder" element={<ResumeBuilderForm/>}/>
           <Route path="/contactus-jobseeker" element={<ContactJS/>}/>
          
           <Route path="/viewallcompanies" element={<ViewAllCompanies/>}/>
           <Route path="/searchjobsbycategory" element={<SearchJobCategories/>}/>
           <Route path="/explorecategories" element={<ExploreCategories/>}/>
           <Route path="/explorecollections" element={<ExploreCollections/>}/>
           <Route path="/announcements" element={<Announcements/>}/>
           <Route path="/login" element={<LoginPage/>}/>
           <Route path="/jobinfo/:id" element={<JobInfo/>}/>
           <Route path="/register" element={<RegisterPage/>}/>
           <Route path="/forgotpassword" element={<ForgotJS/>}/>
           <Route path="/profilejs" element={<ProfilePage/>}/>
           <Route path="/reportcontent-jobseeker" element={<ReportJS/>}/>
           <Route path="/savedjobs" element={<SavedJobs/>}/>
           <Route path="/track" element={<Track/>}/>
           <Route path="/candinfo" element={<CandInfo/>}/>
           <Route path="/trendingjobs" element={<TrendingJobs/>}/>
           <Route path="/sponsoredcompanies" element={<SponsoredCompany/>}/>
           <Route path="/communityguidelines" element={<CommunityGuidelines/>}/>
           <Route path="/copyright" element={<CopyRightNote/>}/>
           <Route path="/employerterms" element={<EmpTerms/>}/>
           <Route path="/jobseekerterms" element={<JSTerms/>}/>
           <Route path="/privacypolicy" element={<PrivacyPolicies/>}/>
           <Route path="/faqpage" element={<FAQPage/>}/>
           <Route path="/sitemap" element={<SiteMap/>}/>
           <Route path="/sitemap-employer" element={<SitemapEmp/>}/>
           <Route path="/faqpage-employer" element={<EmployerFAQ/>}/>
        
 
 <Route path="/employer-home" element={<EmployerLandingPage/>}/>
 <Route path="/announcements-employer" element={<EmpAnnouncements/>}/>
 <Route path="/findcandidates" element={<SearchCand/>}/>
 <Route path="/searchbycategories" element={<SearchCandCategories/>}/>
 <Route path="/trackapplications" element={<TrackApplications/>}/>
 <Route path="/joblistings/:id" element={<JobListings/>}/>

 <Route path="/companydetails" element={<CardCompanyComp/>}/>
      <Route path="/explorecollections-employer" element={<ExploreCollectionsCand/>}/>
      <Route path="/profile-employer" element={<ProfilePageEmp/>}/>
      <Route path="/manageposts" element={<ManagePosts/>}/>
      <Route path="/subscriptiondetails" element={<SubscriptionDetails/>}/>
      <Route path="/postjob" element={<PostJobForm/>}/>
      <Route path="/aboutcompany" element={<AboutCompanyForm/>}/>
      <Route path="/contactus-employer" element={<ContactEmp/>}/> 
      <Route path="/announcements" element={<Announcements/>}/>
      <Route path="/trackcandidates" element={<ManageApplicants/>}/> 
      <Route path="/candinfo" element={<CandInfo/>}/> 
      <Route path="/explorecategories-employer" element={<ExploreCategoriesCand/>}/> 
      <Route path="/viewallcandidates" element={<ViewAllCandidates/>}/> 
      <Route path="/privacypolicy-employers" element={<PrivacyPoliciesEmp/>}/> 
      <Route path="/empterms-employers" element={<EmpTermsEmp/>}/> 
      <Route path="/jsterms-employers" element={<JSTermsEmp/>}/> 
      <Route path="/copyright-employers" element={<CopyRightNoteEmp/>}/> 
      <Route path="/community-guide-employers" element={<CommunityGuidelinesEmp/>}/> 
      <Route path="/admin-login" element={<AdminLoginForm/>}/> 
      <Route path="/admin-home" element={<AdminHome/>}/>
      <Route path="/joblistings-admin" element={<Section1Ad/>}/>
      <Route path="/announcement-admin" element={<Section2Ad/>}/>
      <Route path="/contactsection-admin" element={<ContactCard/>}/>
      <Route path="/reportsection-admin" element={<ReportCard/>}/>
      <Route path="/performanalysis" element={<PerformanceAnalysis/>}/>
      <Route path="/download-resume" element={<CandInfoPDF/>}/>
      <Route path="/responsetable/:id" element={<ResponseTable/>}/>
      <Route path="/commentsection-jobseeker" element={<CommentJs/>}/>
      <Route path="/commentsection-employer" element={<CommentEmp/>}/>
      <Route path="/commentsection-common" element={<CommonComment/>}/>
      <Route path="/reportsection-employer" element={<ReportEmp/>}/>
      <Route path="/candidateinformation/:id" element={<CandInformation/>}/>

      <Route path="/copyright-common" element={<CommonCopyRight/>}/>
      <Route path="/communityguide-common" element={<CommonCmntyGuide/>}/>
      <Route path="/employerterms-common" element={<CommonEmpTerms/>}/>
      <Route path="/jobeekerterms-common" element={<CommonJSTerms/>}/>
      <Route path="/privacypolicy-common" element={<CommonPrivacy/>}/>
 </Routes>
</div> 

  );
}

export default App;
