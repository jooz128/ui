    import React from 'react';
    import Slider from 'react-slick';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import bannerImage from '../../assets/hero-image.png';

    const Hero = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="" style={{'margin-top':'260px'}}> {/* Adjusted the margin top to move the Hero section below the Navbar */}
                <Slider {...settings}>
                    <div>
                        <img
                            className="w-full"
                            src={bannerImage} // Replace this with your image URL
                            alt="slide1"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full"
                            src={bannerImage} // Replace this with your image URL
                            alt="slide1"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full"
                            src={bannerImage} // Replace this with your image URL
                            alt="slide1"
                        />
                    </div>
                    <div>
                        <img
                            className="w-full"
                            src={bannerImage} // Replace this with your image URL
                            alt="slide1"
                        />
                    </div>
                </Slider>
                <div className="absolute bottom-0 left-0 p-4  ">
                    <button className="bg-gray-300 text-red-500 px-4 py-4 rounded-lg font-bold text-2xl">Book AT BEST PRICES</button>
                </div>
            </div>
        );
    };

    export default Hero;
