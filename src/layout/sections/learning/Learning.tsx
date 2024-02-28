import styled from "styled-components";
import { SectionTitle } from '../../../conponents/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./../../../styles/slider/slider.css";

import Img1 from "./../../../assets/images/swiper-carusele/pic1.jpg";
import Img2 from "./../../../assets/images/swiper-carusele/pic2.jpg";
import Img3 from "./../../../assets/images/swiper-carusele/pic3.jpg";
import Img4 from "./../../../assets/images/swiper-carusele/pic4.jpg";
import Img5 from "./../../../assets/images/swiper-carusele/pic5.jpg";
import Img6 from "./../../../assets/images/swiper-carusele/pic6.jpg";

import Img7 from "./../../../assets/images/swiper-carusele/pic-2-1.jpg";
import Img8 from "./../../../assets/images/swiper-carusele/pic-2-2.jpg";
import Img9 from "./../../../assets/images/swiper-carusele/pic-2-3.jpg";
import Img10 from "./../../../assets/images/swiper-carusele/pic-2-4.jpg";
import Img11 from "./../../../assets/images/swiper-carusele/pic-2-5.jpg";
import Img12 from "./../../../assets/images/swiper-carusele/pic-2-6.jpg";


export const Learning = () => {

    const slides1 = [
        {
            imageSrc: Img1,
            imageAlt: 'Picture 1'
        },
        {
            imageSrc: Img2,
            imageAlt: 'Picture 2'
        },
        {
            imageSrc: Img3,
            imageAlt: 'Picture 3'
        },
        {
            imageSrc: Img4,
            imageAlt: 'Picture 4'
        },
        {
            imageSrc: Img5,
            imageAlt: 'Picture 5'
        },
        {
            imageSrc: Img6,
            imageAlt: 'Picture 6'
        }
    ]

    const slides2 = [
        {
            imageSrc: Img7,
            imageAlt: 'Picture 7'
        },
        {
            imageSrc: Img8,
            imageAlt: 'Picture 8'
        },
        {
            imageSrc: Img9,
            imageAlt: 'Picture 9'
        },
        {
            imageSrc: Img10,
            imageAlt: 'Picture 10'
        },
        {
            imageSrc: Img11,
            imageAlt: 'Picture 11'
        },
        {
            imageSrc: Img12,
            imageAlt: 'Picture 12'
        }
    ]
    return (
        <StyledLearning>
                <Wrapper>
                    <SectionTitle>Learning</SectionTitle>
                    <Title>After Effects & Photoshop</Title>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={40}
                        loop={true} 
                        initialSlide={0}
                        className="mySwiper"
                    > 
                        {slides1.map((slide, index) => 

                            <SwiperSlide key={index}>
                                <img src={slide.imageSrc} alt={slide.imageAlt} />
                            </SwiperSlide>

                        )}

                    </Swiper>
                    <Title>Website , Html & cSS</Title>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={40}                         
                        initialSlide={0}
                        className="mySwiper"
                    > 
                        {slides2.map((slide, index) => 

                            <SwiperSlide key={index}>
                                <img src={slide.imageSrc} alt={slide.imageAlt} />
                            </SwiperSlide>

                        )}

                    </Swiper>
                    
                </Wrapper>
            
        </StyledLearning>
    );
};

const StyledLearning = styled.section`
    position: relative;
    background-color: ${({theme}) => theme.bgElement};
    min-height: 80vh;    
`
const Wrapper = styled.div`
    max-width: 100%;
    padding: 0 0 0 75px;
    margin: 0 auto;
    /* outline: 1px solid yellow; */
`

const Title = styled.h3`
    margin-bottom: 10px;
    color: white;
`