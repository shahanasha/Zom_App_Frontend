import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topMeals } from './TopMeals';
import Slider from "react-slick";
import CarouselItem from './CarouselItem';

const MultipleItemCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
      };

    return (
        <div>
            <Slider {...settings}>
                {topMeals.map((item) =><CarouselItem image={item.image} title={item.title} />
                )}
            </Slider>
        </div>
    )

}
export default MultipleItemCarousel