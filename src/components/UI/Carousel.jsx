import '../../index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Card from "./Card";
import cardsData from "../../data/cards.json";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronDoubleRight, ChevronDoubleLeft } from 'react-bootstrap-icons';

export default function CardCarousel() {
    return (
        <div className='relative w-full'>
            <button className="swiper-button-prev-custom absolute hidden md:flex flex-row justify-center items-center w-14 h-14 top-1/2 rounded-full left-4 bg-secondary -translate-y-1/2 z-10 hover:cursor-pointer"><ChevronDoubleLeft color={'#ffffff'} size={32}/></button>
            <button className="swiper-button-next-custom absolute hidden md:flex flex-row justify-center items-center w-14 h-14 top-1/2 rounded-full right-4 bg-secondary -translate-y-1/2 z-10 hover:cursor-pointer"><ChevronDoubleRight color={'#ffffff'} size={32}/></button>
            
            <Swiper
                spaceBetween={8}
                modules={[Navigation, Autoplay]}
                className='w-full'
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    430: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {cardsData.map((card) => (
                <SwiperSlide key={card.id} className=''>
                    <Card 
                        image={card.image} 
                        title={card.title} 
                        description={card.description}
                        award={card.award} 
                        link={card.link}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
  }