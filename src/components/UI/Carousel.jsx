import '../../index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Card from "./Card";
import cardsData from "../../data/cards.json";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

export default function CardCarousel() {
    return (
        <div className='relative w-full'>
            <button className="swiper-button-prev-custom absolute group hidden md:flex flex-row justify-center items-center w-10 h-10 top-1/2 left-0 -translate-y-1/2 z-10 hover:cursor-pointer"><ArrowLeftCircle size={32} className='carousel-button'/></button>
            <button className="swiper-button-next-custom absolute hidden group md:flex flex-row justify-center items-center w-10 h-10 top-1/2 right-0 -translate-y-1/2 z-10 hover:cursor-pointer"><ArrowRightCircle size={32} className='carousel-button'/></button>
            
            <Swiper
                modules={[Navigation, Autoplay]}
                className='flex flex-row justify-center items-center'
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                bslidesPerView={1}
            >
                {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                    <Card 
                        image={card.image} 
                        title={card.title} 
                        description={card.description}
                        subtitle={card.subtitle}
                        award={card.award} 
                        link={card.link}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
  }
