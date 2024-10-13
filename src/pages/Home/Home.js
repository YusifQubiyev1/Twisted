import React from 'react';
import ImageSlider from '../../components/ImageSlider';
import TextandImages from '../../components/TextandImages/TextandImages';
import CardsandModels from '../../components/CardsandModels/CardsandModels';
import WaterCar from '../../components/WaterCar/WaterCar';
import CarsInformations from '../../components/CarsInformations/CarsInformations';
import SliderCars from '../../components/SliderCars/SliderCars';
import PicturesFlexs from '../../components/PicturesFlexs/PicturesFlexs';
import FooterHome from '../../components/FooterHome/FooterHome';




import slide1 from '../../assets/images/Website-Home-scaled.jpg';
import slide2 from '../../assets/images/London-Landscape.jpg';
import slide3 from '../../assets/images/slide-3.jpg';

const images = [slide1, slide2, slide3];

const Home = () => {
  return (
    <div className="home">

      <ImageSlider images={images} />
      <TextandImages/>
      <CardsandModels/>
      <WaterCar/>
      <CarsInformations/>
      <SliderCars/>
      <PicturesFlexs/>
      <FooterHome/>

    </div>
  );
};

export default Home;
