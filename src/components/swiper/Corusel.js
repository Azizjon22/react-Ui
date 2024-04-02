import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './corusel.css'
import daryus from "../../assets/imgbg/daryusbg.jpg";
import darr from '../../assets/img/pokito.PNG'
import inn from '../../assets/img/in.png'
import inBg from '../../assets/imgbg/inBg.jpg'
import loyi from '../../assets/img/loyi.png'



import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import AppRafael from '../appRafael/AppRafael';
import bg from '../../assets/imgbg/imagebg.jpg'



const Corusel = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    
  >
    <SwiperSlide className='slider' >
      <AppRafael
      bg={bg}
      lorem='lorem ipsum'
      name='Luo Yi'
      image={loyi}
      kda='Mage'
      cda='8.9'
      subtitle='Lorem ipsum'
      subName='Order Now'
      subFooter='Lorem Ipsum'
      FirstName='Luo Yi'
      description='Lorem Ipsum'
      descriptionName='Lorem ipsum dolor sit amet constructor elite
      quaerat odio'
      gameTrailer='Wath Game Trailer'
      src="https://www.youtube.com/embed/hF5z5YcsUIY"
      title="New Skin | Luo Yi &quot;Oracle of Sol&quot; | Mobile Legends: Bang Bang"
      frameborder='0'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      width="914"
      height="514"
         />
    </SwiperSlide>

    <SwiperSlide className='slider'>
     <AppRafael
     bg={daryus}
     lorem='lorem ipsum'
     name='Paquito'
     image={darr}
     kda='Fighter'
     cda='8.9'
     subtitle='Lorem ipsum'
     subName='Order Now'
     subFooter='Lorem Ipsum'
     FirstName='Paquito'
     description='Lorem Ipsum'
     descriptionName='Lorem ipsum dolor sit amet constructor elite
     quaerat odio'
     gameTrailer='Wath Game Trailer'
     src="https://www.youtube.com/embed/jz9lhdaHYGU"
     title="НЕПОКОЛЕБИМАЯ ВОЛЯ | ТРЕЙЛЕР НОВОГО ГЕРОЯ ПАКИТО | Mobile Legends: Bang Bang"
     frameborder='0'
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerpolicy="strict-origin-when-cross-origin"
     allowfullscreen
     width="914"
     height="514"
     />
    </SwiperSlide>

    <SwiperSlide className='slider'>
    <AppRafael
     bg={inBg}
     lorem='lorem ipsum'
     name='Yin'
     image={inn}
     kda='Fighter'
     cda='8.9'
     subtitle='Lorem ipsum'
     subName='Order Now'
     subFooter='Lorem Ipsum'
     FirstName='Yin'
     description='Lorem Ipsum'
     descriptionName='Lorem ipsum dolor sit amet constructor elite quaerat odio'
     gameTrailer='Wath Game Trailer'
     src="https://www.youtube.com/embed/AAeSSfdQIfk"
     title="ОДЕРЖИМОСТЬ: БЕСКОНЕЧНАЯ БОРЬБА | СВЕТ ОТРЕЧЕНИЯ | СИНЕМАТИК | Mobile Legends: Bang Bang"
     frameborder='0'
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerpolicy="strict-origin-when-cross-origin"
     allowfullscreen
     width="914"
     height="514"
     />
    </SwiperSlide>
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
  </Swiper>

  

  )
}

export default Corusel