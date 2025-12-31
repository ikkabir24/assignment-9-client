import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';

const HeroSwiper = ({ popularData }) => {
    if (!popularData || popularData.length === 0) {
        return null;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-5">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[400px] md:h-[500px] rounded-xl"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}>

                {
                    popularData.map(item => (
                        <SwiperSlide key={item.skillId}>
                            <div className="relative h-full w-full">
                                <img
                                    src={item.image}
                                    alt={item.skillName}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                            {item.skillName}
                                        </h2>
                                        <div className="flex items-center gap-4 mb-2">
                                            <p className="text-sm md:text-base">
                                                By {item.providerName}
                                            </p>
                                            <span className="flex items-center gap-1">
                                                <FaStar></FaStar>
                                                {item.rating}
                                            </span>
                                        </div>
                                        <p className="text-sm md:text-base mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                                ${item.price}/session
                                            </span>
                                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                                {item.slotsAvailable} slots left
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeroSwiper;