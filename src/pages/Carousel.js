
// /* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../App.css';
import Life from './Life';
import 'swiper/css/autoplay';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return  `https://picsum.photos/id/${id}/1920/1080`;

}

// function Carousel (props){
// console.log(props.caroselItemList)
// const carouselArray=[]
// for (let i=0; i<10;i++){
//   carouselArray.push(Object.keys(props.carouselItemList)[i])
// }
// }
/*

const Carousel = (props) => {
  console.log(props.carouselItemList)
  const carouselArray = []
  for (let i = 0; i < 10; i++) {
      carouselArray.push(Object.keys(props.carouselItemList)[i])
      
  }
  console.log(carouselArray)
return (  


  <div>Carousel</div>
)
}

export default Carousel;


*/





function createSlide() {
  return (
    <SwiperSlide>
      <img className="img" src={imgUrl /*Carousel*/()} alt=""  width={1000} height={"100%"}/>
    </SwiperSlide>
  );
}


export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
  );
};



// // /******************************** */


// // // // import React, { useRef, useState } from "react";
// // // // // Import Swiper React components
// // // // import { Swiper, SwiperSlide } from "swiper/react";

// // // // // Import Swiper styles
// // // // import "swiper/css";
// // // // import "swiper/css/navigation";
// // // // import "swiper/css/pagination";

// // // // import "./Carousel.css";

// // // // // import required modules
// // // // import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// // // // function Carousel() {
// // // //   return (
// // // //     <>
// // // //       <Swiper
// // // //         cssMode={true}
// // // //         navigation={true}
// // // //         pagination={true}
// // // //         mousewheel={true}
// // // //         keyboard={true}
// // // //         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
// // // //         // className="mySwiper"
// // // //       >
// // // //         <SwiperSlide>sdfsf</SwiperSlide>
// // // //         <SwiperSlide>Slide 2</SwiperSlide>
// // // //         <SwiperSlide>Slide 3</SwiperSlide>
// // // //         <SwiperSlide>Slide 4</SwiperSlide>
// // // //         <SwiperSlide>Slide 5</SwiperSlide>
// // // //         <SwiperSlide>Slide 6</SwiperSlide>
// // // //         <SwiperSlide>Slide 7</SwiperSlide>
// // // //         <SwiperSlide>Slide 8</SwiperSlide>
// // // //         <SwiperSlide>Slide 9</SwiperSlide>
// // // //       </Swiper>
    
// // // //     </>
   
// // // //   );
// // // // }
// // // // export default Carousel;


// // /************* */




// // /*
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // import './styles.css';

// // import { EffectCoverflow, Pagination, Navigation, Parallax } from 'swiper';

// // const CarouselSlider = (news) => {
// //   const pagination = {
// //     clickable: true,
// //     renderBullet: function (index, className) {
// //       return '<span class="' + className + '">' + (index + 1) + '</span>';
// //     },
// //   };
// //   let newData = [];
// //   for (let i = 0; i < 10; i++) {
// //     newData.push(news.data[i]);
// //   }

// //   const newsArray = newData.map(function (each, key) {
// //     return (
// //       <SwiperSlide
// //         className='items-start justify-start flex h-full w-full '
// //         key={key}
// //       >
// //         <div slot='container-start' className='parallax-bg'>
// //           <a
// //             href={
// //               each?.['description']
// //                 ? each['description'].substring(
// //                     10,
// //                     each['description'].indexOf(' ', 10) - 1
// //                   )
// //                 : ''
// //             }
// //             className='relative'
// //           >
// //             <img
// //               src={
// //                 each?.['description']
// //                   ? each['description'].substring(
// //                       10,
// //                       each['description'].indexOf(' ', 10) - 1
// //                     )
// //                   : ''
// //               }
// //               alt='test'
// //               className='image rounded-3xl'
// //             ></img>
// //           </a>
// //         </div>
// //         <div
// //           className='opacity-80 bg-blue-600 text-2xl p-3 ml-44 mb-4 relative rounded-full'
// //           data-swiper-parallax='-100'
// //         >
// //           <div>{each?.['title'] ? each['title'] : ''}</div>
// //         </div>
// //       </SwiperSlide>
// //     );
// //   });

// //   return (
// //     <>
// //       <Swiper
// //         speed={600}
// //         parallax={true}
// //         effect={'coverflow'}
// //         grabCursor={true}
// //         centeredSlides={true}
// //         slidesPerView={'auto'}
// //         initialSlide={2}
// //         coverflowEffect={{
// //           rotate: 30,
// //           stretch: 0,
// //           depth: 200,
// //           modifier: 1,
// //           slideShadows: true,
// //         }}
// //         pagination={pagination}
// //         modules={[Parallax, Pagination, Navigation, EffectCoverflow]}
// //         className='mySwiper max-w-screen-lg'
// //       >
// //         {newsArray}
// //       </Swiper>
// //     </>
// //   );
// // };

// // export default CarouselSlider;
// // */



/*************************** */
/*

import React from 'react'




const Carousel = (props) => {
    console.log(props.carouselItemList)
    const carouselArray = []
    for (let i = 0; i < 10; i++) {
        carouselArray.push(Object.keys(props.carouselItemList)[i])
        
    }
    console.log(carouselArray)
  return (


    <div>Carousel</div>
  )
}

export default Carousel;


*/