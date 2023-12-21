import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMenu from "../menuPage/CardMenu";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardData = [
    {
      price: 19.99,
      name: "Arroz con Pollo",
      description: "Arron que lleva pollo",
    },
    {
      price: 29.99,
      name: "Encebollado",
      description: "Arron que lleva pollo",
    },
    {
      price: 39.99,
      name: "Seco de Chancho",
      description: "Arron que lleva pollo",
    },
  ];

  return (
    <div className="w-full p-10 xl:hidden">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <CardMenu
              price={card.price}
              name={card.name}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
