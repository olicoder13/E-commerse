import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './styles/sliderImagenes.css'

const SliderImagenes = ({ images }) => {
  return (
    <div className="galery">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        {
            images?.map(item => (
            <SplideSlide key={item.url}>
                <img src={item.url} alt={`Image ${item.id}`} />
            </SplideSlide>
            ))
        }
        
      </Splide>
    </div>
  );
};

export default SliderImagenes;
