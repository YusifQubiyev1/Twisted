import React from "react";
import SliderCommissions from './../../components/SliderCommissions/index';
import TextandLogoCommissions from './../../components/TextandLogoCommissions/index';
import ImgandTextCommissions from './../../components/ImgandTextCommissions/index';
import CardsandTextCommissions from './../../components/CardsandTextCommissions/index';
import ImgCollageModels from "../../components/ImgCollageModels/ImgCollageModels";
import PTagmodels from "../../components/PTagmodels/PTagmodels";
import FooterCommissions from './../../components/FooterCommissions/index';


const Commissions = () => {
    return (
        <div>
            <SliderCommissions />
            <TextandLogoCommissions />
            <ImgandTextCommissions />
            <CardsandTextCommissions />
            <ImgCollageModels />
            <PTagmodels />
            <FooterCommissions />
        </div>
    )
}

export default Commissions;