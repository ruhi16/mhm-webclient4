import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import TeacherCard from './TeacherCard'

import { Teachers } from './teachers'



function TeacherCaraosel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true,
        // speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 640,  //lesser than sm(640)
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 1024,   //lesser than lg(1024)
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              }
            
          ]
      };
  return (
    <>        
        <div className='w-3/4 mx-auto py-8 gap-4'>
        <Slider {...settings} >
            {
                Teachers.map((teacher)=>(
                    <TeacherCard key={teacher.email} teacher={teacher}/>
                ))
            }
        </Slider>

        </div>
    </>
  )
}

export default TeacherCaraosel