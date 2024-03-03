import "./App.css";
import Navbar from "./components/items/header/Navbar";
import Home from "./components/items/home/Home";
import Home2 from "./components/items/home/Home2";
import ServiceGrid from "./components/items/services/ServiceGrid";
import ServiceItem from "./components/items/services/ServiceItem";
import TeacherCaraosel from "./components/items/teachers/TeacherCaraosel";
import TeacherCard from "./components/items/teachers/TeacherCard";
import Footer from "./components/items/footer/Footer";
import MyModal from "./components/modal/MyModal";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'

import { Button } from "react-scroll";
import School from "./components/items/school/School";
import Notice from "./components/items/notice/notice";
import School2 from "./components/items/school/School2";
import NoticeTable from "./components/items/notice/NoticeTable";
import StudentRecords from "./components/items/students/StudentRecords";


import Aos from "aos";
import ImageGalary from "./components/items/galary/ImageGalary";

function App() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(()=>{
    Aos.init();
    
    console.log("auth", authService.account);
    // const user = authService.createAccount({email:'hndas15@gmail.com', password:'123456789', name:'Ayantika das'})
    // console.log('new user:', user)
    // authService.getCurrentUser()
    //   .then((userData) =>{
    //     if(userData){
    //       dispatch(login({userData}))
    //     }else{
    //       dispatch(logout())
    //     }
    //   })
    //   .finally(()=> setLoading(false))

  },[])


  return (
    <>
    <div className="container mx-auto">
      <Navbar />

      <main>
        <div id="home">  
        {/* <Home />         */}
          <Home2 />
        </div>

        <div id="school">
          <School2 />          
        </div>

        <div id="notice">
          <NoticeTable />
        </div>
        
        <div id="service">
          <ServiceGrid />
        </div>
        
        <div id="teachers">
          <TeacherCaraosel />
        </div>
        <div id="srecords">
          <StudentRecords />
        </div>

        <div id="comments">
          <Notice />
        </div>

        <div id="gallary" className="w-full">
          <ImageGalary />
        </div>
        
        <div if="footer">
          <Footer/>
        </div>
      </main>
      </div>
    </>
  );
}

export default App;
