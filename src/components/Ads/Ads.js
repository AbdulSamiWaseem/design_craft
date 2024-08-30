import React from 'react'
import './ads.css'
import Slider from 'react-slick'
var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    // slidesPerRow: 3,
    cssEase: 'linear',
    delay:0,
    pauseOnHover:true
};
const Ads = () => {
    return (
        <div>
        <Slider {...settings}>
            <div>
                <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65df7afeca56f8288764eabf_inkredible%20Notary%201-p-500.webp' />
            </div>
            <div>
                <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6558e337c192fd9129306404_evil%20olive-p-500.webp' />
            </div>
            <div>
                <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/6546a41db68c5cc835c96583_ao%20design%20library-p-500.webp' />
            </div>
            <div>
                <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/654a6df9be77ec6042fd1fb2_laurel-holloman-p-500.jpg' />
            </div>
            <div>
                <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/655657e3a65162c89fe5a98b_evilolive%20logo-p-500.webp' />
            </div>
            <div>
                <img src='https://cdn.prod.website-files.com/6526d18b341711c87eaea120/65946c337acd2c0b37d2fd45_AO%20design%20system-p-500.webp' />
            </div>
        </Slider>
        </div>

    );
}

export default Ads
