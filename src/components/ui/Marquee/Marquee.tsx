'use client';

import React, { FC, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Pagination,
    Navigation,
    Autoplay,
} from 'swiper/modules';
import cn from 'classnames';
import s from './Marquee.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Props {
    children: ReactNode[];
    variant?: 'primary' | 'secondary';
}

const Marquee: FC<Props> = ({
    children,
    variant = 'primary',
}) => {
    const rootClassName = cn(s.root, {
        [s.secondary]: variant === 'secondary',
    });

    return (
        <div className={rootClassName}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() =>
                    console.log('slide change')
                }
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                // modules={[Autoplay, Pagination, Navigation]}
                modules={[Autoplay]}
                speed={5000}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
            >
                {children.map((item) => (
                    <SwiperSlide key={Date.now()}>
                        <div className={s.container}>
                            {item}
                        </div>
                    </SwiperSlide>
                ))}
                {children.map((item) => (
                    <SwiperSlide key={Date.now()}>
                        <div className={s.container}>
                            {item}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Marquee;
