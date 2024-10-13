import React from "react";
import ImagecarModels from '../../components/ImagecarModels/ImagecarModels';
import PTagmodels from '../../components/PTagmodels/PTagmodels';
import ImgCollageModels from '../../components/ImgCollageModels/ImgCollageModels';
import CardsandModelsmodels from '../../components/CardsandModelsmodels/CardsandModelsmodels';
import PickupImageModels from '../../components/PickupImageModels/PickupImageModels';
import TextandCarsimgModels from '../../components/TextandCarsimgModels/TextandCarsimgModels';
import PlasandOpenModels from "../../components/PlasandOpenModels/PlasandOpenModels";

import FooterModels from "../../components/FooterModels/FooterModels";

const Models = () => {
    return (
        <div>
            <ImagecarModels />
            <PTagmodels/>
            <ImgCollageModels/>
            <CardsandModelsmodels />
            <PickupImageModels />
            <TextandCarsimgModels />
            <PlasandOpenModels />
            <PTagmodels/>
            <FooterModels />
        </div>
    )
}

export default Models;