import "./Carousel.css";
import { useState } from "react";
import Arrows from "../../atoms/buttons/Arrows";

interface CarouselData {
  title: string;
  subTitle: string;
  altTag: string;
  path: string;
}

export interface CarouselProps {
  carouselData: CarouselData[];
}

const Carousel = (props: CarouselProps) => {
  const carouselProps = props;

  const [justifyContent, setJustifyContent] = useState(
    "carousel-container__carousel"
  );
  const [slideDirection, setSlideDirection] = useState(
    "carousel-container__carousel__slider"
  );

  const [justifyTextContent, setJustifyTextContent] = useState(
    "carousel-text-container__text-carousel"
  );
  const [textSlideDirection, setTextSlideDirection] = useState(
    "carousel-text-container__text-slider"
  );

  const [direction, setDirection] = useState(-1);

  const [disabled, setDisable] = useState(false);

  const slideNext = () => {
    if (direction === 1) {
      setDirection(-1);
      carouselProps.carouselData.unshift(carouselProps.carouselData.pop()!);
    }
    setJustifyContent("carousel-container__carousel justifyNext");
    setSlideDirection("carousel-container__carousel__slider slideNext");

    setJustifyTextContent("carousel-text-container__text-carousel justifyNext");
    setTextSlideDirection("carousel-text-container__text-slider slideNext");
    setDisable(true);
  };

  const slidePrev = () => {
    if (direction === -1) {
      setDirection(1);
      carouselProps.carouselData.push(carouselProps.carouselData.shift()!);
    }

    setJustifyContent("carousel-container__carousel justifyPrevious");
    setSlideDirection("carousel-container__carousel__slider slidePrevious");

    setJustifyTextContent(
      "carousel-text-container__text-carousel justifyPrevious"
    );
    setTextSlideDirection("carousel-text-container__text-slider slidePrevious");
    setDisable(true);
  };

  const slideShow = () => {
    if (direction === 1) {
      carouselProps.carouselData.unshift(carouselProps.carouselData.pop()!);
    } else {
      carouselProps.carouselData.push(carouselProps.carouselData.shift()!);
    }
    setSlideDirection("carousel-container__carousel__slider resetSlide");
    setTextSlideDirection("carousel-text-container__text-slider resetSlide");
    setDisable(false);
  };

  return (
    <div className="carousel-container">
      <div className={justifyContent}>
        <div className={slideDirection} onTransitionEnd={() => slideShow()}>
          {carouselProps.carouselData.map((item, i) => (
            <section key={i}>
              <img src={item.path} alt={item.altTag} />
            </section>
          ))}
        </div>
        <div className="carousel-text-container">
          <div className={justifyTextContent}>
            <div className={textSlideDirection}>
              {carouselProps.carouselData.map((item, i) => (
                <section key={i}>
                  <h1>{item.title}</h1>
                  <h2
                    className={
                      item.subTitle === "for everyone"
                        ? "subheading--oranges"
                        : "subheading"
                    }
                  >
                    {item.subTitle}
                  </h2>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Arrows
        slideNext={()=>slideNext()}
        slidePrev={()=>slidePrev()}
        disabled={disabled}
      />
    </div>
  );
};

export default Carousel;
