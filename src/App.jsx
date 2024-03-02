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

  useEffect(()=>{
    Aos.init();
  },[])


  return (
    <>
    <div className="container mx-auto">
      <Navbar />

      {/* <MyModal  visible={visible} onClose={() => setVisible(false)}/>      
      <Button onClick={()=> setVisible(true)}>Open Modal</Button>

      <Home />      
      <TeacherCaraosel />
      
      <Footer /> */}
      <main>
        <div id="home">          
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
