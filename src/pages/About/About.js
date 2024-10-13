import React from "react";
import SliderAbout from './../../components/SliderAbout/index';
import SixeteenCardsAbout from "../../components/SixeteenCardsAbout/SixeteenCardsAbout";
import TextImgAbout from './../../components/TextImgAbout/index';
import CarandTextimgAbout from './../../components/CarandTextimgAbout/CarandTextimgAbout';
import MainComponentsAbout from './../../components/MainComponentsAbout/index';
import FooterAbout from './../../components/FooterAbout/FooterAbout';



const About = () => {
    return (
        <div>
            <SliderAbout />
            <SixeteenCardsAbout />
            <TextImgAbout />
            <CarandTextimgAbout />
            <MainComponentsAbout />
            <FooterAbout />
        </div>
    )
}

export default About;